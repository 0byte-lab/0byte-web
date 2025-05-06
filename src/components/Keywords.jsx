"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useIsMobile } from './hooks/use-mobile';

const Keywords = () => {
    const keywords = [
        "A futuristic cityscape at sunset",
        "A robot painting a human portrait",
        "Cyberpunk street with neon lights",
        // "A surreal floating island in the sky",
        // "An ancient temple inside a forest",
        // "AI-generated human face, hyperrealistic",
        // "A dreamlike underwater kingdom",
        // "A medieval castle on Mars",
        // "A drone's eye view of Earth",
        // "A cat piloting a spaceship"
    ];
    const isMobile = useIsMobile();
    return (
        <div className='flex flex-wrap my-6 gap-3 max-w-4xl mx-auto sm:justify-center'>
            {keywords.map((item, index) => (
                <Button size={isMobile ? "sm" : ""} className={"cursor-pointer rounded-4xl text-muted-foreground"} variant={"outline"} key={index}><Plus />{item}</Button>
            ))}
        </div>
    )
}

export default Keywords