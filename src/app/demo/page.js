import DemoClient from "./DemoClient"

export const metadata = {
    title: 'Generate AI Content with Embedded Proof - 0byte',
    description: '0byte is the cryptographic infrastructure layer for AI-generated content. Use the demo to generate media with embedded zero-knowledge proofs — making it verifiable, tamper-evident, and anchored on-chain for public auditability.',
}

const page = () => {
    return (
       <DemoClient />
    )
}

export default page