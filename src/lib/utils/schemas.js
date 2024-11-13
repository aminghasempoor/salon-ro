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