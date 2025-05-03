import SdkClient from "./SdkClient";

export const metadata = {
    title: "SDK | 0byte",
    description:
        "0byte is the cryptographic infrastructure layer for AI-generated content. It embeds zero-knowledge proofs into media at creation, making content verifiable, tamper-evident, and anchored on-chain for public auditability.",
};

export default function SDKPage() {
    return (
        <SdkClient />
    );
}