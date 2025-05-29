'use client'
import React from 'react';
import { Button, Form, Input, Textarea } from '@heroui/react';


export default function ContactPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);

    
    e.currentTarget.reset();
    // setErrors({});
    // const result = callServer(data);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">CONTACT US</h2>
      <div className="mb-8 flex gap-2 flex-col">
        <div>
          <p className="text-md">
            <b>Phone: </b>
            <a href='tel:1231231231' className="text-gray-700 underlined"> +1 (123) 456-7890</a>
          </p>
        </div>
        <div>
          <p className="text-md">
            <b>Mail: </b>
            <a href='mailto:test@tango.com' className="text-gray-700"> support@zaurtango.com</a>
          </p>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
        <Form
          className="w-full flex flex-col gap-3"
          onSubmit={onSubmit}
        >
          <Input
            isRequired
            errorMessage="Please enter your name"
            label="Name"
            name="name"
            variant='underlined'
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            name="email"
            type="email"
            variant='underlined'
          />
          <Textarea
            isRequired
            errorMessage="Please enter your message"
            label="Message"
            name='message'
            variant='underlined'
          />

          <div className='flex flex-col md:flex-row gap-4 my-8'>
            <p className='text-xs text-gray-500 w-full md:w-1/2'>
              By sending your message, you agree to accept the General Terms and Conditions of Use and that your data will be processed in compliance with the Privacy Policy of Zaur Tango.
            </p>
            <div className='w-full md:w-1/2 flex justify-end'>
              <Button type="submit" variant="bordered" radius='none' className="w-full md:w-[200px] text-gray-500">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
