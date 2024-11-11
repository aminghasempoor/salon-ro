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

import Lottie, { useLottie } from "lottie-react";

// import AvatarLottie from "../assets/lottieFiles/user-avatar-animated-jumping.json";
import AvatarLottie from "../assets/lottieFiles/gradient-background.json";
import { useState } from "react";
import { ArrowBigLeft, LogIn, Undo2 } from "lucide-react";

export default function LoginComponent() {
  // Lottie
  const options = {
    animationData: AvatarLottie,
    loop: true,
  };

  const { View } = useLottie(options);

  //
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
    <div className="flex flex-col-reverse 720px:grid 720px:grid-cols-2 h-[100svh] w-full items-center justify-center bg-[#955B5020] ">
      {/* <div className="fixed -z-10 h-full w-full  object-fill top-0 right-0 left-0 bottom-0 ">{View}</div> */}
      {/* <div id="darkBackground" className="fixed -z-10 top-0 right-0 left-0 bottom-0 bg-[linear-gradient(300deg,#955B50,#955B50,#E7AB9C)] [background-size:180%_180%] animate-background-animation"></div> */}
      <div className="relative flex flex-col  h-full w-full  justify-center items-center p-4 ">
        <div
          id="Header"
          className="absolute top-0 px-8 py-4 flex flex-row justify-between items-center w-full mb-2 gap-4 "
        >
          <Button
            id="logoText"
            className="flex w-[160px] 720px:w-[200px] rounded-lg bg-transparent p-2 h-fit  hover:bg-[#f4f4f5]/80"
          >
            <svg viewBox="0 0 525 63" fill="none">
              <path
                d="M247.532 0C254.693 0 260.943 2.06612 266.282 6.19838C273.834 12.0242 277.61 20.4919 277.61 31.6016C277.61 40.95 274.55 48.6048 268.43 54.5661C262.636 60.1886 255.572 63 247.239 63C239.882 63 233.437 60.7645 227.903 56.2935C220.546 50.3322 216.868 41.9661 216.868 31.1952C216.868 21.8468 219.96 14.2258 226.145 8.33225C232.004 2.77742 239.133 0 247.532 0ZM247.532 60.0532C249.094 60.0532 250.559 59.8839 251.926 59.5451C259.999 57.3096 264.036 47.8597 264.036 31.1952C264.036 26.7919 263.743 22.8968 263.157 19.5097C261.269 8.46774 255.963 2.94677 247.239 2.94677C246.653 2.94677 246.034 2.98064 245.383 3.04839C235.422 3.99677 230.442 13.5145 230.442 31.6016C230.442 37.5628 230.963 42.6096 232.004 46.7419C234.283 55.6161 239.459 60.0532 247.532 60.0532ZM494.184 0C501.345 0 507.595 2.06612 512.934 6.19838C520.486 12.0242 524.262 20.4919 524.262 31.6016C524.262 40.95 521.202 48.6048 515.082 54.5661C509.288 60.1886 502.224 63 493.891 63C486.534 63 480.089 60.7645 474.555 56.2935C467.198 50.3322 463.52 41.9661 463.52 31.1952C463.52 21.8468 466.612 14.2258 472.797 8.33225C478.657 2.77742 485.786 0 494.184 0ZM494.184 60.0532C495.746 60.0532 497.211 59.8839 498.579 59.5451C506.651 57.3096 510.688 47.8597 510.688 31.1952C510.688 26.7919 510.395 22.8968 509.809 19.5097C507.921 8.46774 502.615 2.94677 493.891 2.94677C493.305 2.94677 492.687 2.98064 492.036 3.04839C482.075 3.99677 477.094 13.5145 477.094 31.6016C477.094 37.5628 477.615 42.6096 478.657 46.7419C480.935 55.6161 486.111 60.0532 494.184 60.0532Z"
                fill="#5E2419"
              />
              <path
                d="M39.4531 56.4968C42.4479 53.4484 43.9453 49.7225 43.9453 45.3194C43.9453 39.5612 40.8854 34.7178 34.7656 30.7887C33.8542 30.2468 30.3385 28.4177 24.2187 25.3016C18.6198 22.3887 15.1367 19.5435 13.7695 16.7662C13.0534 15.2758 12.6953 13.7516 12.6953 12.1935C12.6953 8.12903 14.5833 5.35161 18.3594 3.86128C19.8568 3.25161 23.8073 2.60129 25.5 2.60129V0H21.6797C14.1276 0 8.36589 2.1 4.39453 6.3C1.79037 9.07742 0.488281 12.3629 0.488281 16.1564C0.488281 21.8468 3.54818 26.6225 9.66797 30.4839C10.6445 31.0258 14.2253 32.8887 20.4101 36.0726C26.1393 38.9854 29.6875 41.8645 31.0547 44.7096C31.7708 46.1322 32.1289 47.6225 32.1289 49.1806C32.1289 53.9225 30.013 57.1742 25.7812 58.9354C24.0885 59.6807 22.2005 60.0532 20.1172 60.0532C12.3698 60.0532 7.25912 56.0903 4.78516 48.1645C4.13412 45.929 3.71094 43.4903 3.51563 40.8484H0V62.187C1.6276 62.187 2.60417 61.679 2.92969 60.6629C3.0599 60.0532 3.125 59.1048 3.125 57.8177C8.20313 61.2725 14.1601 63 20.9961 63C29.0039 63 35.1562 60.8322 39.4531 56.4968Z"
                fill="#5E2419"
              />
              <path
                d="M102.84 61.9838H127.352C127.352 60.4258 126.896 59.5451 125.985 59.3419C125.724 59.2741 125.366 59.2403 124.911 59.2403H121.883L99.0316 1.01613H92.9766L71.4922 59.2403H65.2422V61.9838H83.0156C83.0156 60.4258 82.5599 59.5451 81.6484 59.3419C81.3229 59.2741 80.9648 59.2403 80.5742 59.2403H75.3984L92.293 12.9048L109.579 59.2403H102.84V61.9838Z"
                fill="#5E2419"
              />
              <path
                d="M147.852 61.9838H194.18L194.571 40.4419H192.032L189.59 49.1806C188.223 53.9225 186.237 56.937 183.633 58.2241C182.266 58.9016 180.671 59.2403 178.848 59.2403H167.715V5.796C167.715 5.796 167.852 4.75548 168.352 4.23522C168.852 3.71497 169.79 3.75968 169.79 3.75968H171.865H176.016V1.01613H147.891V3.75968H151.797H153.75C153.75 3.75968 154.853 3.71497 155.352 4.23522C155.851 4.75548 155.704 5.796 155.704 5.796L155.704 56.9544C155.704 56.9544 155.733 58.4159 155.352 58.8623C154.97 59.3086 153.75 59.2403 153.75 59.2403H151.797H150.088C149.537 59.2403 147.852 59.9028 147.852 60.9433V61.9838Z"
                fill="#5E2419"
              />
              <path
                d="M350.981 62.4919H356.157V50.0179L352.153 45.0145L316.801 1.01613H301.274V3.75968H305.18C305.18 3.75968 307.62 3.62759 308.5 4.68232C309.282 5.62039 309.086 7.80387 309.086 7.80387V57.2284C309.086 57.2284 308.968 58.3516 308.5 58.7891C308.047 59.2134 307 59.2403 307 59.2403H301.274V61.9838H321.391C321 60.2903 320.121 59.3758 318.754 59.2403H313.09V15.4451L350.981 62.4919Z"
                fill="#5E2419"
              />
              <path
                d="M385.195 61.9838H412.832V59.2403H407H405.019V34.1419H407H411.269L426.113 62.0855L442.519 61.9838C442.519 60.4935 442.096 59.6467 441.249 59.4435C440.859 59.3758 440.468 59.3419 440.078 59.3419H438.027L422.695 33.0242C425.86 32.1525 426.429 32.7961 428.5 31.0935L422.402 23.6153C421.583 25.9169 420.249 27.766 418.398 29.1629C416.64 30.45 414.622 31.0935 412.343 31.0935H405.019V3.75968H411.757C417.031 3.75968 420.576 6.3 422.399 11.3807L428.5 4.16206C424.919 1.65562 421.783 1.01613 416.64 1.01613H385.195V3.75968L391 3.75968L393.007 3.75968V59.2403H391H385.195V61.9838Z"
                fill="#5E2419"
              />
              <path
                d="M36.7943 22C36.7488 22 36.7148 21.9686 36.6921 21.9164L30.1136 13.7823C30.0113 13.6673 30 13.5836 30 13.5C30 13.4164 30.0113 13.3327 30.1136 13.2177L36.6921 5.0732C36.7148 5.03136 36.7488 5 36.7943 5C36.8511 5 36.8852 5.03136 36.9079 5.0732L43.4864 13.2177C43.5886 13.3327 43.6 13.4164 43.6 13.5C43.6 13.5836 43.5886 13.6673 43.4864 13.7823L36.9079 21.9164C36.8852 21.9686 36.8511 22 36.7943 22Z"
                fill="#E7AB9C"
              />
              <path
                d="M432.693 25.5C432.647 25.5 432.613 25.4686 432.591 25.4164L426.012 17.2823C425.91 17.1673 425.898 17.0836 425.898 17C425.898 16.9164 425.91 16.8327 426.012 16.7177L432.591 8.5732C432.613 8.53136 432.647 8.5 432.693 8.5C432.75 8.5 432.784 8.53136 432.806 8.5732L439.385 16.7177C439.487 16.8327 439.498 16.9164 439.498 17C439.498 17.0836 439.487 17.1673 439.385 17.2823L432.806 25.4164C432.784 25.4686 432.75 25.5 432.693 25.5Z"
                fill="#E7AB9C"
              />
              <path
                d="M493.794 40C493.749 40 493.715 39.9686 493.692 39.9164L487.114 31.7823C487.011 31.6673 487 31.5836 487 31.5C487 31.4164 487.011 31.3327 487.114 31.2177L493.692 23.0732C493.715 23.0314 493.749 23 493.794 23C493.851 23 493.885 23.0314 493.908 23.0732L500.486 31.2177C500.589 31.3327 500.6 31.4164 500.6 31.5C500.6 31.5836 500.589 31.6673 500.486 31.7823L493.908 39.9164C493.885 39.9686 493.851 40 493.794 40Z"
                fill="#E7AB9C"
              />
              <path
                d="M246.794 40C246.749 40 246.715 39.9686 246.692 39.9164L240.114 31.7823C240.011 31.6673 240 31.5836 240 31.5C240 31.4164 240.011 31.3327 240.114 31.2177L246.692 23.0732C246.715 23.0314 246.749 23 246.794 23C246.851 23 246.885 23.0314 246.908 23.0732L253.486 31.2177C253.589 31.3327 253.6 31.4164 253.6 31.5C253.6 31.5836 253.589 31.6673 253.486 31.7823L246.908 39.9164C246.885 39.9686 246.851 40 246.794 40Z"
                fill="#E7AB9C"
              />
              <path
                d="M91.7943 50C91.7488 50 91.7148 49.9686 91.6921 49.9164L85.1136 41.7823C85.0113 41.6673 85 41.5836 85 41.5C85 41.4164 85.0113 41.3327 85.1136 41.2177L91.6921 33.0732C91.7148 33.0314 91.7488 33 91.7943 33C91.8511 33 91.8852 33.0314 91.9079 33.0732L98.4864 41.2177C98.5886 41.3327 98.6 41.4164 98.6 41.5C98.6 41.5836 98.5886 41.6673 98.4864 41.7823L91.9079 49.9164C91.8852 49.9686 91.8511 50 91.7943 50Z"
                fill="#E7AB9C"
              />
              <path
                d="M355.794 17C355.749 17 355.715 16.9686 355.692 16.9164L349.114 8.78228C349.011 8.66728 349 8.58364 349 8.5C349 8.41636 349.011 8.33272 349.114 8.21772L355.692 0.0732025C355.715 0.0313598 355.749 0 355.794 0C355.851 0 355.885 0.0313598 355.908 0.0732025L362.486 8.21772C362.589 8.33272 362.6 8.41636 362.6 8.5C362.6 8.58364 362.589 8.66728 362.486 8.78228L355.908 16.9164C355.885 16.9686 355.851 17 355.794 17Z"
                fill="#E7AB9C"
              />
              <path
                d="M355.794 17C355.749 17 355.715 16.9686 355.692 16.9164L349.114 8.78228C349.011 8.66728 349 8.58364 349 8.5C349 8.41636 349.011 8.33272 349.114 8.21772L355.692 0.0732025C355.715 0.0313598 355.749 0 355.794 0C355.851 0 355.885 0.0313598 355.908 0.0732025L362.486 8.21772C362.589 8.33272 362.6 8.41636 362.6 8.5C362.6 8.58364 362.589 8.66728 362.486 8.78228L355.908 16.9164C355.885 16.9686 355.851 17 355.794 17Z"
                fill="#E7AB9C"
              />
            </svg>
          </Button>
          <Button
            id="backBtn720px"
            variant="secondary"
            className="hidden p-4 px-8  bg-[#f4f4f5]/40 720px:flex gap-2 hover:bg-[#f4f4f5]/80"
          >
            بازگشت
            <Undo2 />
          </Button>
          <Button
            id="backBtn"
            variant="secondary"
            className="flex p-2 px-4 bg-[#f4f4f5]/40 720px:hidden hover:bg-[#f4f4f5]/80"
          >
            <Undo2 />
          </Button>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col  h-full w-full max-w-[400px] min-w-[50%]  items-center  720px:justify-center space-y-12 pb-20"
          >
            <div
              id="logo"
              className=" 720px:hidden flex w-full max-w-[540px] h-[180px] 720px:h-fit p-8 mb-8 "
            >
              <svg viewBox="0 0 285 177" fill="none">
                <path
                  d="M230.732 160.065C230.372 160.065 230.103 159.799 229.923 159.356L177.898 90.4222C177.09 89.4476 177 88.7388 177 88.03C177 87.3212 177.09 86.6123 177.898 85.6377L229.923 16.6155C230.103 16.2609 230.372 15.9951 230.732 15.9951C231.181 15.9951 231.451 16.2609 231.63 16.6155L283.655 85.6377C284.463 86.6123 284.553 87.3212 284.553 88.03C284.553 88.7388 284.463 89.4476 283.655 90.4222L231.63 159.356C231.451 159.799 231.181 160.065 230.732 160.065Z"
                  fill="#5E2419"
                />
                <path
                  d="M53.7317 160.065C53.3721 160.065 53.1026 159.799 52.9232 159.356L0.898236 90.4222C0.0897076 89.4476 0 88.7388 0 88.03C0 87.3212 0.0897076 86.6123 0.898236 85.6377L52.9232 16.6155C53.1026 16.2609 53.3721 15.9951 53.7317 15.9951C54.181 15.9951 54.4505 16.2609 54.6303 16.6155L106.655 85.6377C107.463 86.6123 107.553 87.3212 107.553 88.03C107.553 88.7388 107.463 89.4476 106.655 90.4222L54.6303 159.356C54.4505 159.799 54.181 160.065 53.7317 160.065Z"
                  fill="#5E2419"
                />
                <path
                  d="M142.441 177C141.97 177 141.616 176.673 141.381 176.129L73.1776 91.439C72.1176 90.2417 72 89.3708 72 88.5C72 87.6291 72.1176 86.7583 73.1776 85.5609L141.381 0.762167C141.616 0.326511 141.97 0 142.441 0C143.03 0 143.383 0.326511 143.619 0.762167L211.822 85.5609C212.882 86.7583 213 87.6291 213 88.5C213 89.3708 212.882 90.2417 211.822 91.439L143.619 176.129C143.383 176.673 143.03 177 142.441 177Z"
                  fill="#E7AB9C"
                />
              </svg>
            </div>
            <div className="flex flex-col w-full h-fit justify-center items-center space-y-8 ">
              <div className="flex flex-col place-self-start  mb-12 ">
                <p className="font-black text-[2rem]">سالن رو</p>
                <p>“آراستگی، آسان‌تر از همیشه”</p>
              </div>
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row justify-between ">
                      <FormLabel className="text-black">{`${t(
                        "LoginPage.phone_number"
                      )}`}</FormLabel>
                      <FormMessage className="px-4 text-red-800 font-bold animate-pulse" />
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
                  <FormItem className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel className="text-black">{`${t(
                        "LoginPage.password"
                      )}`}</FormLabel>
                      <FormMessage className="px-4 text-red-800 underline underline-offset-4 " />
                    </div>

                    <FormControl>
                      <Input
                        className=""
                        //type={passwordType ? "password" : "text"}
                        placeholder={`${t("LoginPage.password")}`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* bg-SecondaryColor text-PrimaryColor-100 */}
            <Button
              className=" flex  w-full h-12 gap-2 bg-PrimaryColor-100 hover:bg-PrimaryColor-100/80 text-SecondaryColor "
              type="submit"
            >
              {`${t("LoginPage.login")}`}
              <LogIn />
            </Button>
          </form>
        </Form>
      </div>
      <div
        id="leftSide"
        className="relative hidden 720px:flex flex-col invisible 720px:visible 720px:h-full w-full  justify-center items-center p-4 overflow-hidden"
      >
        {/* <div id="lightBackground" className="fixed -z-10 top-0 right-0 left-0 bottom-0 bg-[linear-gradient(300deg,#5E241980,#E7AB9C80,#5E241980)] [background-size:180%_180%] animate-background-animation"></div> */}
        {/* <div id="lightBackground2" className="fixed -z-10 top-0 right-0 left-0 bottom-0 bg-[linear-gradient(300deg,#955B50,#E7AB9C80,#955B50)] [background-size:180%_180%] animate-background-animation"></div> */}
        {/* <div
        id="lightBackground2Smooth"
        className="absolute -z-10 top-0 right-0 left-0 bottom-0  bg-[linear-gradient(300deg,#905549,#9C6155,#A96E60,#B57A6C,#C28678,#CE9284,#DB9F90,#E7AB9C90,#DB9F90,#CE9284,#C28678,#B57A6C,#A96E60,#9C6155,#905549)] [background-size:180%_180%] animate-background-animation"
      ></div> */}
        {/* <div
        id="lightBackground2Lighter"
        className="fixed -z-10 top-0 right-0 left-0 bottom-0 opacity-70 bg-[linear-gradient(300deg,#905549,#9C6155,#A96E60,#B57A6C,#C28678,#CE9284,#DB9F90,#E7AB9CD0,#DB9F90,#CE9284,#C28678,#B57A6C,#A96E60,#9C6155,#905549)] [background-size:180%_180%] animate-background-animation"
      ></div> */}
        {/* <div
        id="lightBackground3Smooth"
        className="fixed -z-10 top-0 right-0 left-0 bottom-0  bg-[linear-gradient(300deg,#905549,#9C6155,#A96E60,#B57A6C,#C28678,#CE9284C0,#DB9F90B0,#E7AB9C80,#DB9F90B0,#CE9284C0,#C28678,#B57A6C,#A96E60,#9C6155,#905549)] [background-size:180%_180%] animate-background-animation"
      ></div> */}
        <div
          id="background 1"
          className="absolute flex items-center justify-center  z-[1] top-0 right-0 left-0 bottom-0 opacity-60 m-16 rounded-[1rem] overflow-hidden"
        >
          <svg
            width="980"
            height="1080"
            viewBox="0 0 980 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_425_1353)">
              <path
                d="M515.798 540L567.398 540L515.798 486L515.798 540Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 486L515.798 486L567.398 540L567.398 486Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 540L618.898 486L567.398 486L618.898 540Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 486L464.197 540L515.797 540L515.797 486Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 486L464.197 540L515.797 486L464.197 486Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 540L618.898 540L567.398 486L567.398 540Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 432L515.798 486L567.398 486L567.398 432Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 432L515.798 432L515.798 486L567.398 432Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 486L464.197 432L464.197 486L515.797 486Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 594L567.398 540L515.798 540L515.798 594Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 594L567.398 594L567.398 540L515.798 594Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 540L618.898 594L618.898 540L567.398 540Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 432L567.398 432L567.398 486L618.898 432Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 594L515.797 594L515.797 540L464.197 594Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 486L618.898 432L567.398 486L618.898 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 432L464.197 432L515.797 486L515.797 432Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 594L618.898 594L567.398 540L567.398 594Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 540L464.197 594L515.797 540L464.197 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 486L412.603 540L464.203 540L412.603 486Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 540L412.603 594L464.203 594L464.203 540Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 486L464.203 540L464.203 486L412.603 486Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 594L670.5 540L618.9 540L670.5 594Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 540L670.5 486L618.9 486L618.9 540Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 486L670.5 432L618.9 432L618.9 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 540L670.5 486L618.9 540L670.5 540Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 432L412.603 486L464.203 486L412.603 432Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 378L515.798 432L567.398 432L567.398 378Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 378L515.798 378L515.798 432L567.398 378Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 432L464.197 378L464.197 432L515.797 432Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 648L515.797 648L515.797 594L464.197 648Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 594L567.398 648L567.398 594L515.798 594Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 594L618.898 648L618.898 594L567.398 594Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 378L567.398 378L567.398 432L618.898 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 648L567.398 648L515.798 594L515.798 648Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 378L412.603 432L464.203 432L412.603 378Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 432L412.603 432L464.203 486L464.203 432Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 540L412.603 594L464.203 540L412.603 540Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 594L464.197 648L515.797 594L464.197 594Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 486L670.5 432L618.9 486L670.5 486Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 432L618.898 378L567.398 432L618.898 432Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 648L670.5 594L618.9 594L670.5 648Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 594L670.5 594L618.9 540L618.9 594Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 378L618.9 378L618.9 432L670.5 378Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 648L464.203 648L464.203 594L412.603 648Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 648L618.898 648L567.398 594L567.398 648Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 378L464.197 378L515.797 432L515.797 378Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 540L722.102 486L670.502 486L670.502 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 486L722.102 486L670.502 432L670.502 486Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 432L670.5 378L618.9 432L670.5 432Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 540L722.102 486L670.502 540L722.102 540Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 594L722.102 540L670.502 594L722.102 594Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 594L722.102 540L670.502 540L670.502 594Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 432L361.102 486L412.602 486L412.602 432Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 486L361.102 486L412.602 540L412.602 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 540L361.102 540L412.602 594L412.602 540Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 432L361.102 486L412.602 432L361.102 432Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 486L361.102 540L412.602 540L361.102 486Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 594L412.603 648L464.203 594L412.603 594Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 648L670.5 648L618.9 594L618.9 648Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 594L412.602 648L412.602 594L361.102 594Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 378L412.603 378L464.203 432L464.203 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 432L670.502 378L670.502 432L722.102 432Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 702L567.398 702L567.398 648L515.798 702Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 648L618.898 702L618.898 648L567.398 648Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 648L670.5 702L670.5 648L618.9 648Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 702L567.398 648L515.798 648L515.798 702Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 702L515.797 648L464.197 702L515.797 702Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 702L515.797 648L464.197 648L464.197 702Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 324L515.798 324L515.798 378L567.398 324Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 378L464.197 324L464.197 378L515.797 378Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 378L412.603 324L412.603 378L464.203 378Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 324L515.798 378L567.398 378L567.398 324Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 324L567.398 378L618.898 324L567.398 324Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 324L567.398 378L618.898 378L618.898 324Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 648L722.102 594L670.502 594L670.502 648Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 486L722.102 432L670.502 432L722.102 486Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 540L361.102 594L412.602 594L361.102 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 378L361.102 432L412.602 432L412.602 378Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 702L618.898 702L567.398 648L567.398 702Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 648L722.102 648L722.102 594L670.502 648Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 702L464.203 648L412.603 648L412.603 702Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 702L464.203 702L464.203 648L412.603 702Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 324L618.9 378L670.5 378L670.5 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 324L618.9 324L618.9 378L670.5 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 324L464.197 324L515.797 378L515.797 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 378L361.102 378L361.102 432L412.602 378Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 702L722.102 648L670.502 648L670.502 702Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 432L722.102 378L670.502 378L722.102 432Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 324L361.102 378L412.602 378L412.602 324Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 594L361.102 648L412.602 648L361.102 594Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 648L412.602 702L412.602 648L361.102 648Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 702L670.5 702L618.9 648L618.9 702Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 378L670.502 324L670.502 378L722.102 378Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 324L412.603 324L464.203 378L464.203 324Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 594L773.703 540L722.103 540L773.703 594Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 540L773.703 486L722.103 486L722.103 540Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 486L773.703 432L722.103 432L722.103 486Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 432L773.703 378L722.103 378L722.103 432Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 594L722.103 540L722.103 594L773.703 594Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 540L773.703 486L722.103 540L773.703 540Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 432L309.502 486L361.102 486L309.502 432Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 486L309.502 540L361.102 540L361.102 486Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 540L309.502 594L361.102 594L361.102 540Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 594L309.502 648L361.102 648L361.102 594Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 432L361.102 486L361.102 432L309.502 432Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 486L309.502 540L361.102 486L309.502 486Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 756L567.398 756L567.398 702L515.798 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 702L618.898 756L618.898 702L567.398 702Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 702L670.5 756L670.5 702L618.9 702Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 756L567.398 702L515.798 702L515.798 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 756L515.797 702L464.197 756L515.797 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 270L515.798 270L515.798 324L567.398 270Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 324L464.197 270L464.197 324L515.797 324Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 324L412.603 270L412.603 324L464.203 324Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 270L515.798 324L567.398 324L567.398 270Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 270L567.398 324L618.898 270L567.398 270Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 756L515.797 702L464.197 702L464.197 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 270L567.398 324L618.898 324L618.898 270Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 486L773.703 432L722.103 486L773.703 486Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 648L773.703 594L722.103 594L773.703 648Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 540L309.502 594L361.102 540L309.502 540Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 378L309.502 432L361.102 432L309.502 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 756L618.898 756L567.398 702L567.398 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 702L722.102 702L722.102 648L670.502 702Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 270L618.9 324L670.5 324L670.5 270Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 270L618.9 270L618.9 324L670.5 270Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 756L464.203 756L464.203 702L412.603 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 756L464.203 702L412.603 702L412.603 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 270L464.197 270L515.797 324L515.797 270Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 324L361.102 324L361.102 378L412.602 324Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 756L722.102 702L670.502 702L670.502 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 648L773.703 648L722.103 594L722.103 648Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 324L722.103 324L722.103 378L773.703 324Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 378L722.102 324L670.502 324L722.102 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 702L361.102 702L361.102 648L309.502 702Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 648L361.102 702L412.602 702L361.102 648Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 270L361.102 324L412.602 324L412.602 270Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 378L309.502 378L361.102 432L361.102 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 702L773.703 648L722.103 648L773.703 702Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 432L773.703 378L722.103 432L773.703 432Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 594L309.502 648L361.102 594L309.502 594Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 324L309.502 378L361.102 378L309.502 324Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 756L670.5 756L618.9 702L618.9 756Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 324L670.502 270L670.502 324L722.102 324Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 702L412.602 756L412.602 702L361.102 702Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 270L412.603 270L464.203 324L464.203 270Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 594L825.297 540L773.697 540L825.297 594Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 540L825.297 486L773.697 486L773.697 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 486L825.297 432L773.697 432L773.697 486Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 432L825.297 378L773.697 378L773.697 432Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 594L773.697 540L773.697 594L825.297 594Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 540L825.297 486L773.697 540L825.297 540Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 486L257.9 540L309.5 540L257.9 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 540L257.9 594L309.5 594L309.5 540Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 594L257.9 648L309.5 648L309.5 594Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 486L309.5 540L309.5 486L257.9 486Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 486L309.5 486L257.9 432L257.9 486Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 432L309.5 486L309.5 432L257.9 432Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 648L825.297 594L773.697 594L825.297 648Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 486L825.297 432L773.697 486L825.297 486Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 378L257.9 432L309.5 432L257.9 378Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 540L257.9 594L309.5 540L257.9 540Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 810L515.797 756L464.197 756L464.197 810Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 810L515.797 810L515.797 756L464.197 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 756L567.398 810L567.398 756L515.798 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 756L618.898 810L618.898 756L567.398 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 756L670.5 810L670.5 756L618.9 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 216L515.798 216L515.798 270L567.398 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 270L464.197 216L464.197 270L515.797 270Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 270L412.603 216L412.603 270L464.203 270Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 216L515.798 270L567.398 270L567.398 216Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 216L567.398 270L618.898 216L567.398 216Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 216L567.398 270L618.898 270L618.898 216Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 810L567.398 810L515.798 756L515.798 810Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 702L773.703 702L722.103 648L722.103 702Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 648L825.297 648L773.697 594L773.697 648Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 756L773.703 702L722.103 702L773.703 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 378L773.703 324L722.103 378L773.703 378Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 324L722.102 270L670.502 270L722.102 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 324L773.697 324L773.697 378L825.297 324Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 648L309.502 702L361.102 648L309.502 648Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 702L361.102 756L412.602 756L361.102 702Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 810L464.203 810L464.203 756L412.603 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 702L309.5 702L309.5 648L257.9 702Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 270L309.502 324L361.102 324L309.502 270Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 324L309.502 324L361.102 378L361.102 324Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 378L257.9 378L309.5 432L309.5 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 270L361.102 324L412.602 270L361.102 270Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 810L722.102 756L670.502 756L670.502 810Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 756L722.102 756L722.102 702L670.502 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 270L722.103 270L722.103 324L773.703 270Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 216L618.9 216L618.9 270L670.5 216Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 756L361.102 756L361.102 702L309.502 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 216L361.102 270L412.602 270L412.602 216Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 810L618.898 810L567.398 756L567.398 810Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 216L618.9 270L670.5 270L670.5 216Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 810L464.203 756L412.603 756L412.603 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 216L464.197 216L515.797 270L515.797 216Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 432L825.297 378L773.697 432L825.297 432Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 702L825.297 648L773.697 648L825.297 702Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 594L257.9 648L309.5 594L257.9 594Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 324L257.9 378L309.5 378L257.9 324Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 270L670.502 216L670.502 270L722.102 270Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 756L412.602 810L412.602 756L361.102 756Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 216L412.603 216L464.203 270L464.203 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 810L670.5 810L618.9 756L618.9 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 324L773.703 270L722.103 324L773.703 324Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 270L722.102 216L670.502 216L722.102 270Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 270L773.697 270L773.697 324L825.297 270Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 756L773.703 756L722.103 702L722.103 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 702L825.297 702L773.697 648L773.697 702Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 810L773.703 756L722.103 756L773.703 810Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 270L309.502 270L361.102 324L361.102 270Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 324L257.9 324L309.5 378L309.5 324Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 216L309.502 270L361.102 270L309.502 216Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 756L309.5 756L309.5 702L257.9 756Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 702L309.502 756L361.102 702L309.502 702Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 756L361.102 810L412.602 810L361.102 756Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 432L257.898 486L257.898 432L206.298 432Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 432L206.298 486L257.898 486L206.298 432Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 486L206.298 540L257.898 540L257.898 486Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 540L206.298 594L257.898 594L257.898 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 594L206.298 648L257.898 648L257.898 594Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 486L206.298 540L257.898 486L206.298 486Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 594L876.797 540L825.297 540L825.297 594Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 540L876.797 540L825.297 486L825.297 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 486L876.797 486L825.297 432L825.297 486Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 432L876.797 432L825.297 378L825.297 432Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 594L876.797 540L825.297 594L876.797 594Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 540L876.797 486L825.297 486L876.797 540Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 378L825.297 324L825.297 378L876.797 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 378L825.297 324L773.697 378L825.297 378Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 756L825.297 702L773.697 702L825.297 756Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 648L876.797 594L825.297 594L825.297 648Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 270L257.9 324L309.5 324L257.9 270Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 378L206.298 432L257.898 432L206.298 378Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 648L257.9 702L309.5 648L257.9 648Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 702L257.898 702L257.898 648L206.298 702Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 378L257.898 432L257.898 378L206.298 378Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 486L876.797 432L825.297 432L876.797 486Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 540L206.298 594L257.898 540L206.298 540Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 648L876.797 594L825.297 648L876.797 648Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 810L722.102 810L722.102 756L670.502 810Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 216L722.103 216L722.103 270L773.703 216Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 810L361.102 810L361.102 756L309.502 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 216L361.102 216L361.102 270L412.602 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 864L567.398 864L567.398 810L515.798 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 810L618.898 864L618.898 810L567.398 810Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 810L670.5 864L670.5 810L618.9 810Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 810L670.502 864L722.102 810L670.502 810Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 864L567.398 810L515.798 810L515.798 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 864L515.797 810L464.197 864L515.797 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 810L464.197 810L464.197 864L515.797 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 864L464.203 810L412.603 864L464.203 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 162L515.798 162L515.798 216L567.398 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 216L464.197 162L464.197 216L515.797 216Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 216L412.603 162L412.603 216L464.203 216Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 216L412.602 162L361.102 216L412.602 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 162L515.798 216L567.398 216L567.398 162Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 162L567.398 216L618.898 162L567.398 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 216L618.898 216L618.898 162L567.398 216Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 162L618.9 216L670.5 162L618.9 162Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 864L618.898 864L567.398 810L567.398 864Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 162L618.9 216L670.5 216L670.5 162Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 864L464.203 810L412.603 810L412.603 864Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 162L464.197 162L515.797 216L515.797 162Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 594L206.298 648L257.898 594L206.298 594Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 702L876.797 648L825.297 648L825.297 702Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 432L876.797 378L825.297 378L876.797 432Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 324L206.298 378L257.898 378L206.298 324Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 756L825.297 756L773.697 702L773.697 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 702L876.797 702L876.797 648L825.297 702Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 810L825.297 756L773.697 756L825.297 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 324L825.297 270L773.697 324L825.297 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 270L773.703 216L722.103 270L773.703 270Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 324L825.297 270L825.297 324L876.797 324Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 216L257.9 270L309.5 270L257.9 216Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 270L257.9 270L309.5 324L309.5 270Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 324L206.298 324L257.898 378L257.898 324Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 702L257.9 756L309.5 702L257.9 702Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 756L309.502 810L361.102 756L309.502 756Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 756L257.898 756L257.898 702L206.298 756Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 810L412.602 864L412.602 810L361.102 810Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 864L412.602 864L361.102 810L361.102 864Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 864L670.5 864L618.9 810L618.9 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 810L773.703 810L722.103 756L722.103 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 162L670.502 162L722.102 216L722.102 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 216L670.502 162L670.502 216L722.102 216Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 162L412.603 162L464.203 216L464.203 162Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 216L309.502 216L361.102 270L361.102 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 216L773.697 216L773.697 270L825.297 216Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 864L773.703 810L722.103 810L773.703 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 810L309.5 810L309.5 756L257.9 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 162L309.502 216L361.102 216L309.502 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 378L876.797 324L825.297 324L876.797 378Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 270L206.298 324L257.898 324L206.298 270Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 648L206.298 702L257.898 648L206.298 648Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 756L876.797 702L825.297 702L825.297 756Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 432L206.297 486L206.297 432L154.697 432Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 432L154.697 486L206.297 486L154.697 432Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 486L154.697 540L206.297 540L206.297 486Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 540L154.697 594L206.297 594L206.297 540Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 594L154.697 648L206.297 648L206.297 594Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 648L154.697 702L206.297 702L206.297 648Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 432L206.297 432L154.697 378L154.697 432Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 486L928.398 486L876.798 432L876.798 486Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 432L928.398 432L876.798 378L876.798 432Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 378L928.398 378L876.798 324L876.798 378Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 540L928.398 486L876.798 486L876.798 540Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 540L928.398 486L876.798 540L928.398 540Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 540L876.798 540L876.798 594L928.398 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 540L876.798 594L928.398 594L928.398 540Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 594L876.798 594L876.798 648L928.398 594Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 486L154.697 540L206.297 486L154.697 486Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 162L722.103 162L722.103 216L773.703 162Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 864L722.102 864L722.102 810L670.502 864Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 162L361.102 162L361.102 216L412.602 162Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 864L361.102 864L361.102 810L309.502 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 378L206.297 432L206.297 378L154.697 378Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 540L154.697 594L206.297 540L154.697 540Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 486L928.398 432L876.798 432L928.398 486Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 648L928.398 594L876.798 648L928.398 648Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 108L567.398 162L618.898 162L618.898 108Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 108L567.398 108L567.398 162L618.898 108Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 162L515.798 108L515.798 162L567.398 162Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 162L464.197 108L464.197 162L515.797 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 162L412.603 108L412.603 162L464.203 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 162L412.602 108L361.102 162L412.602 162Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 108L618.9 162L670.5 108L618.9 108Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 108L515.798 108L567.398 162L567.398 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 864L567.398 918L567.398 864L515.798 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 864L618.898 918L618.898 864L567.398 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 864L670.5 918L670.5 864L618.9 864Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 864L670.502 918L722.102 864L670.502 864Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 918L515.797 918L515.797 864L464.197 918Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 918L515.797 864L464.197 864L464.197 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 918L464.203 864L412.603 918L464.203 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 918L567.398 918L515.798 864L515.798 918Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 432L928.398 378L876.798 378L928.398 432Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 702L928.398 648L876.798 648L876.798 702Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 324L154.697 378L206.297 378L154.697 324Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 594L154.697 648L206.297 594L154.697 594Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 756L876.797 756L876.797 702L825.297 756Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 702L928.398 702L928.398 648L876.798 702Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 810L825.297 810L773.697 756L773.697 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 864L825.297 810L773.697 810L825.297 864Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 270L825.297 216L773.697 270L825.297 270Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 216L773.703 162L722.103 216L773.703 216Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 270L825.297 216L825.297 270L876.797 270Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 270L825.297 270L876.797 324L876.797 270Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 756L257.898 702L206.298 702L206.298 756Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 810L257.898 810L257.898 756L206.298 810Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 756L257.9 810L309.5 756L257.9 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 810L309.502 864L361.102 810L309.502 810Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 216L257.9 216L309.5 270L309.5 216Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 270L206.298 270L257.898 324L257.898 270Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 324L154.697 324L206.297 378L206.297 324Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 162L257.9 216L309.5 216L257.9 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 108L464.197 108L515.797 162L515.797 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 108L618.9 162L670.5 162L670.5 108Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 918L618.898 918L567.398 864L567.398 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 918L464.203 864L412.603 864L412.603 918Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 216L206.298 270L257.898 270L206.298 216Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 324L876.798 270L876.798 324L928.398 324Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 810L876.797 756L825.297 756L825.297 810Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 756L206.297 756L206.297 702L154.697 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 162L773.697 162L773.697 216L825.297 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 162L670.502 108L670.502 162L722.102 162Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 918L773.703 864L722.103 864L773.703 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 864L773.703 864L722.103 810L722.103 864Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 162L309.502 162L361.102 216L361.102 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 108L309.502 162L361.102 162L309.502 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 864L309.5 864L309.5 810L257.9 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 864L412.602 918L412.602 864L361.102 864Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 918L412.602 918L361.102 864L361.102 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 918L670.5 918L618.9 864L618.9 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 108L412.603 108L464.203 162L464.203 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 108L670.502 108L722.102 162L722.102 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 756L928.398 702L876.798 702L876.798 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 270L154.697 324L206.297 324L154.697 270Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 648L154.697 702L206.297 648L154.697 648Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 378L928.398 324L876.798 324L928.398 378Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 486L980 486L928.4 432L928.4 486Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 432L980 432L928.4 378L928.4 432Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 378L980 378L928.4 324L928.4 378Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 540L980 486L928.4 486L928.4 540Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 540L980 486L928.4 540L980 540Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 540L928.4 540L928.4 594L980 540Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 540L928.4 594L980 594L980 540Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 594L928.4 594L928.4 648L980 594Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 486L103.203 540L154.703 540L103.203 486Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 540L103.203 594L154.703 594L154.703 540Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 594L103.203 648L154.703 648L154.703 594Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 648L103.203 702L154.703 702L154.703 648Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 486L154.703 540L154.703 486L103.203 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 486L154.703 486L103.203 432L103.203 486Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 486L154.703 432L103.203 432L154.703 486Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 432L154.703 432L103.203 378L103.203 432Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 918L722.102 918L722.102 864L670.502 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 108L722.103 108L722.103 162L773.703 108Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 918L361.102 918L361.102 864L309.502 918Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 108L361.102 108L361.102 162L412.602 108Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 486L980 432L928.4 432L980 486Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 378L154.703 432L154.703 378L103.203 378Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 648L980 594L928.4 648L980 648Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 540L103.203 594L154.703 540L103.203 540Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 810L876.797 810L876.797 756L825.297 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 756L928.398 756L928.398 702L876.798 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 864L876.797 810L825.297 810L825.297 864Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 864L773.697 810L773.697 864L825.297 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 216L825.297 162L773.697 216L825.297 216Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 162L773.703 108L722.103 162L773.703 162Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 270L876.797 216L825.297 216L876.797 270Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 270L876.798 216L876.798 270L928.398 270Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 162L309.5 216L309.5 162L257.9 162Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 162L206.298 216L257.898 216L206.298 162Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 216L206.298 216L257.898 270L257.898 216Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 270L154.697 270L206.297 324L206.297 270Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 756L206.298 810L257.898 756L206.298 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 810L257.9 864L309.5 810L257.9 810Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 864L309.502 918L361.102 864L309.502 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 810L206.297 810L206.297 756L154.697 810Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 918L825.297 864L773.697 864L825.297 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 216L825.297 162L825.297 216L876.797 216Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 864L257.898 864L257.898 810L206.298 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 108L257.9 162L309.5 162L257.9 108Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 810L928.398 756L876.798 756L876.798 810Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 702L980 648L928.4 648L928.4 702Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 324L928.4 270L928.4 324L980 324Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 324L928.398 270L876.798 270L928.398 324Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 702L154.697 756L206.297 702L154.697 702Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 756L154.703 756L154.703 702L103.203 756Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 216L154.697 270L206.297 270L154.697 216Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 324L103.203 378L154.703 378L103.203 324Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 324L154.703 378L154.703 324L103.203 324Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 432L980 378L928.4 378L980 432Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 594L103.203 648L154.703 594L103.203 594Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 702L980 648L928.4 702L980 702Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 972L567.398 972L567.398 918L515.798 972Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 918L618.898 972L618.898 918L567.398 918Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 918L670.5 972L670.5 918L618.9 918Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 918L670.502 972L722.102 918L670.502 918Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 972L567.398 918L515.798 918L515.798 972Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 972L515.797 918L464.197 972L515.797 972Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 918L464.197 918L464.197 972L515.797 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 972L464.203 918L412.603 972L464.203 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 108L464.197 54L464.197 108L515.797 108Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 108L412.603 54L412.603 108L464.203 108Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 108L412.602 54L361.102 108L412.602 108Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 54L515.798 54L515.798 108L567.398 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 54L515.798 108L567.398 108L567.398 54Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 54L567.398 108L618.898 54L567.398 54Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 108L618.898 108L618.898 54L567.398 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 54L618.9 108L670.5 54L618.9 54Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 54L464.197 54L515.797 108L515.797 54Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 972L618.898 972L567.398 918L567.398 972Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 54L618.9 108L670.5 108L670.5 54Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 972L464.203 918L412.603 918L412.603 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 108L773.697 108L773.697 162L825.297 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 108L670.502 54L670.502 108L722.102 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 972L773.703 918L722.103 918L773.703 972Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 918L773.703 918L722.103 864L722.103 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 54L309.502 108L361.102 108L309.502 54Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 108L309.502 108L361.102 162L361.102 108Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 918L309.5 918L309.5 864L257.9 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 918L412.602 972L412.602 918L361.102 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 972L670.5 972L618.9 918L618.9 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 54L412.603 54L464.203 108L464.203 54Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 54L670.502 54L722.102 108L722.102 54Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 972L412.602 972L361.102 918L361.102 972Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 648L103.203 702L154.703 648L103.203 648Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 378L980 324L928.4 324L980 378Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 756L980 702L928.4 702L928.4 756Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 270L103.203 324L154.703 324L103.203 270Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 810L206.297 756L154.697 756L154.697 810Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 864L206.297 864L206.297 810L154.697 864Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 810L206.298 864L257.898 810L206.298 810Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 864L257.9 918L309.5 864L257.9 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 162L206.298 162L257.898 216L257.898 162Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 216L154.697 216L206.297 270L206.297 216Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 270L103.203 270L154.703 324L154.703 270Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 108L206.298 162L257.898 162L206.298 108Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 810L928.398 810L928.398 756L876.798 810Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 756L980 756L980 702L928.4 756Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 864L876.797 864L876.797 810L825.297 864Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 918L876.797 864L825.297 864L825.297 918Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 216L876.797 162L825.297 162L876.797 216Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 162L825.297 108L773.697 162L825.297 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 216L876.798 162L876.798 216L928.398 216Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 216L876.798 216L928.398 270L928.398 216Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 162L154.697 216L206.297 216L154.697 162Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 864L928.398 810L876.798 810L876.798 864Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 810L154.703 810L154.703 756L103.203 810Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 270L928.4 216L928.4 270L980 270Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 432L103.203 432L51.6031 378L51.6031 432Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 432L103.203 486L103.203 432L51.6031 432Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 432L51.6031 486L103.203 486L51.6031 432Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 486L51.6031 540L103.203 540L103.203 486Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 540L51.6031 594L103.203 594L103.203 540Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 594L51.6031 648L103.203 648L103.203 594Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 648L51.6031 702L103.203 702L103.203 648Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 486L51.6031 540L103.203 486L51.6031 486Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 972L722.102 972L722.102 918L670.502 972Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 918L825.297 918L773.697 864L773.697 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 54L722.103 108L773.703 108L773.703 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 54L722.103 54L722.103 108L773.703 54Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 54L361.102 54L361.102 108L412.602 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 108L257.9 108L309.5 162L309.5 108Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 972L361.102 972L361.102 918L309.502 972Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 972L361.102 918L309.502 918L309.502 972Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 972L825.297 918L773.697 918L825.297 972Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 162L825.297 108L825.297 162L876.797 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 54L257.9 108L309.5 108L257.9 54Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 918L257.898 918L257.898 864L206.298 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 540L51.6031 594L103.203 540L51.6031 540Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 378L103.203 432L103.203 378L51.6031 378Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 756L103.203 756L103.203 702L51.6031 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 702L103.203 756L154.703 702L103.203 702Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 216L103.203 270L154.703 270L103.203 216Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 324L51.6031 378L103.203 378L51.6031 324Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 324L980 270L928.4 270L980 324Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 810L980 756L928.4 756L928.4 810Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 324L103.203 378L103.203 324L51.6031 324Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 594L51.6031 648L103.203 594L51.6031 594Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 0L567.398 54L618.898 54L618.898 0Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.898 0L567.398 -2.25114e-06L567.398 54L618.898 0Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 54L515.798 -2.25551e-06L515.798 54L567.398 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 54L464.197 -2.25551e-06L464.197 54L515.797 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 54L412.603 -2.25551e-06L412.603 54L464.203 54Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 54L412.602 0L361.102 54L412.602 54Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 -2.25551e-06L618.9 54L670.5 0L618.9 -2.25551e-06Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 972L567.398 1026L567.398 972L515.798 972Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 972L618.898 1026L618.898 972L567.398 972Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 972L670.5 1026L670.5 972L618.9 972Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 972L670.502 1026L722.102 972L670.502 972Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 1026L515.797 1026L515.797 972L464.197 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 1026L515.797 972L464.197 972L464.197 1026Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 1026L464.203 972L412.603 1026L464.203 1026Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 1026L567.398 1026L515.798 972L515.798 1026Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 0L515.798 -2.25551e-06L567.398 54L567.398 0Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 972L309.5 972L309.5 918L257.9 972Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.603 1026L464.203 972L412.603 972L412.603 1026Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 972L773.703 972L722.103 918L722.103 972Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 1026L773.703 972L722.103 972L773.703 1026Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 -2.25551e-06L309.502 54L361.102 54L309.502 -2.25551e-06Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 54L309.502 54L361.102 108L361.102 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 54L773.697 54L773.697 108L825.297 54Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.5 0L618.9 54L670.5 54L670.5 0Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.797 0L464.197 -2.25551e-06L515.797 54L515.797 0Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 1026L618.898 1026L567.398 972L567.398 1026Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 1026L412.602 972L361.102 972L412.602 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 -2.25551e-06L670.502 54L722.102 54L670.502 -2.25551e-06Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 864L928.398 864L928.398 810L876.798 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 810L980 810L980 756L928.4 810Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 918L928.398 864L876.798 864L876.798 918Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 918L876.797 864L825.297 918L876.797 918Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 864L154.703 864L154.703 810L103.203 864Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 810L154.697 864L206.297 810L154.697 810Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 864L206.298 918L257.898 864L206.298 864Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 918L257.9 972L309.5 918L257.9 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 162L876.797 108L825.297 108L876.797 162Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 108L825.297 54L773.697 108L825.297 108Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 216L928.398 162L876.798 162L928.398 216Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 216L928.4 162L928.4 216L980 216Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 162L154.697 162L206.297 216L206.297 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 216L103.203 216L154.703 270L154.703 216Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 108L154.697 162L206.297 162L154.697 108Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 108L257.898 162L257.898 108L206.298 108Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 648L51.6031 702L103.203 648L51.6031 648Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 756L103.203 810L154.703 756L103.203 756Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 270L103.203 324L103.203 270L51.6031 270Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 270L51.6031 324L103.203 324L51.6031 270Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 918L206.297 918L206.297 864L154.697 918Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 54L206.298 108L257.898 108L206.298 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 162L876.798 108L876.798 162L928.398 162Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 972L876.797 918L825.297 918L825.297 972Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.102 0L670.502 -2.25551e-06L722.102 54L722.102 0Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 1026L412.602 1026L361.102 972L361.102 1026Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 1026L670.5 1026L618.9 972L618.9 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 0L412.603 -2.25551e-06L464.203 54L464.203 0Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 270L980 216L928.4 216L980 270Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 864L980 810L928.4 810L928.4 864Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 810L103.203 810L103.203 756L51.6031 810Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 162L103.203 216L154.703 216L103.203 162Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 108L825.297 54L825.297 108L876.797 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 0L722.103 -2.25551e-06L722.103 54L773.703 0Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1026L825.297 972L773.697 972L825.297 1026Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 972L825.297 972L773.697 918L773.697 972Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 972L257.898 972L257.898 918L206.298 972Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 1026L361.102 1026L361.102 972L309.502 1026Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 -2.25551e-06L257.9 54L309.5 54L257.9 -2.25551e-06Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 54L257.9 54L309.5 108L309.5 54Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 540L0.00158455 594L51.6016 594L51.6016 540Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 594L0.00158455 648L51.6016 648L51.6016 594Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 648L0.00158455 702L51.6016 702L51.6016 648Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 486L0.00158455 540L51.6016 540L0.00158691 486Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 486L51.6016 540L51.6016 486L0.00158691 486Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 486L51.6016 486L0.00158691 432L0.00158455 486Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 486L51.6016 432L0.00158691 432L51.6016 486Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 432L51.6016 432L0.00158691 378L0.00158455 432Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.703 0L722.103 54L773.703 54L773.703 0Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 1026L722.102 1026L722.102 972L670.502 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 1026L361.102 972L309.502 972L309.502 1026Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 0L361.102 -2.25114e-06L361.102 54L412.602 0Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 756L51.6016 756L51.6016 702L0.00158455 756Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 702L51.6031 756L103.203 702L51.6031 702Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 216L51.6031 270L103.203 270L51.6031 216Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 378L51.6016 432L51.6016 378L0.00158691 378Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 540L0.00158455 594L51.6016 540L0.00158691 540Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 378L51.6016 378L0.00158691 324L0.00158455 378Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 324L51.6016 378L51.6016 324L0.00158691 324Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 594L0.00158455 648L51.6016 594L0.00158691 594Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 918L928.398 918L928.398 864L876.798 918Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 864L980 864L980 810L928.4 864Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 972L928.398 918L876.798 918L876.798 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 864L154.703 810L103.203 810L103.203 864Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 918L154.703 918L154.703 864L103.203 918Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 864L154.697 918L206.297 864L154.697 864Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 918L206.298 972L257.898 918L206.298 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 108L876.797 54L825.297 54L876.797 108Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 162L928.398 108L876.798 108L928.398 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 162L928.4 108L928.4 162L980 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 54L154.697 108L206.297 108L154.697 54Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 108L154.697 108L206.297 162L206.297 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 162L103.203 162L154.703 216L154.703 162Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 216L51.6031 216L103.203 270L103.203 216Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 864L103.203 864L103.203 810L51.6031 864Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 216L980 162L928.4 162L980 216Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 108L103.203 162L154.703 162L103.203 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 918L980 864L928.4 864L928.4 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 0L773.697 -2.25551e-06L773.697 54L825.297 0Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 0L773.697 54L825.297 54L825.297 0Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 1026L309.5 972L257.9 972L257.9 1026Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 1026L309.5 1026L309.5 972L257.9 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 1026L773.703 1026L722.103 972L722.103 1026Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 972L876.797 972L876.797 918L825.297 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 0L309.502 -2.25551e-06L361.102 54L361.102 0Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 54L206.298 54L257.898 108L257.898 54Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 1026L567.398 1080L567.398 1026L515.798 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 1026L618.898 1080L618.898 1026L567.398 1026Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 1026L670.5 1080L670.5 1026L618.9 1026Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 1026L670.502 1080L722.102 1026L670.502 1026Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 1026L773.703 1080L773.703 1026L722.103 1026Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 1080L515.797 1080L515.797 1026L464.197 1080Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.197 1080L515.797 1026L464.197 1026L464.197 1080Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 1080L464.203 1026L412.603 1080L464.203 1080Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M464.203 1026L412.603 1026L412.603 1080L464.203 1026Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M515.798 1080L567.398 1080L515.798 1026L515.798 1080Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 972L206.297 972L206.297 918L154.697 972Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 -2.25551e-06L206.298 54L257.898 54L206.298 -2.25551e-06Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1026L876.797 972L825.297 972L825.297 1026Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 108L876.798 54L876.798 108L928.398 108Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M567.398 1080L618.898 1080L567.398 1026L567.398 1080Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M412.602 1080L412.602 1026L361.102 1026L412.602 1080Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 810L51.6016 810L51.6016 756L0.00158455 810Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 756L51.6031 810L103.203 756L51.6031 756Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 162L51.6031 216L103.203 216L51.6031 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 270L0.00158455 324L51.6016 324L0.00158691 270Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 270L51.6016 324L51.6016 270L0.00158691 270Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 648L0.00158455 702L51.6016 648L0.00158691 648Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M618.9 1080L670.5 1080L618.9 1026L618.9 1080Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M361.102 1080L412.602 1080L361.102 1026L361.102 1080Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 54L825.297 -2.25114e-06L825.297 54L876.797 54Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1080L825.297 1026L773.697 1026L825.297 1080Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 1026L825.297 1026L773.697 972L773.697 1026Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 1026L257.898 1026L257.898 972L206.298 1026Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 1080L361.102 1080L361.102 1026L309.502 1080Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.5 0L257.9 -2.25551e-06L309.5 54L309.5 0Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 216L0.00158455 270L51.6016 270L0.00158691 216Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 702L0.00158455 756L51.6016 702L0.00158691 702Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M670.502 1080L722.102 1080L722.102 1026L670.502 1080Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M309.502 1080L361.102 1026L309.502 1026L309.502 1080Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 864L103.203 810L51.6031 810L51.6031 864Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 918L103.203 918L103.203 864L51.6031 918Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 864L103.203 918L154.703 864L103.203 864Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 918L154.697 972L206.297 918L154.697 918Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 972L206.298 1026L257.898 972L206.298 972Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 108L103.203 108L154.703 162L154.703 108Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 162L51.6031 162L103.203 216L103.203 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 216L0.00158691 216L51.6016 270L51.6016 216Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 54L103.203 108L154.703 108L103.203 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 54L206.297 108L206.297 54L154.697 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 972L980 918L928.4 918L928.4 972Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 918L980 918L980 864L928.4 918Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 972L928.398 918L876.798 972L928.398 972Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 108L928.398 54L876.798 54L928.398 108Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.797 54L876.797 0L825.297 -2.25114e-06L876.797 54Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 162L980 108L928.4 108L980 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 108L928.4 54L928.4 108L980 108Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 1026L928.398 972L876.798 972L876.798 1026Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 -2.25551e-06L154.697 54L206.297 54L154.697 -2.25551e-06Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 972L154.703 972L154.703 918L103.203 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 864L51.6016 864L51.6016 810L0.00158455 864Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 108L51.6031 162L103.203 162L51.6031 108Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M722.103 1080L773.703 1080L722.103 1026L722.103 1080Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1026L876.797 1026L876.797 972L825.297 1026Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 1080L309.5 1026L257.9 1026L257.9 1080Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.9 1080L309.5 1080L309.5 1026L257.9 1080Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 1026L206.297 1026L206.297 972L154.697 1026Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M257.898 0L206.298 -2.25551e-06L257.898 54L257.898 0Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1080L876.797 1026L825.297 1026L825.297 1080Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 54L876.798 -2.25551e-06L876.798 54L928.398 54Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 162L0.00158455 216L51.6016 216L0.00158691 162Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 756L0.00158455 810L51.6016 756L0.00158691 756Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M773.697 1080L825.297 1080L773.697 1026L773.697 1080Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 1080L257.898 1080L257.898 1026L206.298 1080Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 972L980 972L980 918L928.4 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 1026L980 972L928.4 972L928.4 1026Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 1026L928.398 972L876.798 1026L928.398 1026Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 -2.25114e-06L103.203 54L154.703 54L103.203 -2.25114e-06Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 54L103.203 54L154.703 108L154.703 54Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 108L51.6031 108L103.203 162L103.203 108Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 162L0.00158691 162L51.6016 216L51.6016 162Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 108L980 54L928.4 54L980 108Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.398 54L928.398 0L876.798 -2.25551e-06L928.398 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 918L103.203 864L51.6031 864L51.6031 918Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 972L103.203 972L103.203 918L51.6031 972Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 918L103.203 972L154.703 918L103.203 918Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 972L154.697 1026L206.297 972L154.697 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.298 1026L206.298 1080L257.898 1026L206.298 1026Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 54L51.6031 108L103.203 108L51.6031 54Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 918L51.6016 918L51.6016 864L0.00158455 918Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 1026L154.703 1026L154.703 972L103.203 1026Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 54L928.4 -2.25551e-06L928.4 54L980 54Z"
                fill="#9C6155"
                stroke="#9C6155"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 1080L928.398 1026L876.798 1026L876.798 1080Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M206.297 0L154.697 -2.25551e-06L206.297 54L206.297 0Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 810L0.00158455 864L51.6016 810L0.00158691 810Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 108L0.00158455 162L51.6016 162L0.00158691 108Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M825.297 1080L876.797 1080L876.797 1026L825.297 1080Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 1080L206.297 1080L206.297 1026L154.697 1080Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 972L51.6016 972L51.6016 918L0.00158455 972Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 918L51.6031 972L103.203 918L51.6031 918Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 972L103.203 1026L154.703 972L103.203 972Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.697 1026L154.697 1080L206.297 1026L154.697 1026Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 54L51.6031 54L103.203 108L103.203 54Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 108L0.00158691 108L51.6016 162L51.6016 108Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 -2.25551e-06L51.6031 54L103.203 54L51.6031 -2.25551e-06Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M980 54L980 0L928.4 -2.25551e-06L980 54Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 1026L103.203 1026L103.203 972L51.6031 1026Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M154.703 0L103.203 -2.25114e-06L154.703 54L154.703 0Z"
                fill="#C4887A"
                stroke="#C4887A"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 1080L980 1026L928.4 1026L928.4 1080Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 1026L980 1026L980 972L928.4 1026Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 54L0.00158455 108L51.6016 108L0.00158691 54Z"
                fill="#CE9284"
                stroke="#CE9284"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 864L0.00158455 918L51.6016 864L0.00158691 864Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 1080L154.703 1080L154.703 1026L103.203 1080Z"
                fill="#AB6F63"
                stroke="#AB6F63"
                stroke-linejoin="bevel"
              />
              <path
                d="M876.798 1080L928.398 1080L928.398 1026L876.798 1080Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 1026L51.6016 1026L51.6016 972L0.00158455 1026Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 972L51.6031 1026L103.203 972L51.6031 972Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 1026L103.203 1080L154.703 1026L103.203 1026Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M103.203 0L51.6031 -2.25551e-06L103.203 54L103.203 0Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 54L0.00158691 54L51.6016 108L51.6016 54Z"
                fill="#BF8375"
                stroke="#BF8375"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 -2.25551e-06L0.00158455 54L51.6016 54L0.00158691 -2.25551e-06Z"
                fill="#B07467"
                stroke="#B07467"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 918L0.00158455 972L51.6016 918L0.00158691 918Z"
                fill="#B5796C"
                stroke="#B5796C"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 1080L103.203 1080L103.203 1026L51.6031 1080Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M928.4 1080L980 1080L980 1026L928.4 1080Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6016 0L0.00158691 -2.25551e-06L51.6016 54L51.6016 0Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 972L0.00158455 1026L51.6016 972L0.00158691 972Z"
                fill="#BA7E71"
                stroke="#BA7E71"
                stroke-linejoin="bevel"
              />
              <path
                d="M51.6031 1026L51.6031 1080L103.203 1026L51.6031 1026Z"
                fill="#C98D7F"
                stroke="#C98D7F"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158455 1080L51.6016 1080L51.6016 1026L0.00158455 1080Z"
                fill="#A1665A"
                stroke="#A1665A"
                stroke-linejoin="bevel"
              />
              <path
                d="M0.00158691 1026L0.00158455 1080L51.6016 1026L0.00158691 1026Z"
                fill="#A66B5E"
                stroke="#A66B5E"
                stroke-linejoin="bevel"
              />
            </g>
            <defs>
              <clipPath id="clip0_425_1353">
                <rect
                  width="1080"
                  height="980"
                  fill="white"
                  transform="translate(980) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex z-[2] w-full max-w-[540px] h-[200px] 720px:h-fit p-8 ">
          <svg viewBox="0 0 525 278" fill="none">
            <path
              d="M350.732 160.065C350.372 160.065 350.103 159.799 349.923 159.356L297.898 90.4222C297.09 89.4476 297 88.7388 297 88.03C297 87.3212 297.09 86.6123 297.898 85.6377L349.923 16.6155C350.103 16.2609 350.372 15.9951 350.732 15.9951C351.181 15.9951 351.451 16.2609 351.63 16.6155L403.655 85.6377C404.463 86.6123 404.553 87.3212 404.553 88.03C404.553 88.7388 404.463 89.4476 403.655 90.4222L351.63 159.356C351.451 159.799 351.181 160.065 350.732 160.065Z"
              fill="#5E2419"
            />
            <path
              d="M173.732 160.065C173.372 160.065 173.103 159.799 172.923 159.356L120.898 90.4222C120.09 89.4476 120 88.7388 120 88.03C120 87.3212 120.09 86.6123 120.898 85.6377L172.923 16.6155C173.103 16.2609 173.372 15.9951 173.732 15.9951C174.181 15.9951 174.451 16.2609 174.63 16.6155L226.655 85.6377C227.463 86.6123 227.553 87.3212 227.553 88.03C227.553 88.7388 227.463 89.4476 226.655 90.4222L174.63 159.356C174.451 159.799 174.181 160.065 173.732 160.065Z"
              fill="#5E2419"
            />
            <path
              d="M262.441 177C261.97 177 261.616 176.673 261.381 176.129L193.178 91.439C192.118 90.2417 192 89.3708 192 88.5C192 87.6291 192.118 86.7583 193.178 85.5609L261.381 0.762167C261.616 0.326511 261.97 0 262.441 0C263.03 0 263.383 0.326511 263.619 0.762167L331.822 85.5609C332.882 86.7583 333 87.6291 333 88.5C333 89.3708 332.882 90.2417 331.822 91.439L263.619 176.129C263.383 176.673 263.03 177 262.441 177Z"
              fill="#E7AB9C"
            />
            <path
              d="M247.532 215C254.693 215 260.943 217.066 266.282 221.198C273.834 227.024 277.61 235.492 277.61 246.602C277.61 255.95 274.55 263.605 268.43 269.566C262.636 275.189 255.572 278 247.239 278C239.882 278 233.437 275.764 227.903 271.293C220.546 265.332 216.868 256.966 216.868 246.195C216.868 236.847 219.96 229.226 226.145 223.332C232.004 217.777 239.133 215 247.532 215ZM247.532 275.053C249.094 275.053 250.559 274.884 251.926 274.545C259.999 272.31 264.036 262.86 264.036 246.195C264.036 241.792 263.743 237.897 263.157 234.51C261.269 223.468 255.963 217.947 247.239 217.947C246.653 217.947 246.034 217.981 245.383 218.048C235.422 218.997 230.442 228.515 230.442 246.602C230.442 252.563 230.963 257.61 232.004 261.742C234.283 270.616 239.459 275.053 247.532 275.053ZM494.184 215C501.345 215 507.595 217.066 512.934 221.198C520.486 227.024 524.262 235.492 524.262 246.602C524.262 255.95 521.202 263.605 515.082 269.566C509.288 275.189 502.224 278 493.891 278C486.534 278 480.089 275.764 474.555 271.293C467.198 265.332 463.52 256.966 463.52 246.195C463.52 236.847 466.612 229.226 472.797 223.332C478.657 217.777 485.786 215 494.184 215ZM494.184 275.053C495.746 275.053 497.211 274.884 498.579 274.545C506.651 272.31 510.688 262.86 510.688 246.195C510.688 241.792 510.395 237.897 509.809 234.51C507.921 223.468 502.615 217.947 493.891 217.947C493.305 217.947 492.687 217.981 492.036 218.048C482.075 218.997 477.094 228.515 477.094 246.602C477.094 252.563 477.615 257.61 478.657 261.742C480.935 270.616 486.111 275.053 494.184 275.053Z"
              fill="#5E2419"
            />
            <path
              d="M39.4531 271.497C42.4479 268.448 43.9453 264.723 43.9453 260.319C43.9453 254.561 40.8854 249.718 34.7656 245.789C33.8542 245.247 30.3385 243.418 24.2187 240.302C18.6198 237.389 15.1367 234.543 13.7695 231.766C13.0534 230.276 12.6953 228.752 12.6953 227.194C12.6953 223.129 14.5833 220.352 18.3594 218.861C19.8568 218.252 23.8073 217.601 25.5 217.601V215H21.6797C14.1276 215 8.36589 217.1 4.39453 221.3C1.79037 224.077 0.488281 227.363 0.488281 231.156C0.488281 236.847 3.54818 241.623 9.66797 245.484C10.6445 246.026 14.2253 247.889 20.4101 251.073C26.1393 253.985 29.6875 256.865 31.0547 259.71C31.7708 261.132 32.1289 262.623 32.1289 264.181C32.1289 268.923 30.013 272.174 25.7812 273.935C24.0885 274.681 22.2005 275.053 20.1172 275.053C12.3698 275.053 7.25912 271.09 4.78516 263.165C4.13412 260.929 3.71094 258.49 3.51563 255.848H0V277.187C1.6276 277.187 2.60417 276.679 2.92969 275.663C3.0599 275.053 3.125 274.105 3.125 272.818C8.20313 276.273 14.1601 278 20.9961 278C29.0039 278 35.1562 275.832 39.4531 271.497Z"
              fill="#5E2419"
            />
            <path
              d="M102.84 276.984H127.352C127.352 275.426 126.896 274.545 125.985 274.342C125.724 274.274 125.366 274.24 124.911 274.24H121.883L99.0316 216.016H92.9766L71.4922 274.24H65.2422V276.984H83.0156C83.0156 275.426 82.5599 274.545 81.6484 274.342C81.3229 274.274 80.9648 274.24 80.5742 274.24H75.3984L92.293 227.905L109.579 274.24H102.84V276.984Z"
              fill="#5E2419"
            />
            <path
              d="M147.852 276.984H194.18L194.571 255.442H192.032L189.59 264.181C188.223 268.923 186.237 271.937 183.633 273.224C182.266 273.902 180.671 274.24 178.848 274.24H167.715V220.796C167.715 220.796 167.852 219.755 168.352 219.235C168.852 218.715 169.79 218.76 169.79 218.76H171.865H176.016V216.016H147.891V218.76H151.797H153.75C153.75 218.76 154.853 218.715 155.352 219.235C155.851 219.755 155.704 220.796 155.704 220.796L155.704 271.954C155.704 271.954 155.733 273.416 155.352 273.862C154.97 274.309 153.75 274.24 153.75 274.24H151.797H150.088C149.537 274.24 147.852 274.903 147.852 275.943V276.984Z"
              fill="#5E2419"
            />
            <path
              d="M350.981 277.492H356.157V265.018L352.153 260.014L316.801 216.016H301.274V218.76H305.18C305.18 218.76 307.62 218.628 308.5 219.682C309.282 220.62 309.086 222.804 309.086 222.804V272.228C309.086 272.228 308.968 273.352 308.5 273.789C308.047 274.213 307 274.24 307 274.24H301.274V276.984H321.391C321 275.29 320.121 274.376 318.754 274.24H313.09V230.445L350.981 277.492Z"
              fill="#5E2419"
            />
            <path
              d="M385.195 276.984H412.832V274.24H407H405.019V249.142H407H411.269L426.113 277.085L442.519 276.984C442.519 275.494 442.096 274.647 441.249 274.444C440.859 274.376 440.468 274.342 440.078 274.342H438.027L422.695 248.024C425.86 247.153 426.429 247.796 428.5 246.094L422.402 238.615C421.583 240.917 420.249 242.766 418.398 244.163C416.64 245.45 414.622 246.094 412.343 246.094H405.019V218.76H411.757C417.031 218.76 420.576 221.3 422.399 226.381L428.5 219.162C424.919 216.656 421.783 216.016 416.64 216.016H385.195V218.76L391 218.76L393.007 218.76V274.24H391H385.195V276.984Z"
              fill="#5E2419"
            />
            <path
              d="M36.7943 237C36.7488 237 36.7148 236.969 36.6921 236.916L30.1136 228.782C30.0113 228.667 30 228.584 30 228.5C30 228.416 30.0113 228.333 30.1136 228.218L36.6921 220.073C36.7148 220.031 36.7488 220 36.7943 220C36.8511 220 36.8852 220.031 36.9079 220.073L43.4864 228.218C43.5886 228.333 43.6 228.416 43.6 228.5C43.6 228.584 43.5886 228.667 43.4864 228.782L36.9079 236.916C36.8852 236.969 36.8511 237 36.7943 237Z"
              fill="#E7AB9C"
            />
            <path
              d="M432.693 240.5C432.647 240.5 432.613 240.469 432.591 240.416L426.012 232.282C425.91 232.167 425.898 232.084 425.898 232C425.898 231.916 425.91 231.833 426.012 231.718L432.591 223.573C432.613 223.531 432.647 223.5 432.693 223.5C432.75 223.5 432.784 223.531 432.806 223.573L439.385 231.718C439.487 231.833 439.498 231.916 439.498 232C439.498 232.084 439.487 232.167 439.385 232.282L432.806 240.416C432.784 240.469 432.75 240.5 432.693 240.5Z"
              fill="#E7AB9C"
            />
            <path
              d="M493.794 255C493.749 255 493.715 254.969 493.692 254.916L487.114 246.782C487.011 246.667 487 246.584 487 246.5C487 246.416 487.011 246.333 487.114 246.218L493.692 238.073C493.715 238.031 493.749 238 493.794 238C493.851 238 493.885 238.031 493.908 238.073L500.486 246.218C500.589 246.333 500.6 246.416 500.6 246.5C500.6 246.584 500.589 246.667 500.486 246.782L493.908 254.916C493.885 254.969 493.851 255 493.794 255Z"
              fill="#E7AB9C"
            />
            <path
              d="M246.794 255C246.749 255 246.715 254.969 246.692 254.916L240.114 246.782C240.011 246.667 240 246.584 240 246.5C240 246.416 240.011 246.333 240.114 246.218L246.692 238.073C246.715 238.031 246.749 238 246.794 238C246.851 238 246.885 238.031 246.908 238.073L253.486 246.218C253.589 246.333 253.6 246.416 253.6 246.5C253.6 246.584 253.589 246.667 253.486 246.782L246.908 254.916C246.885 254.969 246.851 255 246.794 255Z"
              fill="#E7AB9C"
            />
            <path
              d="M91.7943 265C91.7488 265 91.7148 264.969 91.6921 264.916L85.1136 256.782C85.0113 256.667 85 256.584 85 256.5C85 256.416 85.0113 256.333 85.1136 256.218L91.6921 248.073C91.7148 248.031 91.7488 248 91.7943 248C91.8511 248 91.8852 248.031 91.9079 248.073L98.4864 256.218C98.5886 256.333 98.6 256.416 98.6 256.5C98.6 256.584 98.5886 256.667 98.4864 256.782L91.9079 264.916C91.8852 264.969 91.8511 265 91.7943 265Z"
              fill="#E7AB9C"
            />
            <path
              d="M355.794 232C355.749 232 355.715 231.969 355.692 231.916L349.114 223.782C349.011 223.667 349 223.584 349 223.5C349 223.416 349.011 223.333 349.114 223.218L355.692 215.073C355.715 215.031 355.749 215 355.794 215C355.851 215 355.885 215.031 355.908 215.073L362.486 223.218C362.589 223.333 362.6 223.416 362.6 223.5C362.6 223.584 362.589 223.667 362.486 223.782L355.908 231.916C355.885 231.969 355.851 232 355.794 232Z"
              fill="#E7AB9C"
            />
            <path
              d="M355.794 232C355.749 232 355.715 231.969 355.692 231.916L349.114 223.782C349.011 223.667 349 223.584 349 223.5C349 223.416 349.011 223.333 349.114 223.218L355.692 215.073C355.715 215.031 355.749 215 355.794 215C355.851 215 355.885 215.031 355.908 215.073L362.486 223.218C362.589 223.333 362.6 223.416 362.6 223.5C362.6 223.584 362.589 223.667 362.486 223.782L355.908 231.916C355.885 231.969 355.851 232 355.794 232Z"
              fill="#E7AB9C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
