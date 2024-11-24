"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <>
            {theme === "light" ? (
                <Button className="h-12  w-12" variant="ghost" size="icon" onClick={() => setTheme("dark")}>
                    <Moon className={"text-Light-TextColor w-fit h-fit "} />
                </Button>
            ) : (
                <Button className="h-12  w-12" variant="ghost" size="icon" onClick={() => setTheme("light")}>
                    <Sun className={"text-Dark-TextColor "} />
                </Button>
            )}
        </>
    );
}
