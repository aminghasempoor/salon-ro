import {z} from "zod";
export const loginFormSchema = (t) =>
    z.object({
        phone_number: z
            .string()
            .min(1, { message: t("LoginPage.Required") })
            .max(11, { message: t("LoginPage.error_max", { max: 11 }) }),
        password: z
            .string()
            .min(1, { message: t("LoginPage.Required") })
            .max(10),
    });

export const RegisterFormSchema = (t) =>
    z.object({
        phone_number: z
            .string()
            .min(1, { message: t("RegisterPage.Required") })
            .max(11, { message: t("RegisterPage.error_max", { max: 11 }) }),
        user_name: z
            .string()
            .min(1, { message: t("RegisterPage.Required") }),
        last_name: z
            .string()
            .min(1, { message: t("RegisterPage.Required") })
    });
export const OtpFormSchema = (t) =>
    z.object({
        pin: z.string().min(5, {
            message: "Your one-time password must be 5 characters.",
        }),
    });