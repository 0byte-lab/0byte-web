import Subtitle from '@/components/Subtitle'
import Tag from '@/components/Tag'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { IconBrandDiscord } from '@tabler/icons-react'
import Link from 'next/link'

const SdkClient = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <div className='w-fit mx-auto'>
                    <Tag text={"SDK"} className={"text-muted-foreground hover:text-muted-foreground"} />
                </div>
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
                    <h2 className='font-semibold'>Installation</h2>
                    <CodeBlock
                        language={"bash"}
                        code={`pip install zbyte`}
                        className={"w-fit"}
                        filename={"install.sh"}
                    />
                    <h2 className='font-semibold'>Quickstart</h2>
                    <CodeBlock
                        code={`from zbyte import Client, Config

config = Config(
    provider="stability",
    model="stable-diffusion-xl-base-1.0",
    api_key="your_huggingface_token",
    platform="0byte",
)
                        
client = Client(config)
                        
result = client.generate_image("A futuristic city at sunset")
with open("output.jpg", "wb") as f:
f.write(result.image_bytes)
                        
print("✅ Image verified at:", result.transaction_id)`}
                        language={"python"}
                        className={"w-fit"}
                        filename={"generate_image.py"}
                    />
                    <h1 className='text-xl font-semibold'>What You Get</h1>
                    <ul className='flex flex-col gap-1 list-disc list-inside text-muted-foreground'>
                        <li><span className='font-semibold'>Built-in AI Image Generation</span> — Generate images via Stability AI (default) or plug in your own model</li>
                        <li><span className='font-semibold'>Zero-Knowledge Proof Engine</span> — Privacy-preserving proofs for prompt, model, and timestamp</li>
                        <li><span className='font-semibold'>Embedded Media Proof Structure</span> — Steganographically injects verifiable data into media</li>
                        <li><span className='font-semibold'>On-Chain Anchoring</span> — Anchors proof hashes to Solana for immutable auditability</li>
                        <li><span className='font-semibold'>Verifier API + Open-Source Components</span> — Anyone can verify media without a wallet or watermark</li>
                    </ul>
                    {/* <h1 className='text-xl font-semibold'>Verifier Integration</h1>
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
                    /> */}
                    <h1 className='text-xl font-semibold'>Docs + API</h1>
                    <p className='text-muted-foreground'>
                        Want to go deeper? View the full SDK <a href='https://github.com/0byte-lab/python-sdk/blob/main/README.md' className='hover:underline hover:text-accent-foreground'>documentation</a>  and API reference.
                    </p>
                    <hr />
                    <Link href={"/https://discord.gg/GkAn9cBEfR"}>
                        <Button className={"cursor-pointer"} variant={"outline"}>Join Discord <IconBrandDiscord /></Button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default SdkClient