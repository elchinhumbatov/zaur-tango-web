import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated August 21, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          We collect the following information during registration: Full name,
          email address, and phone number (MSISDN). We do not store your payment
          card details. Payment processing is handled by Stripe, subject to
          their Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>Create and manage your account</li>
          <li>Provide access to subscription-based courses</li>
          <li>
            Communicate with you about account, subscription, or service updates
          </li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>
          We do not sell or share personal data with third parties. Data may be
          shared with service providers (e.g., Stripe) only as necessary to
          provide Services. We may disclose information if required by law or to
          enforce these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your information. However, no system is 100% secure. By using
          the Services, you acknowledge this risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h2>
        <p>
          Currently, ZaurTango does not use analytics, cookies, or third-party
          trackers. If this changes, this Policy will be updated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Children’s Privacy</h2>
        <p>
          Our Services are not directed to children under 18. We do not
          knowingly collect information from minors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or
          delete your personal data; request restriction of processing or
          portability of your data; and withdraw consent where applicable. To
          exercise these rights, contact us at{" "}
          <a
            href="mailto:support@zaurtango.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            support@zaurtango.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Dispute Resolution</h2>
        <p>
          You agree to contact ZaurTango first to resolve any privacy concerns.
          Any disputes will be resolved through binding arbitration under
          generally accepted arbitration rules.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          effective upon posting. Continued use of Services constitutes
          acceptance of updated Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
        <p>
          For privacy-related questions, contact us at:{" "}
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

export default PrivacyPolicy;
