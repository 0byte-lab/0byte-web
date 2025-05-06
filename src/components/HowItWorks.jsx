import React from 'react'
import Tag from './Tag'
import Title from './Title'
import Subtitle from './Subtitle'

const HowItWorks = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"How it works"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div>
                <Title text={"Generate. Embed. Verify."} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"A seamless flow from AI content creation to cryptographic proof verification — all in a few steps."} className={"mb-4 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} />
            </div>
        </div>
    )
}

export default HowItWorks