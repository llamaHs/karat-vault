import styles from "./Privacy.module.css";

const privacyData = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "Karat Vault values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and disclose information when you access or use our platform and services.",
      "By using Karat Vault, you acknowledge that your information will be handled in accordance with this Privacy Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      "We may collect personal information that you provide directly to us, including your name, email address, phone number, billing details, shipping information, and account credentials.",
      "We may also collect transaction-related information, such as bids, purchases, listings, payment records, and communication history with our support team.",
      "In addition, we may automatically collect certain technical information, including IP address, browser type, device information, and usage data relating to your interaction with the platform.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: [
      "We use your information to provide, operate, and improve the Karat Vault platform and related services.",
      "This includes processing transactions, verifying user activity, managing listings and auctions, providing customer support, communicating important updates, and maintaining platform security.",
      "We may also use certain information for internal analysis, fraud prevention, and compliance with legal obligations.",
    ],
  },
  {
    id: "account-and-profile-information",
    title: "Account and Profile Information",
    content: [
      "When you create an account, we collect the information necessary to identify you and manage your access to the platform.",
      "You are responsible for providing accurate and up-to-date account information. Karat Vault is not responsible for issues arising from inaccurate or incomplete account details.",
    ],
  },
  {
    id: "payment-information",
    title: "Payment Information",
    content: [
      "Payments on Karat Vault are processed through approved third-party payment providers. We do not share buyers’ payment details with sellers.",
      "We may retain limited payment-related information necessary for transaction records, billing support, fraud prevention, and legal compliance.",
    ],
  },
  {
    id: "listing-and-transaction-data",
    title: "Listing and Transaction Data",
    content: [
      "We collect and maintain information related to listings, bids, sales, authentication records, and delivery details in order to facilitate marketplace activity.",
      "This information may be used to manage transactions, resolve disputes, maintain accurate records, and support the integrity of the platform.",
    ],
  },
  {
    id: "authentication-and-verification",
    title: "Authentication and Verification",
    content: [
      "To support secure transactions, Karat Vault may collect information necessary to verify submitted items, account activity, and user identity where appropriate.",
      "Information gathered during authentication and verification processes may be retained for recordkeeping, fraud prevention, and dispute resolution purposes.",
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    content: [
      "Karat Vault may use cookies and similar technologies to improve website functionality, remember user preferences, analyze usage patterns, and support security measures.",
      "We may also use analytics tools to better understand how users interact with the platform and to improve performance and user experience.",
    ],
  },
  {
    id: "how-we-share-information",
    title: "How We Share Information",
    content: [
      "We may share information with service providers and business partners who assist with payment processing, authentication, shipping, storage, analytics, customer support, and platform operations.",
      "We may also disclose information when required by law, to respond to legal requests, to protect our rights, or to investigate suspected fraud or misuse of the platform.",
      "We do not sell personal information to third parties.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain personal information for as long as necessary to provide our services, maintain transaction records, comply with legal obligations, resolve disputes, and enforce our agreements.",
      "Retention periods may vary depending on the type of information and the purpose for which it was collected.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "Karat Vault uses reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.",
      "However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights-and-choices",
    title: "Your Rights and Choices",
    content: [
      "Depending on your location, you may have rights relating to your personal information, including the right to access, correct, update, or request deletion of certain data.",
      "You may also have the right to object to certain processing activities or request information about how your data is used.",
      "Requests may be subject to verification and applicable legal limitations.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: [
      "The Karat Vault platform may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those third parties.",
      "We encourage users to review the privacy policies of any external websites they visit.",
    ],
  },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
    content: [
      "Your information may be processed and stored in countries other than your own, depending on where our service providers and operational partners are located.",
      "By using the platform, you acknowledge that your information may be transferred to and processed in jurisdictions with different data protection laws.",
    ],
  },
  {
    id: "children-privacy",
    title: "Children’s Privacy",
    content: [
      "Karat Vault is not intended for individuals under the age of 18, and we do not knowingly collect personal information from children.",
      "If we become aware that information has been collected from a child without appropriate authorization, we will take reasonable steps to delete it.",
    ],
  },
  {
    id: "policy-updates",
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements.",
      "The updated version will be posted on this page with the effective date of the revision. Continued use of the platform after any update constitutes acknowledgment of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at support@karatvault.com.",
    ],
  },
];

function Privacy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Privacy Policy</h2>
      <div className={styles.line}></div>

      {privacyData.map((terms, i) => (
        <div className={styles.textContainer} key={terms.id}>
          <h3 className={styles.subHeading}>{`${i + 1}. ${terms.title}`}</h3>
          <div className={styles.contentContainer}>
            {terms.content.map((content, i) => (
              <p className={styles.content} key={i}>
                {content}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Privacy;
