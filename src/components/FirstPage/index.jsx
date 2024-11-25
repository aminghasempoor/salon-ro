import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Header from "./Header";
import FirstScene from "./FirstScene";
import RecommendsScene from "./RecommendsScene";

const FirstPageComponent = () => {
    return (
        <div className="relative w-full h-full flex flex-col bg-Light-BackgroundColor dark:bg-Dark-BackgroundColor px-4">
            <Header />

            <FirstScene />
            <RecommendsScene />
            <div className=" w-full h-[300svh] bg-black/50">Download App </div>
            <div>Reviews </div>
            <div>Browse By City </div>
            <div>Footer </div>
        </div>
    );
};

export default FirstPageComponent;
