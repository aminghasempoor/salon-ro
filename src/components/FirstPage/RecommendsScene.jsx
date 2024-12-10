import BasicCarousel from "@/core/components/carousel/BasicCarousel";
import React from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Flame, Megaphone, Ribbon, Sparkles, Tag, ThumbsUp } from "lucide-react";

const RecommendsScene = () => {
    const carouselAnimation = {
        initial: { opacity: 0.7, scaleX: 0.95 },
        whileInView: { opacity: 1, scaleX: 1 },
        viewPort: {
            once: true,
            // margin: "-150px 0px",
            amount: 0.3,
        },
        transition: { duration: 0.5 },
    };
    const textAnimation1 = {
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: {
            once: true,
            margin: "-50px 0px",
            //  amount: 0.3
        },
        exit: { y: -50, opacity: 0 },
        transition: { duration: 1 },
    };
    return (
        <div className="flex flex-col w-full  px-4 py-4  z-0 justify-start items-start text-Light-TextColor dark:text-Dark-TextColor rounded-[16px] gap-4 shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.2)] shadow-Light-Sec100/30 dark:shadow-Light-Sec100/10 ">
            <motion.div
                className="flex items-center gap-2 font-black text-[1.25rem] px-4"
                initial={textAnimation1.initial}
                exit={textAnimation1.exit}
                transition={textAnimation1.transition}
                whileInView={textAnimation1.whileInView}
                viewport={textAnimation1.viewport}
            >
                <span>
                    <Ribbon color="#00f" />
                </span>
                <h3> پیشنهاد ها</h3>
            </motion.div>
            <motion.div
                initial={carouselAnimation.initial}
                whileInView={carouselAnimation.whileInView}
                viewport={carouselAnimation.viewPort}
                transition={carouselAnimation.transition}
                className="flex flex-col w-full h-fit gap-4"
            >
                <div className="w-full ">
                    <BasicCarousel slides={slides1} />
                </div>
            </motion.div>
            <motion.div
                className="flex items-center gap-2 font-black text-[1.25rem] px-4"
                initial={textAnimation1.initial}
                exit={textAnimation1.exit}
                transition={textAnimation1.transition}
                whileInView={textAnimation1.whileInView}
                viewport={textAnimation1.viewport}
            >
                <span>
                    <Flame color="#F97025" fill="#F97025" />
                </span>
                <h3> بیشترین بازدید ها</h3>
            </motion.div>
            <motion.div
                initial={carouselAnimation.initial}
                whileInView={carouselAnimation.whileInView}
                viewport={carouselAnimation.viewPort}
                transition={carouselAnimation.transition}
                className="flex flex-col w-full h-fit gap-4"
            >
                <div className="w-full ">
                    <BasicCarousel slides={slides2} />
                </div>
            </motion.div>
            <motion.div
                className="flex items-center gap-2 font-black text-[1.25rem] px-4"
                initial={textAnimation1.initial}
                exit={textAnimation1.exit}
                transition={textAnimation1.transition}
                whileInView={textAnimation1.whileInView}
                viewport={textAnimation1.viewport}
            >
                <span>
                    <Sparkles color="#F9BD02" />
                </span>
                <h3> بالاترین امتیاز ها</h3>
            </motion.div>
            <motion.div
                initial={carouselAnimation.initial}
                whileInView={carouselAnimation.whileInView}
                viewport={carouselAnimation.viewPort}
                transition={carouselAnimation.transition}
                className="flex flex-col w-full h-fit gap-4"
            >
                <div className="w-full ">
                    <BasicCarousel slides={slides3} />
                </div>
            </motion.div>
        </div>
    );
};

export default RecommendsScene;

// DUMMY SLIDES
const slides1 = [
    {
        image: "https://picsum.photos/536/354",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/820/500",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/500/800",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/1360/900",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/1021/536/354.jpg?hmac=XeUbyCXoxX2IrSELemo2mRl4zVXzhjFyxtj3GTVZ8xo",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/764/536/354.jpg?hmac=tUClndcsRR7YYrBLrohEXgy_1dVqdKAzhNf4fCyN1O0",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/628/536/354.jpg?hmac=W_-CeOM1wK13bBoAisLYOEJaIZwd9r2wM5VpQBb7uKA",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    // ... more slides
];
const slides2 = [
    {
        image: "https://picsum.photos/537/354",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/821/500",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/501/800",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/1361/900",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/1021/536/354.jpg?hmac=XeUbyCXoxX2IrSELemo2mRl4zVXzhjFyxtj3GTVZ8xo",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/764/536/354.jpg?hmac=tUClndcsRR7YYrBLrohEXgy_1dVqdKAzhNf4fCyN1O0",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/628/536/354.jpg?hmac=W_-CeOM1wK13bBoAisLYOEJaIZwd9r2wM5VpQBb7uKA",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    // ... more slides
];
const slides3 = [
    {
        image: "https://picsum.photos/538/354",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/822/500",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/502/800",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://picsum.photos/1362/900",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/1021/536/354.jpg?hmac=XeUbyCXoxX2IrSELemo2mRl4zVXzhjFyxtj3GTVZ8xo",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/764/536/354.jpg?hmac=tUClndcsRR7YYrBLrohEXgy_1dVqdKAzhNf4fCyN1O0",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    {
        image: "https://fastly.picsum.photos/id/628/536/354.jpg?hmac=W_-CeOM1wK13bBoAisLYOEJaIZwd9r2wM5VpQBb7uKA",
        title: "نام سالن نام سالن",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        address: "اصفهان، رباط دوم، میرفندرسکی، ک 26، پ 51، ساختمان رندوم، واحد 12",
        services: ["ناخن", "لیزر موی زائد", "ماساژ", "Skin Care"],
    },
    // ... more slides
];
