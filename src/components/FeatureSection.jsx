import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { BentoCard, BentoGrid } from './magicui/bento-grid'
import { features } from '@/app/data/features'

const FeatureSection = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"Feature"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div className='flex flex-col'>
                <Title text={"Trusted by Design. Verified by Default."} className={"my-8 max-w-4xl mx-auto"} />
                <div className='z-0 my-8'>
                    <BentoGrid className={"lg:grid-rows-3"}>
                        {
                            features.map((feature, id) => (
                                <BentoCard key={id} {...feature} />
                            ))
                        }
                    </BentoGrid>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection