"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Header from "./Header";
import RecommendsScene from "./RecommendsScene";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import useWindowSize from "@/core/components/windowSize/WindowSize";
import HeroScene from "./HeroScene";
import Services from "./Services";

const FirstPageComponent = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const [scrollRatio, setScrollRatio] = useState(0);
    const WindowHeight = useWindowSize().height; // gives window height
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest);
        // console.log("ratio", Math.round((latest / (WindowHeight - window.innerHeight)) * 100));
        setScrollRatio(Math.round((latest / (WindowHeight - window.innerHeight)) * 100));
        setScrollYPosition(latest);
    });
    return (
        <div className="relative w-full max-w-[1440px] place-self-center h-full flex flex-col   font-Vazirmatn ">
            <Header />

            <HeroScene />

            <RecommendsScene />
            <Services />
            {/* <div className=" w-full h-[300svh] bg-gray-300 z-0">Download App </div>
            <div>Reviews </div>
            <div>Browse By City </div>
            <div>Footer </div> */}
        </div>
    );
};

export default FirstPageComponent;
