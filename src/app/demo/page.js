import DemoClient from "./DemoClient"

export const metadata = {
    title: 'Try demo | 0byte',
    description: '0byte is the cryptographic infrastructure layer for AI-generated content. It embeds zero-knowledge proofs into media at creation, making content verifiable, tamper-evident, and anchored on-chain for public auditability.',
}

const page = () => {
    return (
       <DemoClient />
    )
}

export default page