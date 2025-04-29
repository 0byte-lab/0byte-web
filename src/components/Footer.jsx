import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button';
import { SparklesCore } from './ui/sparkles';
import { menus } from '@/app/data/menus';

const Footer = () => {
    return (
        <footer className="relative xl:max-w-6xl max-w-7xl mx-4 mt-16 xl:mx-auto overflow-hidden">
            {/* Footer content */}
            <div className="relative z-10 py-8 mb-10 flex md:flex-row flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted/80 to-transparent pointer-events-none" />
                <div className="flex flex-col justify-between">
                    <div>
                        <Logo className="w-fit" />
                        <p className="text-muted-foreground px-4 py-2 max-w-xs text-sm">
                            0byte makes AI content verifiable and tamper-proof using zero-knowledge proofs.
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground px-4 hidden sm:block sm:py-0 py-3">
                        © Nolabs Tech 2025. All rights reserved.
                    </p>
                </div>

                <div className="px-4">
                    {/* <div className="flex items-end gap-3 w-full my-6 sm:my-4">
                        <div className="flex flex-col">
                            <Label className="text-sm text-muted-foreground mb-1" htmlFor="email">
                                Subscribe to our newsletter
                            </Label>
                            <Input className={"w-full"} id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <Button className="cursor-pointer">Subscribe</Button>
                    </div> */}
                    <div className="flex gap-12">
                        {menus.footer.map((menu, id) => (
                            <div key={id} className="flex flex-col gap-4 my-8">
                                <h3 className="text-sm font-semibold">{menu.title}</h3>
                                <div className="flex flex-col gap-4">
                                    {menu.items.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            className="text-sm text-muted-foreground hover:text-current transition-all ease-in"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center lg:justify-end justify-between gap-1">
                        <p className="text-sm text-muted-foreground sm:hidden block">
                            © Nolabs Tech 2025. All rights reserved.
                        </p>
                        <div className='flex gap-2'>
                            {menus.social.map((item, id) => (
                                <a href={item.link} key={id}>
                                    <Button variant="ghost" className="cursor-pointer hover:text-current" size="icon">
                                        <item.Icon className="h-5 w-5 text-muted-foreground transition-all ease-in" />
                                    </Button>
                                </a>
                            ))}
                            {/* <ModeToggle /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sparkles at bottom, rotated */}
            <div className="absolute bottom-0 left-0 w-full h-[120px] z-0 pointer-events-none">
                <div className="w-full h-full">
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1000}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(400px_150px_at_bottom,transparent_20%,white)]" />
                </div>
            </div>
        </footer>
    )
}

export default Footer