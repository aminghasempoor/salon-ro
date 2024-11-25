import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default async function AuthLayout({ children }) {
    return (
        <div
            className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-[100svh] w-full items-center justify-center font-Vazirmatn">
            <div id="rightSide" className="relative flex flex-col h-full w-full justify-center items-center p-4">
                <div
                    id="Header"
                    className="absolute top-0 px-2 py-2 flex flex-row justify-between items-center w-full h-fit gap-4 z-10"
                >
                    <ModeToggle />
                    <Link
                        id="backBtn"
                        variant="secondary"
                        className="flex p-3 lg hover:bg-[#E7AB9C]/40 rounded-lg"
                        href={"/"}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
                {children}
            </div>
            <div
                id="leftSide"
                className="relative hidden lg:flex flex-col invisible lg:visible lg:h-full h-full w-full justify-center items-center overflow-hidden"
            >
                <div
                    id="background 1"
                    className="absolute flex items-center justify-center z-[1] w-full h-full overflow-hidden bg-[url(https://www.fresha.com/assets/_next/static/images/Image3-fd3ccd7b3d9946a42a9baf567e5cb7eb.webp)] bg-cover bg-center"
                />
            </div>
        </div>
    );
}
