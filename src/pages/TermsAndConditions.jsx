import styles from "./TermsAndConditions.module.css";

const termsData = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "Welcome to Karat Vault. These Terms and Conditions (“Terms”) govern your access to and use of the Karat Vault platform, including all services related to the buying and selling of gold jewelry through our marketplace.",
      "By accessing or using our platform, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.",
    ],
  },
  {
    id: "about",
    title: "About Karat Vault",
    content: [
      "Karat Vault is an online marketplace that facilitates the buying and selling of gold jewelry through a structured listing and bidding system.",
      "We provide verification, secure storage, and transaction support, but we do not manufacture or own the items listed by sellers unless explicitly stated.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      "To use Karat Vault, you must be at least 18 years old and provide accurate account information.",
      "You agree to comply with all applicable laws and regulations.",
      "We reserve the right to suspend or terminate accounts that violate these requirements.",
    ],
  },
  {
    id: "listings-pricing",
    title: "Listings and Pricing",
    content: [
      "Sellers may list items subject to verification and approval.",
      "The minimum starting price is determined based on the seller’s original purchase price and the gold market value at the time of listing.",
      "Buyers may place bids until the listing deadline.",
      "The highest valid bid at the end of the auction will be considered the final sale price.",
    ],
  },
  {
    id: "authentication",
    title: "Authentication and Storage",
    content: [
      "All items may undergo an authentication process conducted by Karat Vault or its partners.",
      "Verified items are securely stored until the transaction is completed.",
    ],
  },
  {
    id: "payments",
    title: "Transactions and Payments",
    content: [
      "Buyers agree to complete payment for winning bids.",
      "Payments are processed securely through approved payment methods.",
      "Sellers receive payment after successful transaction completion, minus applicable fees.",
      "Karat Vault does not share buyers’ payment details with sellers.",
    ],
  },
  {
    id: "fees",
    title: "Fees",
    content: [
      "Karat Vault charges a commission fee on completed transactions.",
      "The commission is set at a flat rate (e.g., 8%) of the final sale price.",
      "Additional charges such as processing fees, taxes, or duties may apply.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping and Delivery",
    content: [
      "Karat Vault manages shipment of verified items to buyers.",
      "Delivery times may vary depending on location and external factors.",
    ],
  },
  {
    id: "returns",
    title: "Returns and Cancellations",
    content: [
      "All sales are generally final due to the auction-based nature of transactions.",
      "Returns may only be accepted in cases of verified defects or misrepresentation.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Conduct",
    content: [
      "Users must not manipulate bidding activity or engage in fraudulent behavior.",
      "Providing false information or bypassing platform processes is prohibited.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      "All content on the platform is the property of Karat Vault and may not be used without permission.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "Karat Vault provides its services on an “as is” basis.",
      "We are not liable for indirect damages or losses caused by third-party services or market fluctuations.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: [
      "We may update these Terms from time to time.",
      "Continued use of the platform constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: ["For any questions, please contact support@karatvault.com."],
  },
];

function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Terms and Conditions</h2>
      <div className={styles.line}></div>

      {termsData.map((terms, i) => (
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

export default TermsAndConditions;
