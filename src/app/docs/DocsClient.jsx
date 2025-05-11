import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import logo from '../../../public/logos/logo-dark.png'
import Image from 'next/image'
import Tag from '@/components/Tag'

const DocsClient = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                <div className='w-fit mx-auto'>
                    <Tag text={"Coming Soon"} className={"text-muted-foreground hover:text-muted-foreground"} />
                </div>
                <Title text={"Documentation Launching Shortly."} className="my-8 max-w-4xl mx-auto" />
                <Subtitle text={"We’re finalizing the docs to help you integrate zero-knowledge proof embedding into your AI workflows. Stay tuned — clarity is coming."} className="my-4 max-w-3xl mx-auto text-muted-foreground text-center" />
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
        </div>
    )
}

export default DocsClient