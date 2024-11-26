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
            className="relative"
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
                <SwiperSlide key={index} className=" items-center  ">
                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="  "
                    />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">{slide.title}</h2>
                        <p className="text-gray-700">{slide.description}</p>
                        {/* Add more text elements as needed */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BasicCarousel;
