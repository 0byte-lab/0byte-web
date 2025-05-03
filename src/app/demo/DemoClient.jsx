import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const DemoClient = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                {/* <Title text={"Expereince 0byte. Trust Every Pixel."} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"Generate and verify AI media with embedded zero-knowledge proofs — no metadata, no compromise."} className={"my-8 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} /> */}
                <div className=''>
                    {/* <Textarea placeholder={"Create a tree image..."} className={"w-full max-w-3xl mx-auto"} /> */}
                    <Input placeholder={"Create a tree image..."} className={"w-full bg-red-400 max-w-3xl mx-auto"} />
                </div>
            </div>
        </div>
    )
}

export default DemoClient