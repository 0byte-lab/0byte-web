import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useCases } from '@/app/data/useCases'
import { UseCaseCard } from './ui/use-case-card'
import Image from 'next/image'
import Subtitle from './Subtitle'

const Usecase = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"Use Cases"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div className=''>
                <Title text={"Trusted by Design. Used Across Domains."} className={"my-8 max-w-4xl mx-auto"} />
                <Subtitle text={"From content to compliance — real-world applications of cryptographic provenance."} className={"mb-4 max-w-3xl mx-auto px-4 text-center text-muted-foreground"} />
                <div className='grid lg:grid-cols-3 gap-4 py-8'>
                    {useCases.map((item, id) => (
                        <Card key={id} className="lg:h-[500px] p-4 flex flex-col justify-between overflow-hidden">
                            <CardContent className="relative w-full h-full min-h-[300px] p-0 overflow-hidden opacity-30 hover:opacity-60 transition-all ease-in">
                                {item.background && (
                                    <div className="absolute inset-0">
                                        {item.background}
                                    </div>
                                )}
                            </CardContent>

                            <CardHeader className="z-10 bg-background bg-opacity-90 backdrop-blur-sm p-4 mt-auto">
                                <CardTitle className="text-xl font-semibold mb-1">
                                    {item.title}
                                </CardTitle>
                                <p className="text-muted-foreground leading-snug">
                                    {item.description}
                                </p>
                            </CardHeader>
                        </Card>
                    ))}
                    {/* <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Endless Possibilities</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 w-fit h-full overflow-hidden">
                            <p className="text-muted-foreground">
                                From agent memory to verifiable memes — if it's AI-generated, we can prove it.
                            </p>
                            <div className="mt-auto w-full">
                                <Button className="cursor-pointer w-full" size={"lg"}>Explore Now</Button>
                            </div>
                        </CardContent>
                    </Card> */}
                    {/* <UseCaseCard /> */}
                </div>
            </div>
        </div>
    )
}

export default Usecase