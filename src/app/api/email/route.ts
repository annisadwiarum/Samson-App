import { Resend } from "resend";
import EmailSender from "@/emails/welcome";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username } = await request.json();
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "annisaalfatih1453@gmail.com",
    subject: "hello world",
    react: EmailSender({
      username,
    }),
  });

  return NextResponse.json({
    status: "ok",
  });
}
