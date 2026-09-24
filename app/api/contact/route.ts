import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import type { ContactPayload } from "@/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
    return NextResponse.json(
      { error: "name, valid email aur message zaroori hain" },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    const doc = await Contact.create({ name, email, phone, service, message });
    return NextResponse.json({ ok: true, id: doc.id }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
