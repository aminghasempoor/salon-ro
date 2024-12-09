import React from "react";

import { QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { animate } from "motion";
const HeroScene = () => {
    const t = useTranslations();

    const animate = { scale: 1 };
    // 2 animations for h3 tags
    const textAnimation2 = {
        initial: { scale: 0.8 },
        animate: { scale: 1 },
        exit: { y: -30, opacity: 0 },
        transition: { type: "spring" },
    };
    const textAnimation1 = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 },
        transition: { duration: 1 },
    };
    //   bg-[url(https://www.fresha.com/assets/_next/static/media/spotlight1.71dc283c.svg)] bg-no-repeat bg-contain bg-top
    return (
        <div
            className="flex flex-col w-full lg:min-h-[calc(100svh-72px)] min-h-[100svh] h-fit justify-center items-center text-Light-TextColor dark:text-Dark-TextColor font-Vazirmatn pt-[24px]
      
         "
        >
            <h1 className="sr-only">سالنرو</h1>
            <span className="absolute w-full h-[100svh] overflow-hidden  -z-10  top-0   dark:hidden blur-[80px]">
                <div
                    className="fixed w-[600px] h-[600px] overflow-hidden   bg-[#FFD7FF] dark:bg-[#e7ab9c10] rounded-[20%]"
                    // alt="bg"
                    // src="https://www.fresha.com/assets/_next/static/media/spotlight1.71dc283c.svg"
                    style={{
                        animation: "spin 10s ease-out infinite reverse",
                        scale: 0.8,
                        translate: "500px -300px",
                        transformOrigin: "00px 600px",
                    }}
                />
                <div
                    className="fixed w-[600px] h-[600px] overflow-hidden   bg-[#FFD7FF] dark:bg-[#e7ab9c10] rounded-[20%]"
                    // alt="bg"
                    // src="https://www.fresha.com/assets/_next/static/media/spotlight1.71dc283c.svg"
                    style={{
                        animation: "spin 40s linear infinite reverse",
                        scale: 0.8,
                        translate: "-500px -300px",
                        transformOrigin: "00px 600px",
                    }}
                />
                <div
                    className="fixed w-[400px] h-[800px] overflow-hidden  origin-center   bg-[#FFD7FF] dark:bg-[#e7ab9c10] rounded-[100%]"
                    // alt="bg"
                    // src="https://www.fresha.com/assets/_next/static/media/spotlight1.71dc283c.svg"
                    style={{
                        animation: "spin 20s ease infinite ",
                        scale: 0.8,
                        translate: "-400px 600px",
                        transformOrigin: "400px 200px",
                    }}
                />
            </span>

            <motion.div
                initial={{ y: 50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1, type: "easeOut" }}
            >
                <motion.h3
                    className="font-bold text-center mb-8"
                    style={{ fontSize: "clamp(1.75rem,5vw,50px)" }}
                    initial={textAnimation1.initial}
                    animate={textAnimation1.animate}
                    exit={textAnimation1.exit}
                    transition={textAnimation1.transition}
                >
                    راه آراستگی بهت نزدیکتر شده.
                </motion.h3>
            </motion.div>

            <motion.h3
                className="font-medium text-center mb-8 "
                style={{ fontSize: "clamp(1.5rem,4vw,20px)" }}
                initial={textAnimation1.initial}
                animate={textAnimation1.animate}
                exit={textAnimation1.exit}
                transition={{ ...textAnimation1.transition, delay: 3.5 }}
            >
                نوبتت رو بگیر.
            </motion.h3>
            <motion.div
                className="flex flex-col w-full h-fit justify-center items-center gap-10 mt-0 px-4 lg:px-0 "
                initial={{ ...textAnimation2.initial, opacity: 0 }}
                animate={{ ...textAnimation2.animate, opacity: 1 }}
                exit={textAnimation2.exit}
                transition={{ delay: 0.0, duration: 0.5 }}
            >
                <div
                    className="flex flex-col justify-center items-center  rounded-lg 
                    w-full min-w-[200px] lg:max-w-[80%] h-fit pb-4
             ring-[6px] ring-gray-100
           bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor bg-opacity-40 backdrop-blur-[40px]
                "
                >
                    {/* form */}
                    <div className="flex flex-wrap w-full h-full lg:flex-row  justify-between items-center p-4 gap-4">
                        <div className="flex justify-start items-center border px-2 w-full h-[80px] rounded-lg bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor ">
                            نام سالن
                        </div>
                        <div className="flex justify-start items-center border px-2 w-full h-[80px] rounded-lg bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor ">
                            آدرس
                        </div>
                        <div className="w-full flex gap-4">
                            <div className="flex justify-start items-center border px-2 w-[50%] h-[80px] rounded-lg bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor ">
                                تاریخ
                            </div>
                            <div className="flex justify-start items-center border px-2 w-[50%] h-[80px] rounded-lg bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor ">
                                ساعت
                            </div>
                        </div>
                    </div>
                    <Button className="w-40 h-10">جستحو</Button>
                </div>
                <motion.p
                    className=" font-semibold"
                    style={{ fontSize: "clamp(1.5rem,2vw,30px)" }}
                    initial={textAnimation1.initial}
                    animate={textAnimation1.animate}
                    exit={textAnimation1.exit}
                    transition={{ ...textAnimation1.transition, delay: 2 }}
                >
                    وقتت مهم ترین داراییه!
                </motion.p>
            </motion.div>
            <Button
                variant="outline"
                size="app"
                className="flex items-center justify-center mt-8 gap-2 font-semibold text-[1rem] mb-32 lg:mb-10"
            >
                <QrCode size={"24"} /> {"Get The App"}
            </Button>
        </div>
    );
};

export default HeroScene;
