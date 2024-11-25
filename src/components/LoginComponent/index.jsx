"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { loginFormSchema } from "@/lib/utils/schemas";
import { Checkbox } from "@/components/ui/checkbox";
import useRequest from "@/lib/hooks/useRequest";
import useUserStore from "@/lib/utils/UserStore";

export default function Index() {
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

    function onSubmit(values) {
        requestServer("/api/fake-sign-in", "post", {
            data: {
                phone_number: values.phone_number,
                password: values.password,
            },
            success: {
                notification: { show: true },
            },
        }).then((response) => {
            setToken(response.data.token);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
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
                                            <FormMessage
                                                className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
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
                                            <FormMessage
                                                className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <div
                                className="flex justify-between items-center w-full h-fit text-[.875rem] font-medium mb-4 mt-4">
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
                    <div className="flex items-center text-[.875rem] font-bold">
                        <p>{t("LoginPage.noAccount")}</p>
                        <Link href={"/register"} className="text-Light-HaveNoAccount px-4">
                            {t("LoginPage.createHere")}
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    );
}