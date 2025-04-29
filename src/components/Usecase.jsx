import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useCases } from '@/app/data/useCases'

const Usecase = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"Use Cases"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div className=''>
                <Title text={"Trusted by Design. Used Across Domains."} className={"my-8 max-w-4xl mx-auto"} />
                <div className='grid lg:grid-cols-3 gap-4 py-8'>
                    {useCases.map((item, id) => (
                        <Card key={id} className={"h-[400px]"}>
                            <CardContent className={"w-fit h-fit overflow-hidden"}>
                                <div className=' h-full'>
                                    {item.Icon && <item.Icon strokeWidth={0.08} className="w-[200px] h-[200px] text-muted-foreground" />}
                                </div>
                            </CardContent>
                            <CardHeader>
                                <CardTitle className={"text-xl font-semibold"}>{item.title}</CardTitle>
                                <p className='text-muted-foreground'>{item.description}</p>
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
                </div>
            </div>
        </div>
    )
}

export default Usecase