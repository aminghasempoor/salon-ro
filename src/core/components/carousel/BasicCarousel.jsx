"use client";
import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./basicStyles.css";
import useWindowSize from "../windowSize/WindowSize";
import { Button } from "@/components/ui/button";

// Disables carousel navigation on smaller Displays
const BasicCarousel = ({ slides }) => {
    const { width } = useWindowSize();
    const [navigationEnable, setNavigationEnable] = useState(true);
    useEffect(() => {
        if (width > 720) {
            setNavigationEnable(true);
        } else {
            setNavigationEnable(false);
        }
    }, [width]);
    return (
        <Swiper
            speed={800}
            className=" "
            dir="ltr"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={"auto"}
            navigation={navigationEnable}
            pagination={{ clickable: true }}
            a11y={true}

            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
        >
            {slides?.map((slide, index) => (
                <SwiperSlide key={index} className="absolute items-center  ">
                    <div className="relative  flex flex-col border rounded-2xl  overflow-hidden h-full">
                        <img src={slide.image} alt={`Slide ${index + 1}`} className=" " />
                        <div className="flex flex-col p-4 w-full gap-2 text-[.75rem]   " dir="rtl">
                            <h2 className="text-2xl font-bold ">{slide.title}</h2>
                            <p className="w-full h-10  text-gray-700  overflow-hidden text-ellipsis ">
                                {slide?.description}
                            </p>
                            <p className="w-full h-10  text-gray-700 line-clamp-1 overflow-hidden text-ellipsis ">
                                {slide?.address}
                            </p>

                            <div className="flex w-full h-fit   text-gray-700   ">
                                {/* خدماتی که ارائه میدهند */}
                                {slide?.services?.map((service, i) => {
                                    <p className="text-black text-[1rem] " key={i}>
                                        {service}
                                    </p>;
                                })}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BasicCarousel;
