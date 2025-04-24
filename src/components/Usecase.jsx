import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useCases } from '@/app/data/useCases'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Usecase = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"Use Cases"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div>
                <Title text={"Trusted by Design. Used Across Domains."} className={"my-8 max-w-4xl mx-auto"} />
                <div className='grid lg:grid-cols-3 gap-4 py-8'>
                    {useCases.map((item, id) => (
                        <Card key={id} className={"h-[300px]"}>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Endless Possibilities</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between gap-4 h-full">
                            <p className="text-muted-foreground">
                                From agent memory to verifiable memes — if it's AI-generated, we can prove it.
                            </p>
                            <div className="mt-auto">
                                <Button className="cursor-pointer w-fit">Explore Use Cases <ArrowRight /></Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Usecase