"use client"
import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { FlickeringGrid } from './magicui/flickering-grid'
import { Button } from './ui/button'
import Link from 'next/link'

const Outro = () => {
    return (
        <div className='relative min-h-[40vh] xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto py-20 overflow-hidden rounded-2xl backdrop-blur-lg'>

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
            <div className='relative z-10 flex flex-col items-center justify-center text-center px-4 gap-6'>
                <Title text={"Built to Verify the Future"} className={"max-w-4xl mx-auto"} />
                <Subtitle
                    text={`0byte isn’t a watermark or a filter. It’s cryptographic infrastructure for AI media — embedding proof, integrity, and context into every asset. Trusted by builders. Verifiable by anyone.`}
                    className={"lg:max-w-2xl mx-auto text-muted-foreground"}
                />
                <Link href={"/sdk"}>
                    <Button className={"cursor-pointer"} size={"lg"}>Start Building </Button>
                </Link>
            </div>

        </div>
    )
}

export default Outro