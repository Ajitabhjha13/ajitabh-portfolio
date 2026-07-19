import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/portfolio";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || name.length > 120) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service isn't configured yet. Please email me directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      // "onboarding@resend.dev" works out-of-the-box with no domain setup —
      // fine for a personal contact form. Swap this once you verify your own domain.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Something went wrong. Please try emailing me directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, message: "Message sent. I'll get back to you soon!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong. Please try emailing me directly." },
      { status: 500 }
    );
  }
}
