import GetInTouchForm from "./GetInTouchForm";


export const metadata = {
  title: "Contact Us | Zaur Tango",
  description: "Get in touch with Zaur Tango for inquiries, support, or feedback. We're here to help you with all your needs.",
};


export default function ContactPage() {
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
        <GetInTouchForm />
      </div>
    </div>
  );
}
