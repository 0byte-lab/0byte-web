'use client'

import React, { useState } from 'react'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import FileUpload from '@/components/comp-544'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import Image from 'next/image'
import logo from '../../../public/logos/logo-dark.png'
import { Button } from '@/components/ui/button'
import Tag from '@/components/Tag'
import { Skeleton } from '@/components/ui/skeleton'
import { SpinningText } from '@/components/magicui/spinning-text'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ReloadIcon } from '@radix-ui/react-icons'

const VerifyClient = () => {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState('')
    const [proofHash, setProofHash] = useState('')
    const [platform, setPlatform] = useState('')
    const [result, setResult] = useState('')
    const [isVerifying, setIsVerifying] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const handleReset = () => {
        setFile(null)
        setFileName('')
        setProofHash('')
        setPlatform('')
        setResult('')
        setIsVerifying(false)
        setShowResult(false)
    }
    const parseJpegCom = (u8) => {
        let offset = 2
        while (offset + 4 < u8.length) {
            if (u8[offset] === 0xff && u8[offset + 1] === 0xfe) {
                const length = (u8[offset + 2] << 8) | u8[offset + 3]
                const textBytes = u8.slice(offset + 4, offset + 2 + length)
                const text = new TextDecoder().decode(textBytes)
                const [_, value] = text.split('0byte_txn:')
                if (value) {
                    const [txn, platform] = value.split('|')
                    return { txn, platform }
                }
            }
            offset++
        }
        return null
    }

    const handleVerify = () => {
        if (!file) {
            alert('Please select an image first.')
            return
        }

        setIsVerifying(true)
        setShowResult(false)

        const reader = new FileReader()
        reader.onload = async () => {
            const arrayBuffer = reader.result
            const u8 = new Uint8Array(arrayBuffer)

            let proof = null
            if (u8[0] === 0xff && u8[1] === 0xd8) {
                proof = parseJpegCom(u8)
            }

            if (!proof) {
                setResult('❌ This content is not stamped by 0byte.')
                setIsVerifying(false)
                return
            }

            setProofHash(proof.txn)
            setPlatform(proof.platform)
            console.log('Proof hash', proof.txn);

            const { Connection, clusterApiUrl } = await import('@solana/web3.js')

            const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
            try {
                const tx = await connection.getTransaction(proof.txn)
                if (tx && tx.meta && tx.meta.err === null) {
                    setResult(`✅ Verified on Solana! Transaction: ${proof.txn}`)
                    setShowResult(true)
                } else {
                    setResult('❌ Proof not found on-chain.')
                }
            } catch (error) {
                setResult(`❌ RPC error: ${error.message}`)
            } finally {
                setIsVerifying(false)
            }
        }

        reader.readAsArrayBuffer(file)
    }

    return (
        <div className='min-h-screen xl:max-w-6xl rounded-2xl flex-col max-w-7xl mx-4 xl:mx-auto my-10'>
            <div className='mt-20'>
                {/* <div className='w-fit mx-auto'>
                    <Tag text={'Now Live'} className={'text-muted-foreground hover:text-muted-foreground'} />
                </div> */}
                <Title text={'Verify AI Content. Know Its Source.'} className={'my-8 max-w-4xl mx-auto'} />
                <Subtitle
                    text={'0byte lets you verify which platform created your AI content — only for media generated through our system.'}
                    className={'mb-4 max-w-3xl mx-auto px-4 text-center text-muted-foreground'}
                />

                {!isVerifying && !showResult && (
                    <div className='max-w-xl my-10 mx-auto'>
                        <FileUpload
                            onFileSelect={(selectedFile) => {
                                setFile(selectedFile)
                                setFileName(selectedFile.name)
                                setProofHash('')
                                setPlatform('')
                                setResult('')
                                setShowResult(false)
                            }}
                        />
                        {fileName && <p className='text-sm text-muted-foreground mt-2'>{fileName}</p>}

                        <Button className={'w-full my-6 cursor-pointer'} onClick={handleVerify}>
                            Verify this Media
                        </Button>
                    </div>
                )}

                {isVerifying && (
                    <div className='max-w-xl my-10 mx-auto'>
                        <Skeleton className='w-full h-[300px] rounded-xl mb-4' />
                        <Skeleton className='h-6 w-1/2 mx-auto mb-2' />
                        <Skeleton className='h-6 w-1/3 mx-auto' />
                    </div>
                )}

                {showResult && file && result.includes('✅') && (
                    <div className='relative flex max-w-lg mx-auto flex-col items-center my-10'>
                        <Image
                            src={URL.createObjectURL(file)}
                            alt='Uploaded'
                            width={400}
                            height={300}
                            className='rounded-xl mb-4 w-auto h-auto'
                        />
                        {/* <SpinningText className={"absolute right-20 top-4"}>The content is verified • by 0byte •</SpinningText> */}
                        <div className='absolute left-4 top-3 flex flex-row items-center backdrop-blur-lg rounded-lg'>
                            <Image src={logo} alt='0byte' className='h-10 w-10' />
                            {/* <p className='text-xs border-l pl-3'>This is verified by 0byte.</p> */}
                        </div>
                        <div className='absolute bottom-15 left-4 space-y-3 backdrop-blur-lg rounded-lg p-3'>
                            <p className='text-sm flex flex-col gap-1'>
                                <span className='text-muted-foreground'>Generated via:</span> <Link href={"https://0byte.tech/"}><span className='font-bold flex gap-1 items-center'>{platform} <ArrowUpRight size={18} /></span></Link>
                                <br />
                                <p className='text-xs text-muted-foreground'>Verified by 0byte</p>
                            </p>
                            {/* <p className='text-sm text-muted-foreground'> */}
                                {/* <strong>Transaction:</strong> */}
                            {/* </p> */}
                            <Link href={`https://solscan.io/tx/${proofHash}?cluster=devnet`} target="_blank" rel="noopener noreferrer">
                                <Button className={"cursor-pointer"}>
                                    View on Solscan <ArrowUpRight />
                                </Button>
                            </Link>
                            {/* <p className='text-center text-base font-medium mt-2'>{result}</p> */}
                        </div>
                        <Button variant={"outline"} className={"cursor-pointer"} onClick={handleReset}>Reset <ReloadIcon /></Button>
                    </div>
                )}

                {!isVerifying && !showResult && result && !result.includes('✅') && (
                    <div className=' w-fit mx-auto'>
                        <p className='text-center text-base font-medium text-red-500 my-6'>{result}</p>
                        <Link href={"#"}>
                            <Button variant={""} className={"cursor-pointer w-full"}>Generate here <ArrowUpRight /></Button>
                        </Link>
                    </div>
                )}
            </div>

            <div className='relative h-[30vh] mt-30 xl:max-w-6xl max-w-7xl mx-4 xl:mx-auto overflow-hidden rounded-2xl backdrop-blur-lg flex items-center justify-center'>
                <FlickeringGrid
                    className='absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]'
                    squareSize={4}
                    gridGap={6}
                    color='white'
                    maxOpacity={0.5}
                    flickerChance={0.1}
                />
                <div className='relative z-10 flex flex-col items-center justify-center text-center px-4'>
                    <Image src={logo} alt='0byte' className='h-60 w-60 opacity-80' />
                </div>
            </div>
        </div>
    )
}

export default VerifyClient