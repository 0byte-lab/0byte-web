import React from 'react'
import Tag from './Tag'
import Title from './Title'

const HowItWorks = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"How it works"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div>
                <Title text={"From Creation to Verification"} className={"my-8 max-w-4xl mx-auto"} />
            </div>
        </div>
    )
}

export default HowItWorks