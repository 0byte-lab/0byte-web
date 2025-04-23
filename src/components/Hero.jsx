import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { Button } from './ui/button'
import { AnimatedGridPattern } from './magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

const Hero = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto'>
                <div className='flex flex-col items-center text-center mt-10'>
                    <Title text={"Zero-Knowledge. Total Proof."} className={"mt-20"} />
                    <Subtitle text={"0byte embeds zero-knowledge cryptographic proofs into AI-generated content — making it verifiable, tamper-resistant, and future-proof."} className={"my-8 lg:max-w-2xl px-4 text-muted-foreground"} />
                    <div className='flex gap-6'>
                        {/* <Button className={"cursor-pointer"} size={"lg"} variant={"outline"}>Create a drop</Button> */}
                        <Button className={"cursor-pointer"} size={"lg"}>Try Now</Button>
                    </div>
                </div>
            <AnimatedGridPattern
                umSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            >
            </AnimatedGridPattern>
        </div>
    )
}

export default Hero