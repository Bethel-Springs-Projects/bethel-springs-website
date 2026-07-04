"use client";

import { Loader2, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { sendContactEmail } from "@/app/(home)/contact/actions";
import {
  ContactData,
  contactSchema,
  enquiryFor,
  enquiryType,
} from "@/lib/contactSchema";

const ContactPageContent = () => {
  const { handleSubmit, control, setError, reset } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      enquiryType: undefined,
      enquiryFor: undefined,
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<
    Partial<{
      msg: string;
      status: "idle" | "success" | "failed";
    }>
  >({});
  console.log("Status:", status);

  const onSubmit = async (data: ContactData) => {
    setIsPending(true);
    const result = await sendContactEmail(data);
    setIsPending(false);

    if (result.success) {
      setStatus({
        msg: "Message received. Our team will review it and respond shortly",
        status: "success",
      });
      reset();
    }

    if (result.errors) {
      // Check if it's a general error (from Resend)
      if ("general" in result.errors) {
        setStatus({
          msg: String(result.errors.general),
          status: "failed",
        });
      } else {
        // It's field errors from Zod
        Object.entries(result.errors).forEach(([field, messages]) => {
          setError(field as keyof ContactData, {
            type: "server",
            message: messages?.[0],
          });
        });
        setStatus({
          msg: "Please fix the errors above.",
          status: "failed",
        });
      }
    }
  };

  return (
    <div>
      <section className="padding-x padding-y bg-primary/10">
        <div className="flex flex-col items-center">
          <h1 className=" mt-2 md:mt-4 text-3xl md:text-[48px] lg:text-[56px] leading-10 md:leading-tight font-medium max-w-[580px]">
            Contact Support
          </h1>
          <p className="mt-4 md:mt-6 text-base leading-relaxed md:leading-7 text-foreground/70 max-w-[450px] md:max-w-[520px] text-center">
            Our support team is always ready to assist you with any questions,
            concerns or assistance you may need.
          </p>
        </div>
      </section>

      <div className="padding-x py-10 md:py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg max-w-[864px] mx-auto bg-white"
        >
          <FieldSet className="gap-6">
            <div className="grid sm:grid-cols-2 gap-2.5 md:gap-4.5">
              <Controller
                name="enquiryType"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel htmlFor={field.name} className="form-label">
                      How can we help?
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        className="form-input !h-14 relative"
                      >
                        <SelectValue
                          placeholder={field.value || "General enquiry"}
                        />
                      </SelectTrigger>

                      <SelectContent position="popper">
                        {enquiryType.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="form-error"
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="enquiryFor"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel htmlFor={field.name} className="form-label">
                      Who is this for?
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        className="form-input !h-14 relative"
                      >
                        <SelectValue
                          placeholder={field.value || "Select an option"}
                        />
                      </SelectTrigger>

                      <SelectContent position="popper">
                        {enquiryFor.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="form-error"
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor={field.name} className="form-label">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Your Name"
                    className="form-input"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="form-error"
                    />
                  )}
                </Field>
              )}
            />

            <div className="grid sm:grid-cols-2 gap-2.5 md:gap-4.5">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel htmlFor={field.name} className="form-label">
                      Email Address
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your Email"
                      className="form-input"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="form-error"
                      />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel htmlFor={field.name} className="form-label">
                      Phone Number
                    </FieldLabel>
                    <PhoneInput
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                      inline
                      aria-invalid={fieldState.invalid}
                      className="form-input border"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="form-error"
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor={field.name} className="form-label">
                    Message (Optional)
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    maxLength={500}
                    placeholder="Write us what you are really concern about..."
                    className="form-input h-[204px]! font-roboto"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="form-error"
                    />
                  )}
                </Field>
              )}
            />
          </FieldSet>

          <Button
            disabled={isPending}
            type="submit"
            className="mt-12 sm:mt-6 submit-button"
          >
            {isPending ? <Loader2 className="size-6 animate-spin" /> : "Submit"}
          </Button>
        </form>
        {status.msg && (
          <p
            className={`${status.status === "failed" ? "text-red-500" : "text-green-400"} font-inter mt-3 `}
          >
            {status.msg}
          </p>
        )}
      </div>

      <div className="padding-x py-10 md:py-25">
        <div className="grid md:grid-cols-2 gap-6 max-w-[802px] mx-auto">
          <div className="px-4.5 py-6 space-y-1 bg-primary/10 rounded-lg">
            <div className="size-10 flex items-center justify-center bg-primary rounded-full">
              <Mail className="size-5 text-white" />
            </div>
            <h2 className="max-md:mt-2 text-xl md:text-2xl font-medium md:leading-8">
              Send us an Email
            </h2>
            <p className="text-base font-light leading-5 md:leading-6">
              We&apos;re here to help
            </p>

            <a
              href="mailto:contact@bethelspringsgroup.com"
              className="text-base font-normal leading-6 text-primary"
            >
              contact@bethelspringsgroup.com
            </a>
          </div>
          <div className="px-4.5 py-6 space-y-1 bg-primary/10 rounded-lg">
            <div className="size-10 flex items-center justify-center bg-primary rounded-full">
              <PhoneCall className="size-5 text-white" />
            </div>
            <h2 className="max-md:mt-2 text-xl md:text-2xl font-medium md:leading-8">
              Give us a Call
            </h2>
            <p className="text-base font-light leading-5 md:leading-6">
              We&apos;re here to help
            </p>

            <a
              href="tel:+447974369854"
              className="text-base font-normal leading-6 text-primary"
            >
              +44 7974 369854
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContent;
