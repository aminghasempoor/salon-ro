"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useTranslations} from "next-intl";


export default function LoginComponent(){
    const t = useTranslations()
    const formSchema = z.object({
        phone_number: z.string().min(1,{message : `${t("LoginPage.Required")}`}).max(11, {message : `${t("LoginPage.error_max", {max : 11})}`}),
        password: z.string().min(1, {message : `${t("LoginPage.Required")}`}).max(10),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            phone_number: "",
            password: "",
        },
    })
    function onSubmit(values) {
        console.log(values)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center space-y-4">
                <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                        <FormItem>
                             <FormLabel>{`${t("LoginPage.phone_number")}`}</FormLabel>
                             <FormControl>
                                 <Input placeholder={`${t("LoginPage.phone_number")}`} {...field} />
                            </FormControl>
                             <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                             <FormLabel>{`${t("LoginPage.password")}`}</FormLabel>
                             <FormControl>
                                 <Input placeholder={`${t("LoginPage.password")}`} {...field} />
                            </FormControl>
                             <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">{`${t("LoginPage.submit")}`}</Button>
            </form>
        </Form>
    )
}