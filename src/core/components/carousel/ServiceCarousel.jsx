"use client";
import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import "./serviceStyle.css";
import useWindowSize from "../windowSize/WindowSize";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const ServiceCarousel = ({ slides }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    // Disables carousel navigation on smaller Displays
    const { width } = useWindowSize();
    const [navigationEnable, setNavigationEnable] = useState(true);
    useEffect(() => {
        if (width > 720) {
            setNavigationEnable(true);
        } else {
            setNavigationEnable(false);
        }
    }, [width]);
    // detecting Beginning/End of swiper
    const checkSwiperStatus = () => {
        if (swiperRef?.isBeginning) {
            setSwiperStatus((prev) => {
                return { ...prev, isBeginning: true };
            });
        } else {
            setSwiperStatus((prev) => {
                return { ...prev, isBeginning: false };
            });
        }
        if (swiperRef?.isEnd) {
            setSwiperStatus((prev) => {
                return { ...prev, isEnd: true };
            });
        } else {
            setSwiperStatus((prev) => {
                return { ...prev, isEnd: false };
            });
        }
    };
    // Enable/Disable custom Next/Prev Buttons
    const [swiperStatus, setSwiperStatus] = useState({ isBeginning: true, isEnd: false });
    // useEffect(() => {
    //     console.log(swiperStatus);
    //     return () => {};
    // }, [swiperStatus]);

    useEffect(() => {
        checkSwiperStatus();

        return () => {};
    }, [swiperRef]);
    // console.log("snapGrid:", swiperRef?.snapGrid.length);

    const textAnimation1 = {
        initial: { y: 20, opacity: 0.5 },
        whileInView: { y: 0, opacity: 1 },
        viewport: {
            once: true,
            margin: "-100px 0px",
            //  amount: 0.3
        },
        exit: { y: -50, opacity: 0 },
        transition: { duration: 1 },
    };
    return (
        <div className="w-full flex flex-col " style={{ paddingBottom: "4px" }}>
            <Swiper
                onSliderMove={() => {
                    checkSwiperStatus();
                }}
                centerInsufficientSlides={true}
                // centeredSlides={true}
                // centeredSlidesBounds={true}
                grid={{ fill: "row", rows: 1 }}
                onSwiper={setSwiperRef}
                speed={800}
                style={{ paddingBottom: "40px", padding: "0px 16px" }}
                className="select-none"
                dir="ltr"
                modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
                spaceBetween={10}
                slidesPerView={"auto"}
                // navigation={navigationEnable}
                pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
                a11y={true}
                resistance={true}
                resistanceRatio={0.8}
                // scrollbar={{ draggable: true }}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index} className=" items-center " style={{ height: "180px", width: "120px" }}>
                        <motion.div
                            className="flex flex-col h-full  items-center gap-2   "
                            initial={textAnimation1.initial}
                            exit={textAnimation1.exit}
                            whileInView={textAnimation1.whileInView}
                            viewport={textAnimation1.viewport}
                            transition={{
                                duration: 1,
                                delay: index < slides.length - swiperRef?.snapGrid.length + 2 ? index * 0.1 : 0,
                                duration: index < slides.length - swiperRef?.snapGrid.length + 2 ? 0.5 : 0,
                            }}
                            onClick={() => {
                                // console.log(swiperRef);
                                console.log("index", index);
                                console.log("snapGrid:", swiperRef?.snapGrid.length);
                                console.log(
                                    "slides.length - swiperRef?.snapGrid.length:",
                                    index < slides.length - swiperRef?.snapGrid.length + 2 ? true : false
                                );
                                // console.log(
                                //     "index<swiperRef?.snapGrid.length?true:false",
                                //     index < swiperRef?.snapGrid.length+1 ? true : false
                                // );
                            }}
                        >
                            <div className="rounded-full overflow-hidden border-2">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    loading="lazy"
                                    className="serviceCarouselImage w-full h-full   rounded-full  object-cover " //w-[140px] h-[100px]
                                />
                            </div>

                            <div className="text-center font-semibold text-[0.75rem] ">{slide.title}</div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`" flex w-fit h-full gap-2 z-10 invisible  " ${swiperStatus?.isBeginning && swiperStatus.isEnd ? "lg:invisible" : "lg:visible"} `}
                style={{ padding: "0px 20px", translate: "0px -40px", height: "20px", overflow: "visible" }}
            >
                <Button
                    className="border rounded-full hover:bg-accent  "
                    variant="carouselBtn"
                    size="icon"
                    onClick={() => {
                        swiperRef.slideNext();
                        checkSwiperStatus();
                    }}
                    disabled={swiperStatus.isEnd}
                >
                    <ChevronRight />
                </Button>
                <Button
                    className="border rounded-full hover:bg-accent "
                    variant="carouselBtn"
                    size="icon"
                    onClick={() => {
                        swiperRef.slidePrev();
                        checkSwiperStatus();
                    }}
                    disabled={swiperStatus.isBeginning}
                >
                    <ChevronLeft />
                </Button>
            </div>
        </div>
    );
};

export default ServiceCarousel;
