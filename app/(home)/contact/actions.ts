"use server";

import { Resend } from "resend";
import { render } from "react-email";
import { contactSchema, type ContactData } from "@/lib/contactSchema";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactData) {
  // Validate
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // Send
    const html = await render(ContactEmail(result.data));
    const { error } = await resend.emails.send({
      from: `Website <contact@bethelspringsgroup.com>`,
      to: ["info@bethelspringsgroup.com"],
      replyTo: result.data.email,
      subject: `New: ${result.data.enquiryType} from ${result.data.name}`,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return {
      success: false,
      errors: { general: message },
    };
  }
}
