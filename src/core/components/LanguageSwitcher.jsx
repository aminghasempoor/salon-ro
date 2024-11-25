"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation";
import { Earth } from "lucide-react";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locales = ['en', 'fa'];

    const changeLanguage = (locale) => {
        // Remove the current locale prefix from the path
        const segments = pathname.split('/').filter(Boolean); // Remove empty segments
        if (locales.includes(segments[0])) {
            segments.shift(); // Remove the current locale
        }
        // Construct new path with the selected locale
        const newPath = `/${locale}/${segments.join('/')}`;
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-URLColor w-fit p-2 mt-4">
                    <Earth size={"20px"} className="-translate-y-0.5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
                {locales.map((locale) => (
                    <DropdownMenuItem key={locale} onClick={() => changeLanguage(locale)}>
                        {locale === "en" ? "English" : "فارسی"}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
