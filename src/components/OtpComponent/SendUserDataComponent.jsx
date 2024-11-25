"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ArrowLeft, Earth, SendHorizontal, Undo2 } from "lucide-react";
import LogoTextSVG from "@/core/components/SVGs/LogoTextSVG";
import LoginLeftSideBackground from "@/core/components/SVGs/LoginLeftSideBackground";
import LogoFullSVG from "@/core/components/SVGs/LogoFullSVG";
import Link from "next/link";
import { RegisterFormSchema } from "@/lib/utils/schemas";
import { ModeToggle } from "@/components/ModeToggle";
import useRequest from "@/lib/hooks/useRequest";

export default function SendUserDataComponent({
    setOtpToken,
    setPhoneNumber,
    PhoneNumber,
    setTimer,
    initialTimerValue,
}) {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const form = useForm({
        resolver: zodResolver(RegisterFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            phone_number: PhoneNumber,
            user_name: "",
            last_name: "",
        },
    });

    function onSubmit(values) {
        requestServer("/api/fake-otp", "post", {
            data: {
                phone_number: values.phone_number,
                user_name: values.user_name,
                last_name: values.last_name,
            },
            success: {
                notification: { show: true },
            },
        })
            .then(function (response) {
                setPhoneNumber(values.phone_number);
                setOtpToken(true);
                setTimer(initialTimerValue);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-[100svh] w-full items-center justify-center font-Vazirmatn">
            <div id="rightSide" className="relative flex flex-col h-full w-full justify-center items-center p-4 ">
                <div
                    id="Header"
                    className="absolute top-0 px-2 py-2 flex flex-row justify-between items-center w-full h-fit gap-4 z-10 "
                >
                    <div className="flex items-center justify-center h-fit w-fit gap-4">
                        <ModeToggle />
                        <Button variant="ghost">EN/FA</Button>
                    </div>

                    <Link
                        id="backBtn"
                        variant="secondary"
                        className="flex p-3  lg hover:bg-[#E7AB9C]/40  rounded-lg"
                        href={"/"}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-16  flex flex-col h-full w-full lg:max-w-[400px]   items-center  pb-8 justify-center gap-16"
                    >
                        <div className="w-full flex flex-col gap-16">
                            <div className="w-full flex flex-col place-self-start gap-4 items-center">
                                <h1 className="font-black text-[2rem] lg:text-5xl">{t("Global.appName")}</h1>
                                <p>{t("Global.motto")}</p>
                            </div>
                            <div className="flex flex-col w-full h-fit justify-center items-center lg:gap-16 gap-8 ">
                                <div className="flex flex-col w-full gap-2 ">
                                    {/* <FormField
                                        control={form.control}
                                        name="user_name"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col w-full ">
                                                <div className="flex flex-row justify-between"></div>
                                                <FormControl>
                                                    <Input
                                                        className="border-2 "
                                                        placeholder={t("RegisterPage.user_name")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <div className="w-full h-3 ">
                                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col w-full  ">
                                                <div className="flex flex-row justify-between"></div>
                                                <FormControl>
                                                    <Input
                                                        className="border-2 "
                                                        placeholder={t("RegisterPage.last_name")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <div className="w-full h-3 ">
                                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                                </div>
                                            </FormItem>
                                        )}
                                    /> */}
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col w-full ">
                                                <div className="flex flex-row justify-between"></div>
                                                <FormControl>
                                                    <Input
                                                        className="border-2 "
                                                        placeholder={t("RegisterPage.phone_number")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-fit w-full flex flex-col lg:gap-5 gap-4 items-center">
                            <Button
                                className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                                type="submit"
                                dir="rtl"
                            >
                                <SendHorizontal />
                                {t("RegisterPage.ask_otp")}
                            </Button>
                            <div className="flex items-center text-[.875rem] font-bold">
                                <p>{t("RegisterPage.haveAccount")}</p>
                                <Link href={"/login"} className="text-Light-HaveNoAccount px-1.5">
                                    {t("RegisterPage.loginHere")}
                                </Link>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
            <div
                id="leftSide"
                className="relative hidden lg:flex flex-col invisible lg:visible lg:h-full h-full w-full justify-center items-center overflow-hidden"
            >
                <div
                    id="background 1"
                    className="absolute flex items-center justify-center z-[1] w-full h-full    overflow-hidden bg-[url(https://www.fresha.com/assets/_next/static/images/Image3-fd3ccd7b3d9946a42a9baf567e5cb7eb.webp)] bg-cover bg-center "
                ></div>
            </div>
        </div>
    );
}
