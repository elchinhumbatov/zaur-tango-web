import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">Last Updated August 21, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Services</h2>
        <p>
          ZaurTango provides access to pre-recorded tango instructional video
          courses (Beginner, Intermediate, Advanced) through a monthly
          subscription. All content is available for streaming only and is not
          downloadable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Accounts & Registration</h2>
        <p>
          To access Services, you must create an account by providing your full
          name, email, and phone number (MSISDN). Authentication may be via
          email/password or Google login. You are responsible for maintaining
          the confidentiality of your account credentials and agree not to share
          your account with others.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Payments & Subscriptions</h2>
        <p>
          Subscription payments are processed securely through Stripe. ZaurTango
          does not store card details. Subscriptions renew automatically each
          month unless canceled. You may cancel your subscription at any time.
          Access to Services will continue until the end of your current billing
          cycle. Refunds are not provided except as required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
        <ul className="list-disc list-inside">
          <li>Downloading, copying, or redistributing content is prohibited.</li>
          <li>
            Services may not be used for commercial, teaching, or resale
            purposes.
          </li>
          <li>Accounts must not be shared with unauthorized persons.</li>
          <li>
            Attempts to hack, bypass payment systems, or disrupt Services are
            prohibited.
          </li>
          <li>
            Users may not engage in unlawful, abusive, or fraudulent activity.
          </li>
        </ul>
        <p className="mt-2">
          Violation of these rules may result in immediate account termination
          without refund.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All videos, text, images, branding, and materials on ZaurTango are the
          sole property of ZaurTango. Users are granted a personal, limited,
          non-transferable, non-commercial license to access content for private
          use only. Unauthorized use may result in legal action.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Future User Content</h2>
        <p>
          If in the future ZaurTango allows comments, reviews, or submissions,
          you grant ZaurTango a worldwide, royalty-free license to use, display,
          and distribute such content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>
          ZaurTango may suspend or terminate accounts for violations of these
          Terms or for non-payment. Termination for violation is immediate and
          without refund.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Disclaimers & Limitation of Liability
        </h2>
        <p>
          Dance instruction carries inherent physical risks. By using Services,
          you confirm you are in appropriate health and assume all
          responsibility. ZaurTango is not liable for injuries, damages, or
          losses resulting from participation. Services are provided “as is”
          without warranties of accuracy, completeness, or fitness for a
          particular purpose. To the maximum extent permitted by law,
          ZaurTango’s liability is limited to the amount you paid in the month
          preceding any claim.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Dispute Resolution</h2>
        <p>
          Before pursuing any formal dispute, you agree to first contact
          ZaurTango at{" "}
          <a
            href="mailto:support@zaurtango.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            support@zaurtango.com
          </a>{" "}
          to attempt resolution. Any disputes shall be resolved by binding
          arbitration, conducted under generally accepted arbitration rules.
          These Terms are governed generally under worldwide principles, without
          restriction to a single jurisdiction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
        <p>
          ZaurTango reserves the right to update these Terms at any time.
          Continued use of Services after changes constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
        <p>
          For questions or complaints, contact us at:{" "}
          <a
            href="mailto:support@zaurtango.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            support@zaurtango.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
