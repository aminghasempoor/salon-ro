"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Earth } from "lucide-react";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locales = ["en", "fa"];

    const changeLanguage = (locale) => {
        // Remove the current locale prefix from the path
        const segments = pathname.split("/").filter(Boolean); // Remove empty segments
        if (locales.includes(segments[0])) {
            segments.shift(); // Remove the current locale
        }
        // Construct new path with the selected locale
        const newPath = `/${locale}/${segments.join("/")}`;
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className=" w-12 h-12 p-0 ">
                    <Earth size={"22px"} className="-translate-y-0.5 w-fit h-fit  " />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 min-w-[0px] ">
                {locales.map((locale) => (
                    <DropdownMenuItem className="" key={locale} onClick={() => changeLanguage(locale)}>
                        {locale === "en" ? "English" : "فارسی"}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
