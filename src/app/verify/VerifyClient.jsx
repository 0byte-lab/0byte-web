import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import FileUpload from '@/components/comp-544'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logos/logo-dark.png'
import { Button } from '@/components/ui/button'

const VerifyClient = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <Title text={"Verify AI Content. Know Its Source."} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"Drop AI content from platforms like Midjourney or OpenAI — 0byte will verify when, how, and by whom it was created."} className={"mb-4 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} />
                <div className='max-w-xl my-10 mx-auto'>
                    <FileUpload />
                    <Button className={"w-full my-6 cursor-pointer"}>Verify This Media</Button>
                </div>
            </div>
            <div className='relative h-[30vh] mt-30 xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto overflow-hidden rounded-2xl backdrop-blur-lg flex items-center justify-center'>

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

export default VerifyClient