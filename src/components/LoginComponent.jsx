"use client";
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
import { LogIn, Undo2 } from "lucide-react";
import LogoTextSVG from "@/core/components/SVGs/LogoTextSVG";
import LoginLeftSideBackground from "@/core/components/SVGs/LoginLeftSideBackground";
import LogoFullSVG from "../core/components/SVGs/LogoFullSVG";
import LogoSVG from "@/core/components/SVGs/LogoSVG";
import Link from "next/link";
import {loginFormSchema} from "@/lib/utils/schemas";
import {ModeToggle} from "@/components/ModeToggle";
import {useState} from "react";
import useRequest from "@/lib/hooks/useRequest";
import {GET_USER_TOKEN} from "@/core/utils/route";
import useUserStore from "@/lib/utils/UserStore";

export default function LoginComponent() {
  const t = useTranslations();
  const {setToken} = useUserStore()
  const requestServer = useRequest({notification: {success : true, show : true}})
  const[passwordType, setPasswordType] = useState("password")
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
          email: values.phone_number,
          password: values.password,
        },
        success: {
          notification: {show: true}
        }
      }).then((response)=>{
        setToken(response.data.token)
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col-reverse 720px:grid 720px:grid-cols-2 h-[100svh] w-full items-center justify-center bg-[#955B5020] font-Vazirmatn ">
      <div
        id="rightSide"
        className="relative flex flex-col  h-full w-full  justify-center items-center p-4 "
      >
        <div
          id="Header"
          className="absolute top-0 px-8 py-4 flex flex-row justify-between items-center w-full mb-2 gap-4 "
        >
          <Link
          href={"/"}
          id="logoText"
          className="flex w-[160px] 720px:w-[200px] rounded-lg  p-3 h-fit hover:bg-[#E7AB9C]/40 bg-[#E7AB9C]/15 "
          >
            <LogoTextSVG />
          </Link>
          <Button
            id="backBtn720px"
            variant="secondary"
            className="hidden h-fit py-2.5  px-6   720px:flex gap-2 hover:bg-[#E7AB9C]/40 bg-[#E7AB9C]/15"
            onClick={() => {
              alert("Needs Route");
            }}
          >
            {`${t("Global.back")}`}
            <Undo2 />
          </Button>
          <Link
            id="backBtn"
            variant="secondary"
            className="flex p-2 px-4   720px:hidden hover:bg-[#E7AB9C]/40 bg-[#E7AB9C]/15"
            onClick={() => {
              alert("Needs Route");
            }}
           href={"/"}>
            <Undo2 />
          </Link>
          <ModeToggle/>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col  h-full w-full max-w-[400px] min-w-[50%] items-center justify-between 720px:justify-center space-y-12 pb-20"
          >
            <div
              id="logo"
              className="720px:hidden flex w-full max-w-[540px] h-[180px] 720px:h-fit p-8 mt-16"
            >
              <LogoSVG />
            </div>
            <div className="flex flex-col w-full h-fit justify-center items-center space-y-8 ">
              <div className="flex flex-col place-self-start  mb-12 ">
                <h1 className="font-black text-[2rem] 720px:text-5xl 720px:mb-4">{t("Global.appName")}</h1>
                <p>{t("Global.motto")}</p>
              </div>
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel>{t("LoginPage.phone_number")}</FormLabel>
                      <FormMessage className="px-4 text-red-800 font-bold animate-pulse" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("LoginPage.phone_number")}
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
                  <FormItem className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel>{t("LoginPage.password")}</FormLabel>
                      <FormMessage className="px-4 text-red-800 underline underline-offset-4"/>
                    </div>
                    <FormControl>
                      <Input
                        className=""
                        type={"password"}
                        placeholder={`${t("LoginPage.password")}`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="flex w-full h-12 gap-2 bg-PrimaryColor-100 hover:bg-PrimaryColor-100/80 text-SecondaryColor"
              type="submit"
            >
              {t("LoginPage.login")}
              <LogIn />
            </Button>
          </form>
        </Form>
      </div>
      <div
        id="leftSide"
        className="relative hidden 720px:flex flex-col invisible 720px:visible 720px:h-full w-full justify-center items-center p-4 overflow-hidden"
      >
        <div
          id="background 1"
          className="absolute flex items-center justify-center z-[1] top-0 right-0 left-0 bottom-0 opacity-60 m-16 rounded-[1rem] overflow-hidden object-fill"
        >
          <LoginLeftSideBackground />
        </div>
        <div
          id="leftSideFullLogo"
          className="flex z-[2] w-full max-w-[540px] h-[200px] 720px:h-fit p-12"
        >
          <LogoFullSVG />
        </div>
      </div>
    </div>
  );
}