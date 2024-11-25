import React from "react";

import { QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
const FirstScene = () => {
    const t = useTranslations();

    return (
        <div className="flex flex-col w-full h-[calc(100svh-72px)] justify-center items-center text-Light-TextColor dark:text-Dark-TextColor ">
         
                <h1 className="font-black text-[1.75rem] text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h1>
                <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
                    <div className="w-full h-[280px] mt-6 p-6 rounded-lg shadow-[inset_0px_0px_0px_6px_rgba(246,_246,_246,_1)]  ">
                        form
                    </div>
                    <div className="text-[.75rem] font-bold">
                        {" "}
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </div>
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
