import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import Link from 'next/link'
import { menus } from '@/app/data/menus'

const Header = () => {
    return (
        <div className='xl:max-w-6xl max-w-7xl mx-4 py-2 xl:mx-auto sticky top-0 z-30 backdrop-blur-lg'>
            <div className='flex items-center justify-between'>
                <Logo isLink={true} />
                <div className='sm:flex items-center justify-center hidden gap-4'>
                    {
                        menus.header.map((item, index) => (
                            <Link key={index} href={item.disabled ? "#" : item.href}>
                                <Button
                                    disabled={item.disabled}
                                    size=""
                                    variant="ghost"
                                    className="cursor-pointer text-muted-foreground relative"
                                >
                                    {item.name}
                                    {item.disabled && (
                                        <span className="flex lg:flex-col flex-row text-[10px] text-muted-foreground opacity-60">
                                            (Coming Soon)
                                        </span>
                                    )}
                                </Button>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex'>
                    <Link href={"/demo"}>
                        <Button className={"cursor-pointer"} variant={""} size={"lg"}>Try Demo</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header