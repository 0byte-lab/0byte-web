import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { IconBrandDiscord } from '@tabler/icons-react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <Title text={"Verify"} className={"my-8 max-w-4xl mx-auto"} />
            </div>
        </div>
    )
}

export default page