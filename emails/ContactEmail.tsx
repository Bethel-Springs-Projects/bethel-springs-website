/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from "react-email";
import * as React from "react";

interface ContactEmailProps {
  enquiryType: string;
  enquiryFor: string;
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  message?: string;
}

const PRIMARY_COLOR = "#008F85"; // ← Replace with your brand's primary hex color
const PRIMARY_LIGHT = "#F8FBFB"; // ← Lighter tint for backgrounds

export default function ContactEmail({
  enquiryType,
  enquiryFor,
  name,
  email,
  phoneNumber,
  country,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New enquiry from {name} – {enquiryType}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans p-4">
          <Container className="max-w-xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header bar with primary color */}
            <Section
              style={{ backgroundColor: PRIMARY_COLOR, padding: "20px 30px" }}
            >
              <Row>
                <Column style={{ verticalAlign: "middle", textAlign: "left" }}>
                  <Heading className="text-white text-xl font-semibold m-0">
                    New Contact Form Submission
                  </Heading>
                </Column>

                <Column style={{ width: "100px", verticalAlign: "middle" }}>
                  <img
                    src="https://bethelspringsgroup.com/bethel-springs-logo.webp"
                    alt="Company Logo"
                    width="100"
                    height="auto"
                    style={{ display: "block" }}
                  />
                </Column>
              </Row>
            </Section>

            {/* Content */}
            <Section className="p-6">
              <Text className="text-gray-600 text-sm mb-4">
                You have received a new message from your website’s contact
                form.
              </Text>

              <Section className="mb-4">
                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Enquiry Type
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    {enquiryType}
                  </Column>
                </Row>

                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Enquiry For
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    {enquiryFor}
                  </Column>
                </Row>

                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Name
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    {name}
                  </Column>
                </Row>

                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Email
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-600 no-underline"
                    >
                      {email}
                    </a>
                  </Column>
                </Row>

                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Country
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    {country}
                  </Column>
                </Row>

                <Row className="border-b border-gray-100 py-2">
                  <Column className="w-1/3 text-gray-500 text-sm font-medium">
                    Phone
                  </Column>
                  <Column className="w-2/3 text-gray-800 text-sm">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-blue-600 no-underline"
                    >
                      {phoneNumber}
                    </a>
                  </Column>
                </Row>
              </Section>

              {message && (
                <>
                  <Hr className="my-4 border-gray-200" />
                  <Heading className="text-lg font-semibold text-gray-700 m-0 mb-2">
                    Message
                  </Heading>
                  <Text className="text-gray-700 text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded border border-gray-200">
                    {message}
                  </Text>
                </>
              )}
            </Section>

            {/* Footer */}
            <Section
              style={{ backgroundColor: PRIMARY_LIGHT }}
              className="p-4 text-center"
            >
              <Text className="text-xs text-gray-500 m-0">
                This email was sent from your website’s contact form.
              </Text>
              <Text className="text-xs text-gray-400 m-0 mt-1">
                © {new Date().getFullYear()} Bethel Springs. All rights
                reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
