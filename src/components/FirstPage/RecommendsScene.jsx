import BasicCarousel from "@/core/components/carousel/BasicCarousel";
import React from "react";

const RecommendsScene = () => {
    const slides = [
        {
          image: 'https://picsum.photos/536/354',
          title: 'Slide 1 Title',
          description: 'This is the description for slide 1.',
          // Add more text fields as needed
        },
        {
          image: 'https://picsum.photos/820/500',
          title: 'Slide 1 Title',
          description: 'This is the description for slide 1.',
          // Add more text fields as needed
        },
        {
          image: 'https://picsum.photos/500/800',
          title: 'Slide 1 Title',
          description: 'This is the description for slide 1.',
          // Add more text fields as needed
        },
        {
          image: 'https://picsum.photos/1360/900',
          title: 'Slide 1 Title',
          description: 'This is the description for slide 1.',
          // Add more text fields as needed
        },
        {
            image: 'https://fastly.picsum.photos/id/1021/536/354.jpg?hmac=XeUbyCXoxX2IrSELemo2mRl4zVXzhjFyxtj3GTVZ8xo',
          title: 'Slide 2 Title',
          description: 'This is the description for slide 2.',
          // Add more text fields as needed
        },
        {
            image: 'https://fastly.picsum.photos/id/764/536/354.jpg?hmac=tUClndcsRR7YYrBLrohEXgy_1dVqdKAzhNf4fCyN1O0',
          title: 'Slide 2 Title',
          description: 'This is the description for slide 2.',
          // Add more text fields as needed
        },
        {
            image: 'https://fastly.picsum.photos/id/628/536/354.jpg?hmac=W_-CeOM1wK13bBoAisLYOEJaIZwd9r2wM5VpQBb7uKA',
          title: 'Slide 2 Title',
          description: 'This is the description for slide 2.',
          // Add more text fields as needed
        },
        // ... more slides
      ];
    return (
        <div className="flex flex-col w-full h-[calc(100svh-72px)] justify-start items-start text-Light-TextColor dark:text-Dark-TextColor border ">
            <h2 className="font-black text-[1.25rem] ">پیشنهادات</h2>
            <div className="w-full h-[400px]">
                <BasicCarousel slides={slides} />
            </div>
        </div>
    );
};

export default RecommendsScene;
