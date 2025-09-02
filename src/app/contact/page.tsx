"use client";
import React, { useState } from "react";
import { addToast, Button, Form, Input, Spinner, Textarea } from "@heroui/react";
import Link from "next/link";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingForm, setSendingForm] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingForm(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        // setName(""); setEmail(""); setMessage("");
        addToast({
          title: "Request sent successfully",
          color: "success",
        });
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch(error => {
      console.error("Error sending email:", error);
      addToast({
        title: "Failed to send request",
        description: "Please try again later.",
        color: "danger",
      });
    })
    .finally(() => setSendingForm(false));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">CONTACT US</h2>
      <div className="mb-8 flex gap-2 flex-col">
        <div>
          <p className="text-md">
            <b>Phone: </b>
            <a href="tel:+971543962051" className="text-gray-700 underlined">
              {" "}
              +971 54 396 2051
            </a>
          </p>
        </div>
        <div>
          <p className="text-md">
            <b>Mail: </b>
            <a href="mailto:support@tango.com" className="text-gray-700">
              {" "}
              support@zaurtango.com
            </a>
          </p>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
        <Form className="w-full flex flex-col gap-3" onSubmit={onSubmit} action='https://formspree.io/f/xrblzdyn' method="post">
          <Input
            isRequired
            errorMessage="Please enter your name"
            label="Name"
            name="name"
            variant="underlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            name="email"
            type="email"
            variant="underlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            isRequired
            errorMessage="Please enter your message"
            label="Message"
            name="message"
            variant="underlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex flex-col md:flex-row gap-4 my-8">
            <p className="text-xs text-gray-500 w-full md:w-1/2">
              By sending your message, you agree to accept the General <Link href='/terms' className="underline">Terms and
              Conditions</Link> of Use and that your data will be processed in
              compliance with the <Link href='/privacy-policy' className="underline">Privacy Policy</Link> of Zaur Tango.
            </p>
            <div className="w-full md:w-1/2 flex justify-end">
              <Button
                type="submit"
                variant="bordered"
                radius="none"
                className="w-full md:w-[200px] text-gray-500"
              >
                {sendingForm ? <><Spinner size="sm" color="default" /> <p>Sending...</p></> : 'Submit'}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
