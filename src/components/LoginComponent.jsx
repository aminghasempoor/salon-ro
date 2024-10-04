"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";

// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MyLottie from "../assets/lottieFiles/user-avatar-animated.json";
import { Timer } from "lucide-react";

export default function LoginComponent() {
  const t = useTranslations();
  const formSchema = z.object({
    phone_number: z
      .string()
      .min(1, { message: `${t("LoginPage.Required")}` })
      .max(11, { message: `${t("LoginPage.error_max", { max: 11 })}` }),
    password: z
      .string()
      .min(1, { message: `${t("LoginPage.Required")}` })
      .max(10),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className=" flex h-[100svh] w-full items-center justify-center ">
      <div
        className="flex items-center justify-center h-[100%] w-full 
        bg-[url('../assets/Backgrounds/blob-haikei.svg')] bg-no-repeat  bg-cover bg-top fixed z-[-1]"
      ></div>

      <div className="flex flex-col border border-black h-full w-full max-w-[720px] justify-center items-center p-4">
        {/* <DotLottieReact
        className="border border-black"
          src='../assets/lottieFiles/user-avatar-animated.json'
          loop
          autoplay
        /> */}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col border border-blue-400 h-full w-full max-w-[400px] min-w-[60%]  items-center  justify-around "
          >
            <Lottie animationData={MyLottie} loop className="w-[50%] border " />
            <div className="flex flex-col w-full h-fit justify-center items-center space-y-4">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <div className="flex flex-row justify-between">
                      <FormLabel className="text-black">{`${t(
                        "LoginPage.phone_number"
                      )}`}</FormLabel>
                      <FormMessage className="px-4 text-red-800 underline underline-offset-4" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder={`${t("LoginPage.phone_number")}`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <div className="flex flex-row justify-between">
                      <FormLabel className="text-black">{`${t(
                        "LoginPage.password"
                      )}`}</FormLabel>
                      <FormMessage className="px-4 text-red-800 underline underline-offset-4 " />
                    </div>
                    <FormControl>
                      <Input
                        className=""
                        placeholder={`${t("LoginPage.password")}`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button className=" w-full h-12   " type="submit">{`${t(
              "LoginPage.submit"
            )}`}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
