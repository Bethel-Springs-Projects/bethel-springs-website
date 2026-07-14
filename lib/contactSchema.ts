import { isValidPhoneNumber } from "libphonenumber-js";
import * as z from "zod";

export const enquiryType = [
  "General enquiry",
  "Care at home",
  "Supported living",
  "Urgent help",
  "Something else",
] as const;

export const enquiryFor = [
  "Myself",
  "Parent",
  "Child",
  "Partner",
  "Relative",
  "Client / Patient",
  "Other",
] as const;

const phoneSchema = z.string().refine((value) => {
  try {
    return isValidPhoneNumber(value);
  } catch {
    return false;
  }
}, "Invalid phone number");

export const contactSchema = z.object({
  enquiryType: z.enum(enquiryType, {
    error: "Please select an enquiry type",
  }),
  enquiryFor: z.enum(enquiryFor, {
    error: "Please select an enquiry type",
  }),
  name: z
    .string()
    .min(3, "First name must be at least 3 characters long")
    .max(100, "First name must be less than 100 characters long")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes",
    ),
  email: z
    .email("Enter a valid email address")
    .max(100, "email must be less than 100 characters long"),
  country: z
    .string("must provide a valid country")
    .max(100, "country must be less than 100 characters long"),
  phoneNumber: phoneSchema,
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(500, "Message is too long")
    .optional()
    .or(z.literal("")),
});

export type ContactData = z.infer<typeof contactSchema>;
