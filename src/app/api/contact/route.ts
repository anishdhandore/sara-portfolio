import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedSubject = String(subject || "General Inquiry").trim();
    const trimmedMessage = String(message).trim();

    // Default sender: onboarding@resend.dev (works immediately without DNS verification)
    // Or custom verified domain if configured via RESEND_FROM_EMAIL
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Sara Portfolio <onboarding@resend.dev>";
    const toAddress = process.env.RESEND_TO_EMAIL || "dhandoresara@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: trimmedEmail,
      subject: `[${trimmedSubject}] from ${trimmedName}`,
      text: `Sender: ${trimmedName}\nEmail: ${trimmedEmail}\nInquiry Type: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #2a2a2a; border-radius: 8px; background-color: #121212; color: #f4ede4;">
          <div style="border-bottom: 1px solid #333; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #D93B2F; margin: 0; font-size: 20px; font-weight: 600;">New Message from Portfolio</h2>
            <p style="color: #999; margin: 4px 0 0; font-size: 13px;">via saradhandore.com</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #888; width: 110px;"><strong>Sender:</strong></td>
              <td style="padding: 6px 0; color: #fff;">${trimmedName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;"><strong>Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${trimmedEmail}" style="color: #D93B2F; text-decoration: none;">${trimmedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;"><strong>Inquiry Type:</strong></td>
              <td style="padding: 6px 0; color: #fff;">${trimmedSubject}</td>
            </tr>
          </table>

          <div style="background-color: #1c1c1c; border-left: 3px solid #D93B2F; padding: 16px; border-radius: 4px; margin-top: 16px;">
            <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #ece6df;">${trimmedMessage}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #2a2a2a; font-size: 12px; color: #777;">
            Hit reply directly in your email client to respond to ${trimmedName} (${trimmedEmail}).
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
