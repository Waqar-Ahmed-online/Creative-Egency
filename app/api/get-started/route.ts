import { NextResponse } from "next/server";
import { mailTransporter } from "@/lib/mail";
import type { GetStartedPayload } from "@/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<GetStartedPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, company, service, message } = body;

  if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
    return NextResponse.json(
      { error: "name, valid email aur message zaroori hain" },
      { status: 400 },
    );
  }

  try {
    await mailTransporter.sendMail({
      from: `"Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New "Get Started" submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[POST /api/get-started]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}