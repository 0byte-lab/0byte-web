import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { IconBrandDiscord } from '@tabler/icons-react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <Title text={"Integrate into your AI Pipeline"} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"Bring trust to your content at the moment it’s created. 0byte’s SDK makes it seamless to embed cryptographic proof into AI-generated media."} className={"my-8 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} />
                <section className='max-w-3xl text-left mx-auto py-10 px-4 space-y-6'>
                    <h1 className='text-xl font-semibold'>Overview</h1>
                    <p className='text-muted-foreground'>0byte is the <span className='font-semibold'>cryptographic trust layer</span> for AI-generated media.</p>
                    <p className='text-muted-foreground mt-4'>With a single integration, our SDK empowers AI platforms to embed zero-knowledge proofs into content at the point of generation — ensuring that every output carries its own fingerprint of authenticity. These proofs are invisible, tamper-evident, and anchored to the Solana blockchain for public verification. Whether you’re building a GenAI app, API, or creative platform, 0byte gives you the infrastructure to make every image, audio, or video verifiable by default — without compromising on privacy or speed.</p>
                    <h2 className='font-semibold'>What the SDK Does</h2>
                    <p className='text-muted-foreground'>
                        0byte’s SDK enables AI tools and platforms to generate zero-knowledge proofs at content generation time. These proofs are embedded into the media file and anchored to Solana for public, verifiable authenticity.
                    </p>
                    <ul className='list-disc list-inside text-muted-foreground ml-4'>
                        <li>Embed proof without exposing the prompt or model</li>
                        <li>Protect IP and privacy with zero-knowledge circuits</li>
                        <li>Keep your content verifiable across platforms</li>
                        <li>No blockchain knowledge required</li>
                    </ul>
                    <h1 className='text-xl font-semibold'>Install & Setup</h1>
                    <h2 className='font-semibold'>Quick Install</h2>
                    <CodeBlock
                        language={"bash"}
                        code={`npm install 0byte-sdk`}
                        className={"w-fit"}
                        filename={"install.sh"}
                    />
                    <h2 className='font-semibold'>Basic Usage</h2>
                    <CodeBlock
                        code={`import { createZeroByte } from '0byte-sdk';

const zeroByte = createZeroByte({
    network: 'mainnet',
});
                        
const proof = await zeroByte.generateProof({
    promptHash: hash('a fox in space'),
    modelId: 'stable-diffusion-xl',
    timestamp: Date.now()
});
                        
await zeroByte.embedProofIntoImage('output.png', proof);`}
                        language={"javascript"}
                        className={"w-fit"}
                        filename={"example.js"}
                    />
                    <h1 className='text-xl font-semibold'>What You Get</h1>
                    <ul className='list-disc list-inside text-muted-foreground ml-4'>
                        <li>Easy-to-integrate SDK for any GenAI platform</li>
                        <li>Zero-knowledge proof engine (privacy-preserving)</li>
                        <li>Embedded media proof structure</li>
                        <li>On-chain anchoring to Solana</li>
                        <li>Verifier API + Open-source components</li>
                    </ul>
                    <h1 className='text-xl font-semibold'>Verifier Integration</h1>
                    <p className='text-muted-foreground'>
                        Let your users or platforms verify content instantly:
                    </p>
                    <CodeBlock
                        code={`const result = await zeroByte.verifyFile('output.png');

if (result.verified) {
    console.log("Proof valid:", result);
} else {
    console.warn("Tampered or unverified media.");
}`}
                        language={"javascript"}
                        className={"w-fit"}
                        filename={"example.js"}
                    />
                    <h1 className='text-xl font-semibold'>Docs + API</h1>
                    <p className='text-muted-foreground'>
                        Want to go deeper? View the full SDK <a href='' className='hover:underline hover:text-accent-foreground'>documentation</a>  and API reference.
                    </p>
                    <hr />
                    <Link href={"/"}>
                        <Button className={"cursor-pointer"} variant={"outline"}>Join Discord <IconBrandDiscord /></Button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default page