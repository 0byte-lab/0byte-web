import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { Button } from './ui/button'
import { AnimatedGridPattern } from './magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import HeroComponent from './HeroComponent'
import SplineArchitecture from './SplineArchitecture'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto'>
            <div className='flex flex-col items-center text-center mt-10'>
                <Title text={"The SSL of AI Content — Powered by Solana"} className={"mt-20 max-w-4xl mx-auto"} />
                <Subtitle text={"Invisible, tamper-proof, and verifiable by anyone — 0byte brings cryptographic trust to AI-generated media, from the moment it’s created."} className={"my-8 lg:max-w-3xl text-xl font-semibold px-4 text-muted-foreground"} />
                <div className='flex gap-6'>
                    {/* <Button className={"cursor-pointer"} size={"lg"} variant={"outline"}>Read Docs</Button> */}
                    <Link href={"/docs"}>
                        <Button className={"cursor-pointer group transition-all ease-in"} size={"lg"}>Start Building </Button>
                    </Link>
                </div>
            </div>
            {/* Grid pattern background */}
            <AnimatedGridPattern
                umSquares={30}
                maxOpacity={0.1}
                duration={3}
                x={20}
                repeatDelay={1}
                className={cn(
                    "absolute inset-0 -z-10",
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                    "h-full w-full",
                )}
            />
            {/* <HeroComponent className={""} /> */}
            <SplineArchitecture />
        </div>
    )
}

export default Hero