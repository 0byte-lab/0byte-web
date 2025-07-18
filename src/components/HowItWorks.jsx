import React from 'react'
import Tag from './Tag'
import Title from './Title'
import Subtitle from './Subtitle'

const HowItWorks = () => {
    return (
        <div className='lg:min-h-screen h-auto xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"How it works"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div>
                <Title text={"How 0byte Secures the AI Internet"} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"In just 2 minutes, see how 0byte embeds zero-knowledge proofs at the moment of generation — and makes any AI image verifiable in under 2 seconds."} className={"my-4 max-w-3xl mx-auto text-muted-foreground text-center"} />
            </div>
            {/* <iframe
                className="h-[60vh] w-full bg-accent mt-15 xl:max-w-4xl max-w-4xl mx-auto xl:mx-auto overflow-hidden rounded-2xl backdrop-blur-lg flex items-center justify-center"
                src="https://www.loom.com/embed/81996b69f2334e07a2af072ca5c5a3c6?sid=2faec645-50a5-49bb-8a53-ee320384d938"
                frameborder="5"
            /> */}
            <div className="relative aspect-video mt-10 mb-20 rounded-xl overflow-hidden">
                <iframe
                    src="https://www.tella.tv/video/cmb5c0mh800060bl58v02a4hi/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
                    className="absolute top-0 left-0 w-full h-full border-0 bg-transparent"
                    allowtransparency="true"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default HowItWorks