"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./basicStyles.css";
import useWindowSize from "../windowSize/WindowSize";
import Image from "next/image";

const BasicCarousel = ({ slides }) => {
    const [swiperRef, setSwiperRef] = useState(null);
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
        <>
            <Swiper
                onSwiper={setSwiperRef}
                style={{ paddingBottom: "40px" }}
                className="select-none"
                speed={800}
                dir="ltr"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={8}
                slidesPerView={"auto"}
                navigation={navigationEnable}
                pagination={{ clickable: true }}
                a11y={true}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="absolute items-center  "
                        style={{ height: "400px", width: "80%", maxWidth: "320px", padding: "0px 4px 0px 4px" }}
                    >
                        <div className="relative  flex flex-col border rounded-[16px]  overflow-hidden h-full ">
                            <div className="overflow-hidden">
                                <Image src={slide.image} alt={`Slide ${index + 1}`} width={200} height={200} className="basic" />
                            </div>
                            <div className="flex flex-col p-4 w-full gap-2 text-[.75rem]   " dir="rtl">
                                <h6 className="textClamp2 text-xl font-bold ">{slide.title}</h6>
                                <p className="textClamp2 w-full h-12  text-gray-700  overflow-hidden text-ellipsis ">
                                    {slide?.description}
                                </p>
                                <p className="textClamp2 w-full h-12  text-gray-700 line-clamp-1 overflow-hidden text-ellipsis  ">
                                    {slide?.address}
                                </p>

                                <div className="flex w-full h-fit   text-gray-700   ">
                                    {slide?.services?.map((service, i) => {
                                        <p className="textClamp2 text-black text-[1rem] " key={i}>
                                            {service}
                                        </p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
export default BasicCarousel;
