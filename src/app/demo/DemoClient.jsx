"use client"
import React, { useState } from 'react'
import Keywords from '@/components/Keywords'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import logo from '../../../public/logos/logo-dark.png'
import { Skeleton } from '@/components/ui/skeleton'

const DemoClient = () => {
    const [image, setImage] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const generateImage = async (prompt) => {
        setLoading(true);
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        console.log(response, data);
        if (data.image) {
            console.log(data.image);
            setImage(data.image);
            setLoading(false);
        } else {
            console.error('Error generating image:', data.error);
        }
    }
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <Title text={"Generate with Proof. In Seconds."} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"Generate AI content and see how 0byte embeds invisible, verifiable proof at the moment of creation — without compromising privacy or performance."} className={"my-8 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} />
                <div className='my-20 w-full flex flex-col items-center'>
                    {loading && <Skeleton className="h-96 w-96 rounded-2xl" />}

                    {!loading && image && (
                        <img src={image} alt="Generated Image" className="h-96 w-96 rounded-2xl mx-auto" />
                    )}

                    {!loading && !image && (
                        <div className='relative max-w-4xl mx-auto w-full'>
                            <Input
                                placeholder={"Create a tree image..."}
                                className={"w-full py-6 px-6 pr-32 rounded-4xl"}
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            <Button
                                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full px-6"
                                size="icon"
                                onClick={() => generateImage(prompt)}
                            >
                                <ArrowRight />
                            </Button>
                        </div>
                    )}

                    {!image && !loading && <Keywords onSelect={(text) => setPrompt(text)} />}
                </div>
            </div>
            <div className='relative h-[30vh] mt-56 xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto overflow-hidden rounded-2xl backdrop-blur-lg flex items-center justify-center'>

                {/* Flickering Grid Background */}
                <FlickeringGrid
                    className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                    squareSize={4}
                    gridGap={6}
                    color='white'
                    maxOpacity={0.5}
                    flickerChance={0.1}
                />

                {/* Content Layer */}
                <div className='relative z-10 flex flex-col items-center justify-center text-center px-4'>
                    <Image src={logo} alt="0byte" className="h-60 w-60 opacity-80" />
                </div>

            </div>
        </div>
    )
}

export default DemoClient