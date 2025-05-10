
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About - 0byte",
  description:
    "0byte is the cryptographic infrastructure layer for AI-generated content. It embeds zero-knowledge proofs into media at creation, making content verifiable, tamper-evident, and anchored on-chain for public auditability.",
openGraph: {
    
}
};

export default function AboutPage() {
  return <AboutClient />;
}