import { z } from "zod";
export const loginFormSchema = (t) =>
    z.object({
        phone_number: z
            .string()
            .min(1, { message: t("LoginPage.Required") })
            .max(11, { message: t("LoginPage.error_max", { max: 11 }) }),
        password: z
            .string()
            .min(1, { message: t("LoginPage.Required") })
            .min(6, { message: t("LoginPage.minimum_character") })
            .max(10),
    });

export const RegisterFormSchema = (t) =>
    z.object({
        phone_number: z
            .string()
            .min(1, { message: t("RegisterPage.Required") })
            .max(11, { message: t("RegisterPage.error_max", { max: 11 }) }),
    });
export const OtpFormSchema = (t) =>
    z.object({
        pin: z.string().min(5, {
            message: t("OtpPage.pin_required"),
        }),
    });
