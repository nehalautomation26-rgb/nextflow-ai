import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    // Environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "TO_EMAIL is missing.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "NextFlow AI <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Message — ${name}`,
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #111827;
            max-width: 650px;
            margin: 0 auto;
          "
        >
          <h2 style="color: #2563EB;">
            New Contact Form Submission
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Company:</strong>
            ${company || "Not provided"}
          </p>

          <p>
            <strong>Service:</strong>
            ${service || "Not provided"}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <div
            style="
              background: #f3f4f6;
              padding: 16px;
              border-radius: 8px;
              white-space: pre-wrap;
            "
          >
            ${message}
          </div>

          <hr />

          <p style="font-size: 12px; color: #6b7280;">
            Sent from the NextFlow AI website contact form.
          </p>
        </div>
      `,
    });

    // Resend error
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Email could not be sent.",
        },
        { status: 500 }
      );
    }

    console.log("RESEND SUCCESS:", data);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the email.",
      },
      { status: 500 }
    );
  }
}