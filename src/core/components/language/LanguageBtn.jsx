import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";

const LanguageBtn = ({ className }) => {
    // Amin
    const t = useTranslations();
    const router = useRouter(); // to redirect
    const { locale } = useParams(); // get current locale
    const pathName = usePathname(); // get current pathname
    const onLanguageToggle = () => {
        if (locale === "fa") {
            // if current locale is "fa"
            router.push("/en" + pathName); //redirect to "en" with current pathname
        } else {
            // if current locale is "en"
            router.push("/fa" + pathName); //redirect to "fa" with current pathname
        }
    };

    return (
        <Button
            variant="ghost"
            className={twMerge(
                " h-12  w-12 text-Light-TextColor dark:text-Dark-TextColor text-[1rem] text-center font-semibold ",
                className
            )}
            onClick={onLanguageToggle}
        >
            {t("Global.language")}
        </Button>
    );
};

export default LanguageBtn;
