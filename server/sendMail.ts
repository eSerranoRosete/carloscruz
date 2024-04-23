"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Props = {
  lead: {
    name?: string;
    email: string;
    phone?: string;
  };
};

export async function sendMail({ lead }: Props) {
  let text: string = "Nuevo lead:\n\n";

  Object.entries(lead).forEach(([key, value]) => {
    text += `${key}: ${value}\n`;
  });

  resend.emails.send({
    from: "carloscruz@moduly.app",
    to: "eserranor98@gmail.com",
    subject: "Hello World",
    text,
  });

  return "Email sent!";
}
