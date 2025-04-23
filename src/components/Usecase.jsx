import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useCases } from '@/app/data/useCases'
import { Button } from './ui/button'

const Usecase = () => {
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"Use Cases"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div>
                <Title text={"Where 0byte Makes a Difference"} className={"my-8 max-w-4xl mx-auto"} />
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
                    <Card>
                        <CardHeader>
                            <CardTitle>And Many More</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button className={"cursor-pointer"}>Try Now</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Usecase