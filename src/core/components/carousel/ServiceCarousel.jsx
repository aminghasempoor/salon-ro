"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import "./serviceStyle.css";
import useWindowSize from "../windowSize/WindowSize";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ServiceCarousel = ({ slides }) => {
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
    const [swiperStatus, setSwiperStatus] = useState({ isBeginning: true, isEnd: false });

    useEffect(() => {
        checkSwiperStatus();

        return () => {};
    }, [swiperRef]);

    const textAnimation1 = {
        initial: { y: 20, opacity: 0.5 },
        whileInView: { y: 0, opacity: 1 },
        viewport: {
            once: true,
            margin: "-100px 0px",
        },
        exit: { y: -50, opacity: 0 },
        transition: { duration: 1 },
    };
    return (
        <div className="w-full flex flex-col " style={{ paddingBottom: "8px" }}>
            <Swiper
                onSliderMove={() => {
                    checkSwiperStatus();
                }}
                centerInsufficientSlides={true}
                grid={{ fill: "row", rows: 1 }}
                onSwiper={setSwiperRef}
                speed={800}
                style={{ paddingBottom: "40px", padding: "0px 16px" }}
                className="select-none"
                dir="ltr"
                modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
                spaceBetween={10}
                slidesPerView={"auto"}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 5,
                    bulletClass: "swiper-pagination-bullet",
                }}
                a11y={true}
                resistance={true}
                resistanceRatio={0.8}
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
                                delay: index < slides.length - swiperRef?.snapGrid.length + 2 ? index * 0.1 : 0,
                                duration: index < slides.length - swiperRef?.snapGrid.length + 2 ? 0.5 : 0,
                            }}
                            onClick={() => {
                                console.log("index", index);
                                console.log("snapGrid:", swiperRef?.snapGrid.length);
                                console.log(
                                    "slides.length - swiperRef?.snapGrid.length:",
                                    index < slides.length - swiperRef?.snapGrid.length + 2
                                );
                            }}
                        >
                            <div className="rounded-full overflow-hidden border-2">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="serviceCarouselImage w-full h-full rounded-full object-cover"
                                />
                            </div>

                            <div className="text-center font-semibold text-[0.75rem] ">{slide.title}</div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`" flex w-fit h-full gap-2 z-10 invisible " ${swiperStatus?.isBeginning && swiperStatus.isEnd ? "lg:invisible" : "lg:visible"} `}
                style={{ padding: "0px 20px", translate: "0px -20px", height: "40px", overflow: "visible" }}
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