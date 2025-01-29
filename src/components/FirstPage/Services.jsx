import ServiceCarousel from "@/core/components/carousel/ServiceCarousel";
import React from "react";
import { slides1 } from "@/core/utils/landingSaloneInfo";

const Services = () => {
    return (
        <div className="flex flex-col w-full h-fit items-center justify-center mt-4 gap-4">
            <h3 className="text-[1.5rem] font-bold">بر اساس خدمات</h3>
            <ServiceCarousel slides={slides1} />
        </div>
    );
};

export default Services;