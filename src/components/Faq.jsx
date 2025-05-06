import React from 'react'
import Tag from './Tag'
import Title from './Title'
import FaqAccordion from './FaqAccordion'

const Faq = () => {
    return (
        <div id='faq' className='h-auto xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"FAQs"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div className=''>
                <Title text={"Securing AI content with invisible, verifiable trust."} className={"my-8 max-w-4xl mx-auto"} />
                <FaqAccordion />
            </div>
        </div>
    )
}

export default Faq