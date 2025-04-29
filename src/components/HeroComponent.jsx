import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import code from '../../public/assets/code.png'
import tree from '../../public/assets/tree.png'
import logo from '../../public/logos/logo-dark.png'
import media from '../../public/assets/media.png'

const HeroComponent = () => {
    return (
        <div className="relative mx-auto mt-10 mb-40 flex flex-col items-center group  [perspective:2500px] -space-y-50 transition-all ease-in">

            {/* Layer 4 */}
            <div className="w-[250px] transition-all duration-500 group-hover:-mb-20 ease-in-out  rotate-x-60 rotate-y-0 -rotate-z-50 shadow-2xl border border-white/10 bg-black rounded-2xl backdrop-blur-md z-40">
                <Image src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>

            {/* Layer 3 */}
            <div className="w-[400px] transition-all duration-500 ease-in-out group-hover:-mb-20  rotate-x-60 rotate-y-0 -rotate-z-50 shadow-xl border border-white/10 bg-black rounded-2xl overflow-hidden z-30">
                <div className="py-16 px-10 text-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Solana Anchoring
                    </h1>
                </div>
            </div>

            {/* Layer 2 */}
            <div className="w-[400px] transition-all duration-500 ease-in-out group-hover:-mb-20 rotate-x-60 rotate-y-0 -rotate-z-50 shadow-lg border border-white/10 bg-black rounded-2xl z-20">
                <div className="py-16 px-10 text-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Temporal Proof Embedding
                    </h1>
                </div>
            </div>

            {/* Layer 1 */}
            <div className="w-[400px] transition-all duration-500 ease-in-out group-hover:-mb-20 rotate-x-60 rotate-y-0 -rotate-z-50 shadow-md border border-white/10 bg-black rounded-2xl z-10">
                <div className="py-16 px-10 text-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        ZK Proof <br /> Layer
                    </h1>
                </div>
            </div>

            {/* Layer 0 */}
            <div className="w-[400px] transition-all duration-500 ease-in-out group-hover:-mb-20 rotate-x-60 rotate-y-0 -rotate-z-50 shadow-md border border-white/10 bg-black rounded-2xl overflow-hidden">
                <div className="py-16 px-10 text-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Images, Text, Videos etc.
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default HeroComponent