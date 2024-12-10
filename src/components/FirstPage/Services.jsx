import ServiceCarousel from "@/core/components/carousel/ServiceCarousel";
import React from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../ui/button";

const Services = () => {
    return (
        <div
            className="flex flex-col w-full h-fit items-center justify-center mt-4 gap-4"
            // flex flex-col w-full h-fit items-center justify-center mt-4 gap-4
            // flex flex-col w-full  px-4 py-4  z-0 justify-start items-start text-Light-TextColor dark:text-Dark-TextColor rounded-[16px] gap-4 shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.2)] shadow-Light-Sec100/30 my-4
        >
            <h3 className="text-[1.5rem] font-bold">بر اساس خدمات</h3>
            <ServiceCarousel slides={slides1} />
        </div>
    );
};

export default Services;

// Dummy slides

const slides1 = [
    {
        image: "https://img.freepik.com/premium-vector/woman-wearing-yellow-jacket-straw-hat-with-sunglasses-her-face_905719-6855.jpg?w=649",
        title: "زنانه",
    },
    {
        image: "https://img.freepik.com/free-vector/brunette-man-with-sunglasses_24908-81405.jpg?t=st=1733814692~exp=1733818292~hmac=410e2e9d7a2d93bc793fca7b319110e8e4c0eca980202e3987f3734c5d728391&w=900",
        title: "مردانه",
    },
    {
        image: "https://img.freepik.com/premium-vector/soothing-body-massage-logo_63220-158.jpg?w=900",
        title: "ماساژ",
    },
    {
        image: "https://img.freepik.com/premium-photo/hands-young-woman-with-dark-red-manicure-nails_87742-25317.jpg?w=649",
        title: "ناخن",
    },
    {
        image: "https://img.freepik.com/free-vector/realistic-jade-roller-gua-sha-set_23-2148850721.jpg?t=st=1733815981~exp=1733819581~hmac=496be426e06ba675194218809ec2b77487b6bedc8b45367b2ea7d5eba4e5079c&w=900",
        title: "Skin Care",
    },
    {
        image: "https://img.freepik.com/premium-vector/syringe-pharmaceutical-medical-minimal-vector-logos_186868-277.jpg?w=649",
        title: "کلینیک زیبایی",
    },
    {
        image: "https://img.freepik.com/premium-vector/handdrawn-womans-luxurious-eye-with-perfectly-shaped-eyebrows-full-lashes_491281-119.jpg?w=649",
        title: "چشم و ابرو",
    },
    {
        image: "https://img.freepik.com/premium-vector/composition-accessories-aroma-massage-spa-treatments_69317-535.jpg?w=649",
        title: "SPA",
    },
    {
        image: "https://img.freepik.com/premium-vector/young-woman-having-anti-aging-massage-beauty-facial-procedure-spa-therapy-vector-illustration_178650-14225.jpg?w=649",
        title: "Facial",
    },
    {
        image: "https://img.freepik.com/premium-vector/cream-photo-epilator-icon-cartoon-vector-cosmetic-body-care_98402-128771.jpg?w=649",
        title: "لیزر موهای زائد",
    },
    {
        image: "https://img.freepik.com/premium-vector/watercolor-abstract-feather-isolated-white-vivid-colours-gradient-technique-intricate-details-vector-graphic_236756-509.jpg?w=649",
        title: "خدمات غیر تهاجمی",
    },
    {
        image: "https://img.freepik.com/free-vector/pinup-style-lip-print_53876-8546.jpg?t=st=1733816969~exp=1733820569~hmac=2f464bebc8bab0049b9b05ccd7c795999a8305e6083a36fe03f0c98423f079cd&w=900",
        title: "میکاپ",
    },
    {
        image: "https://img.freepik.com/free-vector/hand-drawn-tattoo-gun-drawing-illustration_23-2150909290.jpg?t=st=1733817285~exp=1733820885~hmac=ddbe736dc76dfdf5412146576654d77c76e49e928f14ed98a9a3258b3949a438&w=649",
        title: "تتو و پیرسینگ",
    },
    {
        image: "https://img.freepik.com/premium-vector/bride-white-wedding-dress-standing-as-newlywed-just-married-female-vector-illustration_178650-56158.jpg?w=649",
        title: "عروس",
    },
    {
        image: "https://img.freepik.com/premium-vector/elegant-man-groom-married-image-vector-illustration-isolated_1322206-68001.jpg?w=649",
        title: "داماد",
    },
    {
        image: "https://img.freepik.com/free-vector/boy-happy-childhood-icon-isolated_24640-134167.jpg?t=st=1733817717~exp=1733821317~hmac=06ac5aedd014a21159521f25f9e78e49fae7db64810d086d9dbfeeb4a665ddcf&w=740",
        title: "کودک",
    },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },
    // {
    //     image: "https://picsum.photos/200/200",
    //     title: " لورم ایپسوم",
    // },

    // ... more slides
];

/* 
 <div className="flex flex-wrap items-center justify-center gap-2  w-fit h-fit    my-8">
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
                <div className="flex flex-col  h-40 w-36 items-center gap-2 border ">
                    <div className="w-[100px] aspect-square rounded-full bg-gray-500"></div>
                    <div className="text-center font-normal text-[0.75rem]"> شینیون</div>
                </div>
            </div>
*/
