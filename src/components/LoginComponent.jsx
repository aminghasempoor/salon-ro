"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ArrowLeft, LogIn } from "lucide-react";
import Link from "next/link";
import { loginFormSchema } from "@/lib/utils/schemas";
import { ModeToggle } from "@/components/ModeToggle";
import { Checkbox } from "@/components/ui/checkbox";
import useRequest from "@/lib/hooks/useRequest";
import useUserStore from "@/lib/utils/UserStore";
import LanguageSwitcher from "@/core/components/LanguageSwitcher";

export default function LoginComponent() {
    const t = useTranslations();
    const { setToken } = useUserStore();
    const requestServer = useRequest({ notification: true });
    const form = useForm({
        resolver: zodResolver(loginFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            phone_number: "",
            password: "",
        },
    });
    async function onSubmit(values) {
        try {
            await requestServer("/api/fake-sign-in", "post", {
                data: {
                    phone_number: values.phone_number,
                    password: values.password,
                },
                success: {
                    notification: { show: true },
                },
            }).then((response) => {
                setToken(response.data.token);
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 h-[100svh] w-full items-center justify-center font-Vazirmatn">
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
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-16 gap-4 flex flex-col h-full w-full lg:max-w-[400px] justify-evenly items-center pb-8"
                    >
                        <div className="w-full flex flex-col gap-16 ">
                            <div className="flex flex-col w-full h-fit justify-center items-center lg:gap-16 gap-8">
                                <div className="w-full flex flex-col place-self-start gap-4 items-center">
                                    <h1 className="font-black text-[2rem] lg:text-5xl">{t("Global.appName")}</h1>
                                    <p>{t("Global.motto")}</p>
                                </div>
                                <div className="flex flex-col w-full gap-4 ">
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col w-full">
                                                <FormControl>
                                                    <Input
                                                        className="border-2"
                                                        placeholder={t("LoginPage.phone_number")}
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
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col w-full">
                                                <FormControl>
                                                    <Input
                                                        className="border-2"
                                                        type={"password"}
                                                        placeholder={t("LoginPage.password")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <div className="w-full h-3">
                                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex justify-between items-center w-full h-fit text-[.875rem] font-medium mb-4 mt-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <Checkbox id="terms" />
                                            <label htmlFor="terms" className="cursor-pointer pt-1">
                                                {t("LoginPage.remember")}
                                            </label>
                                        </div>
                                        <Link
                                            href={"/forget"}
                                            className="pt-1 text-Light-InputBoxColor dark:text-Dark-InputBoxColor hover:dark:text-Light-InputBoxColor hover:text-Dark-InputBoxColor"
                                        >
                                            {t("LoginPage.forget")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-fit w-full flex flex-col lg:gap-5 gap-4 items-center">
                            <Button
                                className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                                type="submit"
                            >
                                {t("LoginPage.login")}
                                <LogIn />
                            </Button>
                            <div className="flex flex-col items-center text-[.875rem] font-bold">
                                <p>{t("LoginPage.noAccount")}</p>
                                <Link href={"/register"} className="text-URLColor px-4">
                                    {t("LoginPage.createHere")}
                                </Link>
                            </div>
                        </div>
                    </form>
                </Form>
                <LanguageSwitcher />
            </div>
            <div
                id="leftSide"
                className="relative hidden lg:flex flex-col invisible lg:visible lg:h-full h-full w-full justify-center items-center overflow-hidden"
            >
                <div
                    id="background 1"
                    className="absolute flex items-center justify-center z-[1] w-full h-full overflow-hidden bg-[url(https://www.fresha.com/assets/_next/static/images/Image2-b598cd77921dc7f9a62fb3ec31bcaa48.webp)] bg-cover bg-center"
                />
            </div>
        </div>
    );
}
