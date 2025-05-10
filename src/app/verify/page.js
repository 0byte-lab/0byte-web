import VerifyClient from "./VerifyClient";

export const metadata = {
    title: "Check AI Content Authenticity - 0byte",
    description: "Upload AI-generated content to instantly verify its authenticity. 0byte checks embedded zero-knowledge proofs to confirm the origin, model, and timestamp — without exposing private data.",
};
export default function VerifyPage() {
    return <VerifyClient />
}