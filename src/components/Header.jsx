import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
    const menus = [
        { name: "About", href: "/about" },
        { name: "SDK", href: "/sdk" },
        { name: "Docs", href: "/docs" },
        { name: "Verifier", href: "/verifier" },
    ]
    return (
        <div className='xl:max-w-6xl max-w-7xl mx-4 py-2 xl:mx-auto sticky top-0 z-30 backdrop-blur-lg'>
            <div className='flex items-center justify-between'>
                <Logo />
                <div className='sm:flex hidden gap-5'>
                    {
                        menus.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <Button size={""} variant={"ghost"} className={"cursor-pointer"}>{item.name}</Button>
                            </Link>
                        ))
                    }
                </div>
                <Button className={"cursor-pointer"} size={"lg"}>Get Started</Button>
            </div>
        </div>
    )
}

export default Header