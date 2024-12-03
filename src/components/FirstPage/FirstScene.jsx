import React from "react";

import { QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
const FirstScene = () => {
    const t = useTranslations();

    return (
        <div className="flex flex-col w-full lg:h-[calc(100svh-72px)] h-svh justify-center items-center text-Light-TextColor dark:text-Dark-TextColor font-Vazirmatn ">
            <h1 className="font-bold text-[2rem] text-center">راه آراستگی بهت نزدیکتر شده. نوبتت رو بگیر.</h1>
            <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
                <div className="w-full h-[280px] mt-6 p-6 rounded-lg shadow-[inset_0px_0px_0px_6px_rgba(246,_246,_246,_1)]  ">
                    form
                </div>
                <div className="text-[1.5rem] font-extrabold">وقتت مهم ترین داراییه!</div>
            </div>
            <Button
                variant="outline"
                size="app"
                className="flex items-center justify-center mt-10 gap-2 font-semibold text-[1rem]"
            >
                <QrCode size={"24"} /> {"Get The App"}
            </Button>
        </div>
    );
};

export default FirstScene;
