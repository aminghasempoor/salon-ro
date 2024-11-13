"use client"
import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"

export function ModeToggle() {
    const {setTheme, theme} = useTheme()

    return (
        <>
            {theme === "light"
                ? (
                    <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
                        <Moon className={"text-blue-950"}/>
                    </Button>
                )
                : (
                    <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
                        <Sun className={"text-amber-400"}/>
                    </Button>
                )
            }
        </>
    )
}
