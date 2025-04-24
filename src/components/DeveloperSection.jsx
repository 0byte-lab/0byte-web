import React from 'react'
import Tag from './Tag'
import Title from './Title'
import { CodeBlock } from './ui/code-block'
import { snippet } from '@/app/data/snippet'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const DeveloperSection = () => {
    const features = [
        {
            title: "Simple API",
            description: "Integrate 0byte in minutes with our simple API and SDK. No complex setup or configuration required.",
            icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
            color: "bg-green-500"
        },
        {
            title: "Fast and Reliable",
            description: "Our API is fast and reliable, ensuring that your application runs smoothly and efficiently.",
            icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
            color: "bg-blue-500"
        },
        {
            title: "Secure",
            description: "We take security seriously. Our API is built with security in mind, ensuring that your data is safe.",
            icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
            color: "bg-red-500"
        },
        // {
        //     title: "Scalable",
        //     description: "Our API is designed to scale with your application, ensuring that you can handle any amount of traffic.",
        //     icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
        //     color: "bg-yellow-500"
        // },
        // {
        //     title: "Documentation",
        //     description: "We provide comprehensive documentation to help you get started quickly and easily.",
        //     icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
        //     color: "bg-purple-500"
        // },
        // {
        //     title: "Support",
        //     description: "Our support team is here to help you with any questions or issues you may have.",
        //     icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
        //     color: "bg-pink-500"
        // }
    ]
    return (
        <div className='min-h-screen xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='w-fit mx-auto'>
                <Tag text={"For Developers"} className={"text-muted-foreground hover:text-muted-foreground"} />
            </div>
            <div className='w-full'>
                <Title text={"Add Verifiability to Your Stack"} className={"my-8 max-w-4xl mx-auto"} />
                <div className='flex flex-col lg:flex-row justify-between gap-6 py-8'>
                    {/* <div className='flex flex-col w-full justify-between'>
                        <>
                            {features.map((feature, id) => (
                                <Card className={"h-auto my-3"} key={id}>
                                    <CardHeader>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className='text-muted-foreground'>{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button>Read Docs</Button>
                        </>
                    </div> */}
                    {/* <div className='max-w-2xl mx-auto w-fit'>
                        <CodeBlock
                            language={"javascript"}
                            filename={"index.js"}
                            code={snippet}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DeveloperSection