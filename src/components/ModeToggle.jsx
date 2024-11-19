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
                <Button className="bg-Light-BackBtnColor" variant="ghost" size="icon" onClick={() => setTheme("dark")}>
                    <Moon className={"text-Light-TextColor "} />
                </Button>
            ) : (
                <Button className="bg-Dark-BackBtnColor" variant="ghost" size="icon" onClick={() => setTheme("light")}>
                    <Sun className={"text-Dark-TextColor "} />
                </Button>
            )}
        </>
    );
}
