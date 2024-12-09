"use client";
import { useTranslations } from "next-intl";
import useRequest from "@/lib/hooks/useRequest";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDataFormSchema } from "@/lib/utils/schemas";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ReactMultiDatePicker from "@/core/components/ReactMultiDatePicker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SendUserDataComponent = () => {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const form = useForm({
        resolver: zodResolver(UserDataFormSchema(t)),
        mode: "onBlur",
        defaultValues: {
            first_name: "",
            last_name: "",
            national_id: "",
            birthday: "",
            gender: "",
            province: "",
            city: "",
        },
    });

    function onSubmit(values) {
        requestServer("/api/fake-user-data", "post", {
            data: {
                first_name: values.first_name,
                last_name: values.last_name,
                national_id: values.national_id,
                birthday: values.birthday,
                gender: values.gender,
                province: values.province,
                city: values.city,
            },
            success: {
                notification: { show: true },
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-16 flex flex-col h-full w-full lg:max-w-[600px] items-center pb-8 justify-center gap-16"
            >
                <div className="w-full flex flex-col place-self-start gap-4 items-center">
                    <h1 className="font-black text-[2rem] lg:text-5xl">{t("Global.appName")}</h1>
                    <p>{t("Global.motto")}</p>
                </div>
                <div className="w-full flex flex-col gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input
                                            className="border-2"
                                            placeholder={t("UserDataPage.first_name")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input
                                            className="border-2"
                                            placeholder={t("UserDataPage.last_name")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="national_id"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input
                                            className="border-2"
                                            placeholder={t("UserDataPage.national_id")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                        <Controller
                            name="birthday"
                            control={form.control}
                            render={({ field }) => (
                                <div className="flex flex-col w-full">
                                    <FormControl>
                                        <ReactMultiDatePicker
                                            {...field}
                                            className="border-2 h-10 w-full rounded-lg"
                                            value={field.value}
                                            placeholder={t("UserDataPage.birthday")}
                                            onChange={(formattedDate) => field.onChange(formattedDate)}
                                        />
                                    </FormControl>
                                    {form.formState.errors.birthday && (
                                        <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold">
                                            {form.formState.errors.birthday.message}
                                        </FormMessage>
                                    )}
                                </div>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t("UserDataPage.gender")} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {/*<FormControl>*/}
                                    {/*    <Input className="border-2" placeholder={t("UserDataPage.gender")} {...field} />*/}
                                    {/*</FormControl>*/}
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input
                                            className="border-2"
                                            placeholder={t("UserDataPage.province")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input className="border-2" placeholder={t("UserDataPage.city")} {...field} />
                                    </FormControl>
                                    <FormMessage className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="h-fit w-full flex flex-col lg:gap-5 gap-4 items-center">
                    <Button
                        className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                        type="submit"
                        dir="rtl"
                    >
                        <SendHorizontal />
                        {t("UserDataPage.submit")}
                    </Button>
                    <div className="flex items-center text-[.875rem] font-bold">
                        <p>{t("UserDataPage.haveAccount")}</p>
                        <Link href={"/login"} className="text-Light-HaveNoAccount px-1.5">
                            {t("UserDataPage.loginHere")}
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    );
};
export default SendUserDataComponent;
