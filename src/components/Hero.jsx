"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import Title from './Title'
import Subtitle from './Subtitle'
import { Button } from './ui/button'
import { AnimatedGridPattern } from './magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import HeroComponent from './HeroComponent'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code, Copy } from 'lucide-react'
import Image from 'next/image'
import heroPlaceholder from '../../public/assets/hero-placeholder.png'
import ArchitectureGrid from './Architecture'


const SplineArchitecture = dynamic(() => import('./SplineArchitecture'), {
    ssr: false,
    loading: () => (
        <Image src={heroPlaceholder} alt="Loading..." className="h-[60vh] w-[430px] mb-12 py-12-96 my-10 rounded-2xl mx-auto" />
    ),
});
const Hero = () => {
    return (
        <div className='min-h-screen '>
            <div className='xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto flex flex-col items-center text-center mt-10'>
                <Title text={"Cryptographic Trust for AI Media"} className={"mt-20 max-w-4xl mx-auto"} />
                <Subtitle text={"Invisible, tamper-proof, and verifiable by anyone — 0byte brings cryptographic trust to AI-generated media, from the moment it’s created."} className={"my-8 lg:max-w-3xl text-xl font-semibold px-4 text-muted-foreground"} />
                <div className='flex gap-6 bg-background/40'>
                    {/* <Button className={"cursor-pointer"} size={"lg"} variant={"outline"}>Read Docs</Button> */}
                    <Link href={"/sdk"}>
                        <Button className={"cursor-pointer group transition-all ease-in"} size={"lg"}>Get Started </Button>
                    </Link>
                    <Link href={"https://www.loom.com/share/d6d7202935af42ee8fc1477ad233ee63?sid=a284aab4-e4f5-4a6e-abd1-0f596361bc9e"}>
                        <Button size={"lg"} variant={"link"} className={"cursor-pointer"}>Watch Pitch <ArrowUpRight /></Button>
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
            {/* <SplineArchitecture /> */}
            {/* <div className="relative min-h-screen overflow-hidden w-full select-none lg:-mt-2 -mt-12 -z-10 flex justify-center items-center">
                <div className="absolute -z-10 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-[80px] opacity-60" />
                <div
                    className="fade-edges transform-gpu transition-all duration-1000 ease-in-out w-full max-w-8xl"
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "20%",
                        height: "1400px",
                        width: "1200px",
                        transform: "rotateX(50deg) rotateY(20deg) rotateZ(328deg) scale(1.2)",
                        transformStyle: "preserve-3d",
                        height: "900px", // increased from 800px
                        background: "black",
                    }}
                >
                    <ArchitectureGrid />
                </div>
            </div> */}
            <div className='h-auto xl:max-w-6xl max-w-7xl mx-4 mb-20 xl:mx-auto'>
                <div className="relative max-w-6xl mx-auto aspect-video mt-15 rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.tella.tv/video/cmb5c0mh800060bl58v02a4hi/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
                        className="absolute top-0 left-0 w-full h-full border-0 bg-transparent"
                        allowtransparency="true"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hero