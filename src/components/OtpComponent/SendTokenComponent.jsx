"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { SendHorizontal } from "lucide-react";
import { OtpFormSchema } from "@/lib/utils/schemas";
import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import useRequest from "@/lib/hooks/useRequest";
import ResendToken from "@/core/components/ResendToken";

export default function SendTokenComponent({ PhoneNumber, setOtpToken, timer, setTimer, initialTimerValue }) {
    const t = useTranslations();
    const [resendingOtp, setResendingOtp] = useState(false);
    const requestServer = useRequest({ notification: true });
    const form = useForm({
        resolver: zodResolver(OtpFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            phone_number: PhoneNumber,
            pin: "",
        },
    });

    function onSubmit(values) {
        requestServer("/api/fake-sign-up", "post", {
            data: { phone_number: PhoneNumber, otp: values.pin },
            success: { notification: { show: true } },
        }).then((response) => setOtpToken(response.data.token)).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-16 flex flex-col h-full w-full lg:max-w-[400px] items-center pb-8 justify-center gap-16"
            >
                <div className="w-full flex flex-col gap-16">
                    <div className="w-full flex flex-col place-self-start gap-4 items-center">
                        <h1 className="font-black text-[2rem] lg:text-5xl">{t("Global.appName")}</h1>
                        <p>{t("Global.motto")}</p>
                    </div>
                    <div className="flex flex-col w-full h-fit justify-center items-center lg:gap-16 gap-8 ">
                        <div className="flex flex-col w-full gap-2">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col w-full justify-between  h-full ">
                                        <div
                                            className="flex flex-col w-full h-fit largePhone:gap-10 gap-4 py-2 ">
                                            <FormLabel
                                                className="flex w-full items-start text-[1.25rem] font-bold">
                                                {t("OtpPage.otp")}
                                            </FormLabel>
                                            <FormControl>
                                                <div className="flex w-full justify-center gap-2 " dir="ltr">
                                                    <InputOTP maxLength={5} {...field} pattern={"^\\d+$"}>
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
                                            </FormControl>
                                        </div>
                                        <div
                                            className="h-fit w-full flex flex-col justify-end lg:gap-5 gap-4 items-center">
                                            <FormMessage
                                                className=" w-full items-center justify-center content-center" />
                                            <Button
                                                className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                                                type="submit"
                                                dir="rtl"
                                            >
                                                <SendHorizontal />
                                                {t("OtpPage.submit")}
                                            </Button>
                                            <div className="flex justify-between items-center gap-1">
                                                <ResendToken
                                                    resendingOtp={resendingOtp}
                                                    setResendingOtp={setResendingOtp}
                                                    initialTimerValue={initialTimerValue}
                                                    timer={timer}
                                                    setTimer={setTimer}
                                                    PhoneNumber={PhoneNumber}
                                                    disabled={form.formState.isSubmitting}
                                                />
                                                <Button
                                                    variant={"ghost"}
                                                    onClick={() => setOtpToken(false)}
                                                    className="flex gap-1 text-[.875rem] font-bold h-fit p-2"
                                                >
                                                    <p className="text-Light-HaveNoAccount dark:text-Dark-HaveNoAccount">
                                                        {t("OtpPage.change_number")}
                                                    </p>
                                                </Button>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
}