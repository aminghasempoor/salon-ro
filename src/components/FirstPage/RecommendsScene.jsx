import BasicCarousel from "@/core/components/carousel/BasicCarousel";
import React from "react";

const RecommendsScene = () => {
    return (
        <div className="flex flex-col w-full justify-start items-start text-Light-TextColor dark:text-Dark-TextColor  gap-4">
            <div className="flex flex-col w-full h-fit gap-4">
                <h2 className="font-black text-[1.25rem] ">پیشنهاد ها</h2>
                <div className="w-full ">
                    <BasicCarousel slides={slides1} />
                </div>
            </div>
            <div className="flex flex-col w-full h-fit gap-4">
                <h2 className="font-black text-[1.25rem] ">بیشترین بازدید ها</h2>
                <div className="w-full ">
                    <BasicCarousel slides={slides2} />
                </div>
            </div>
            <div className="flex flex-col w-full h-fit gap-4">
                <h2 className="font-black text-[1.25rem] ">بالاترین امتیاز ها</h2>
                <div className="w-full ">
                    <BasicCarousel slides={slides3} />
                </div>
            </div>
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
