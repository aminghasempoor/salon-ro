"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { SendHorizontal, Undo2 } from "lucide-react";
import LogoTextSVG from "@/core/components/SVGs/LogoTextSVG";
import LoginLeftSideBackground from "@/core/components/SVGs/LoginLeftSideBackground";
import LogoFullSVG from "@/core/components/SVGs/LogoFullSVG";
import Link from "next/link";
import {OtpFormSchema} from "@/lib/utils/schemas";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import useRequest from "@/lib/hooks/useRequest";

export default function SendTokenComponent({ PhoneNumber, setOtpToken, timer, setTimer, initialTimerValue }) {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const [passwordType, setPasswordType] = useState("password");
    const form = useForm({
        resolver: zodResolver(OtpFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            phone_number: PhoneNumber,
            otp_1: "",
            otp_2: "",
            otp_3: "",
            otp_4: "",
            otp_5: "",
        },
    });
    function onSubmit(values) {
        const otpParts = [values.otp_1, values.otp_2, values.otp_3, values.otp_4, values.otp_5];
        const otp = otpParts.join(''); // Joins them into a single string
        console.log(otp)
        requestServer("/api/fake-sign-up", "post", {
                data: {
                    phone_number: values.phone_number,
                    otp : otp
                },
                success: {
                    notification: { show: true },
                },
            }).then((response) => {
                setToken(response.data.token)
            });
    }

    return (
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-[100svh] w-full items-center justify-center font-Vazirmatn">
            <div
                id="rightSide"
                className="relative flex flex-col h-full w-full justify-center items-center p-4"
            >
                <div
                    id="Header"
                    className="absolute top-0 px-8 py-4 flex flex-row justify-between items-center w-full mb-2 gap-4"
                >
                    <ModeToggle />
                    <Link
                        id="backBtn720px"
                        variant="secondary"
                        className="hidden h-fit py-2 px-6 lg:flex gap-2 bg-Light-BackBtnColor hover:bg-Light-BackBtnHover dark:bg-Dark-BackBtnColor dark:hover:bg-Dark-BackBtnHover rounded-lg font-bold"
                        href={"/register"}
                    >
                        {`${t("Global.back")}`}
                        <Undo2 />
                    </Link>
                    <Link
                        id="backBtn"
                        variant="secondary"
                        className="flex p-2 lg:hidden hover:bg-[#E7AB9C]/40 bg-[#E7AB9C]/15 rounded-lg"
                        href={"/register"}
                    >
                        <Undo2 />
                    </Link>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col h-full w-full max-w-[500px] min-w-[60%] items-center justify-between lg:pb-20 pb-8 lg:ring-2 lg:ring-Light-Pri100 lg:dark:ring-Dark-Pri100 lg:my-20 lg:p-16 rounded-2xl"
                    >
                        <div
                            id="logo"
                            className="lg:hidden flex w-full max-w-[400px] lg:h-fit p-4 lg:mt-16 mt-8"
                        >
                            <LogoFullSVG />
                        </div>
                        <div className="hidden lg:flex w-full h-fit">
                            <LogoTextSVG />
                        </div>
                        <div className="w-full flex flex-col  gap-16 mb-8 ">
                            <div className="flex flex-col w-full h-fit justify-center items-center lg:gap-16 gap-8  ">
                                <div className="flex flex-col place-self-start gap-4">
                                    <h1 className="font-black text-[2rem] lg:text-5xl">
                                        {t("Global.appName")}
                                    </h1>
                                    <p>{t("Global.motto")}</p>
                                </div>
                                <div className="flex flex-col w-full gap-10 ">
                                    <FormLabel className="flex w-full items-start text-[1.25rem] font-bold">
                                        {t("OtpPage.otp")}
                                    </FormLabel>

                                    <div className="flex w-full justify-center gap-2" dir="ltr">
                                        <InputOTP maxLength={5} pattern={"^\\d+$"}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={1} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={4} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                    <Button
                                        className="flex rounded-[12px] border-2 px-4 py-2 min-w-24 max-w-32 w-fit items-center justify-center place-self-end text-[0.75rem] font-bold text-center bg-transparent text-Light-TextColor dark:text-Dark-TextColor hover:bg-Light-BackBtnColor hover:dark:bg-Dark-BackBtnColor"
                                        disabled={false}
                                    >
                                        {t("OtpPage.timer")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="h-fit w-full flex flex-col lg:gap-5 gap-4 items-center">
                            <div className="flex  justify-center text-[1.5rem] font-bold text-Light-Required dark:text-Dark-Required">
                                نیاز به امین
                                <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                            </div>
                            <Button
                                className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                                type="submit"
                                dir="rtl"
                            >
                                <SendHorizontal />
                                {t("OtpPage.submit")}
                            </Button>
                            <Link
                                href={"/register"}
                                className="flex gap-1 text-[.875rem] font-bold"
                            >
                                <p className="text-Light-HaveNoAccount dark:text-Dark-HaveNoAccount">{t("OtpPage.change_number")}</p>
                            </Link>
                        </div>
                    </form>
                </Form>
            </div>
            <div
                id="leftSide"
                className="relative hidden lg:flex flex-col invisible lg:visible lg:h-full max-h-[90%] w-full justify-center items-center overflow-hidden"
            >
                <div
                    id="background 1"
                    className="absolute flex items-center justify-center z-[1] w-fit h-fit max-w-[90%] aspect-square opacity-70 rounded-[1rem] overflow-hidden dark:mix-blend-plus-lighter"
                >
                    <LoginLeftSideBackground />
                </div>
                <div
                    id="leftSideFullLogo"
                    className="flex z-[2] w-full max-w-[540px] h-[200px] lg:h-fit p-12"
                >
                    <LogoFullSVG type={"background"} />
                </div>
            </div>
        </div>
    );
}
