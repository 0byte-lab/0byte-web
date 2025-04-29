"use client"
import React from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <div>
            <Button
                variant={"ghost"}
                className={"cursor-pointer"}
                onClick={toggleTheme}
            >
                {
                    theme === "light" ? <Moon /> : <Sun />
                }
            </Button>
        </div>
    )
}

export default ModeToggle