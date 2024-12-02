"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";
import { RegisterFormSchema } from "@/lib/utils/schemas";
import useRequest from "@/lib/hooks/useRequest";

export default function SendUserNumberComponent({
                                                  setOtpToken,
                                                  setPhoneNumber,
                                                  PhoneNumber,
                                                  setTimer,
                                                  initialTimerValue,
                                                  setPageNumber
                                              }) {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const form = useForm({
        resolver: zodResolver(RegisterFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            phone_number: PhoneNumber,
        },
    });

    function onSubmit(values) {
        requestServer("/api/fake-otp", "post", {
            data: {
                phone_number: values.phone_number,
            },
            success: {
                notification: { show: true },
            },
        })
            .then(function(response) {
                setPhoneNumber(values.phone_number);
                setOtpToken(true);
                setTimer(initialTimerValue);
                setPageNumber(2)
            })
            .catch(function(error) {
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
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col w-full ">
                                        <FormControl>
                                            <Input
                                                className="border-2 "
                                                placeholder={t("RegisterPage.phone_number")}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage
                                            className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
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
    );
}
