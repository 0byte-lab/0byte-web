"use client";

import React from "react";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandX, IconLink } from "@tabler/icons-react";
import { Star } from "lucide-react";
import Link from "next/link";
import Tag from "@/components/Tag";
import Image from "next/image";
import flowchart from '../../../public/assets/flowchart.png';

const AboutClient = () => {
    const copyUrl = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => alert("Copied to clipboard"))
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <div className="min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10">
            <div className="my-20">
                <div className='w-fit mx-auto'>
                    <Tag text={"About"} className={"text-muted-foreground hover:text-muted-foreground"} />
                </div>
                <Title text={"Built for Trust. Designed for Proof."} className={"my-8 max-w-3xl mx-auto"} />
                <Subtitle text={"0byte is the SSL for AI content — an invisible, cryptographic infrastructure layer that makes AI media verifiable by default."} className={"my-8 max-w-2xl px-4 text-center mx-auto text-muted-foreground"} />
                <section className="max-w-3xl text-left mx-auto py-10 px-4 space-y-4">
                    <p className="text-muted-foreground">
                        In an era where AI-generated content blurs the line between real and synthetic, trust is at risk. At 0byte, we’re building a cryptographic trust layer to ensure authenticity from the moment content is created. Powered by zero-knowledge proofs (ZK proofs) and anchored to the Solana blockchain, we’re redefining trust in digital media.
                    </p>
                    <h2 className='text-xl font-semibold'>The Problem</h2>
                    <p className="text-muted-foreground mt-4">
                        AI advancements have unleashed a wave of synthetic media like deepfakes, images, and audio.That’s nearly indistinguishable from reality. This creates a crisis of authenticity: misinformation spreads unchecked, and trust in digital content erodes. Traditional verification methods are too slow, reacting only after damage is done.
                    </p>
                    <h2 className='text-xl font-semibold'>Our Solution</h2>
                    <p className="text-muted-foreground mt-4">
                        0byte is a cryptographic infrastructure layer that integrates trust into the AI creation process. <br></br> We:
                    </p>
                    <ul className='list-disc list-inside text-muted-foreground ml-4'>
                        <li><span className='font-semibold'>Embed proof of authenticity</span> at the moment media is generated.</li>
                        <li><span className='font-semibold'>Anchor it on-chain</span> using Solana for tamper-resistant verification.</li>
                        <li><span className='font-semibold'>Enable universal verification</span> , even if content is reposted, compressed, or screenshotted.</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                        Think of us as the SSL for AI media—invisible, verifiable, and built for trust. Unlike reactive solutions, we sign and embed authenticity at the point of creation, stopping manipulation before it starts.
                    </p>
                    <h2 className='text-xl font-semibold'>How It Works</h2>
                    <ol className='list-decimal list-inside flex flex-col gap-1 text-muted-foreground ml-4'>
                        <li><span className='font-semibold'>Prompting:</span> The user prompts an AI model (e.g., “a futuristic city”) — this could be Stability AI or any custom model.</li>
                        <li><span className='font-semibold'>Proof Generation:</span> 0byte SDK captures the generation metadata (prompt hash, model ID, timestamp, etc.) and creates a zero-knowledge proof.</li>
                        <li><span className='font-semibold'>Proof Embedding:</span> This proof is invisibly embedded into the generated media at the pixel/frame level — no visible watermark or metadata required.</li>
                        <li><span className='font-semibold'>On-Chain Anchoring:</span> A hash of the proof is anchored to Solana, ensuring public auditability and tamper evidence.</li>
                        <li><span className='font-semibold'>Public Verification:</span> Anyone can verify the file via a public API or CLI tool — without needing the original model or exposing the prompt.</li>
                    </ol>
                    <h3 className='font-semibold'>Visual Flow:</h3>
                    <p className='text-muted-foreground mt-4 w-full'>
                        <Image src={flowchart} className="w-auto h-auto" alt="Flowchart" />
                    </p>
                    <h2 className='text-xl font-semibold'>Why It Matters</h2>
                    <ul className='list-disc list-inside text-muted-foreground ml-4'>
                        <li><span className='font-semibold'>Proactive Trust:</span> Stop fakes before they spread.</li>
                        <li><span className='font-semibold'>Scalable:</span> Built for the volume of modern media on Solana.</li>
                        <li><span className='font-semibold'>Private:</span> ZK proofs protect creation details.</li>
                        <li><span className='font-semibold'>Universal:</span> Verifiable anywhere, in any format.</li>
                    </ul>
                    <h2 className='text-xl font-semibold'>Our Vision</h2>
                    <p className="text-muted-foreground mt-4">
                        Trust is the backbone of the digital world. Just as SSL secured the internet, 0byte aims to secure AI-generated content—making authenticity a given, not a guess.
                    </p>
                    <p className="text-muted-foreground mt-4">
                        At 0byte, we’re not chasing problems. We’re solving them at the source.
                    </p>
                    <hr />
                </section>

                <div className="mx-auto flex flex-wrap items-center gap-4 max-w-3xl pb-32">
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="lg"
                        onClick={copyUrl}
                    >
                        <IconLink />
                        Copy Link
                    </Button>
                    <Link href="https://x.com/0byteHQ" passHref>
                        <Button className="cursor-pointer" variant="outline" size="lg">
                            Follow us on <IconBrandX />
                        </Button>
                    </Link>
                    <Link href="https://github.com/0byte-lab" passHref>
                        <Button className="cursor-pointer" variant="outline" size="lg">
                            <Star />
                            Star on GitHub
                            <IconBrandGithub />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutClient;