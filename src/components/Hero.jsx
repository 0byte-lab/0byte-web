import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { Button } from './ui/button'
import { AnimatedGridPattern } from './magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import HeroComponent from './HeroComponent'
import SplineArchitecture from './SplineArchitecture'

const Hero = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto'>
            <div className='flex flex-col items-center text-center mt-10'>
                <Title text={"The SSL for AI Generated Content."} className={"mt-20"} />
                <Subtitle text={"0byte embeds zero-knowledge cryptographic proof into AI-generated media — making it verifiable, tamper-resistant, and trusted by default."} className={"my-8 lg:max-w-2xl text-xl font-semibold px-4 text-muted-foreground"} />
                <div className='flex gap-6'>
                    {/* <Button className={"cursor-pointer"} size={"lg"} variant={"outline"}>Read Docs</Button> */}
                    <Button className={"cursor-pointer"} size={"lg"}>Start Building </Button>
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