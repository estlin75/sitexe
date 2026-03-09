import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message } = body;

    if (!email || !message) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      // Dla portu 587 (OVH STARTTLS) secure musi być false. Szyfrowanie włącza się automatycznie później.
      secure: Number(process.env.SMTP_PORT) === 465, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Ignoruje rygorystyczne sprawdzanie certyfikatów SSL (częsty problem przy połączeniach lokalnych z OVH)
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Sitexe System" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[UPLINK] Nowa wiadomość od: ${email}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background: #050505; color: #00ff9f; border: 1px solid #00ff9f;">
          <h2 style="color: #00f0ff;">SYSTEM UPLINK ESTABLISHED</h2>
          <p><strong>NADAWCA:</strong> ${email}</p>
          <div style="padding: 15px; background: #111; border-left: 3px solid #ff00aa; color: #fff; margin-top: 20px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}