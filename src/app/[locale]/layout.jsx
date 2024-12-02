import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/lib/utils/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import favicon from "@/assets/images/favicon.svg";

export const metadata = {
    title: "SalonRo | سالن رو",
    description: "Powered by Awe & Rise Technology",
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    let messages;
    let isRtl = false;
    try {
        messages = await getMessages();
        isRtl = locale === "fa";
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
            <head>
                <link rel="icon" href={favicon.src} type="image/svg" sizes="any" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages} className={isRtl ? "rtl" : "ltr"}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <main>{children}</main>
                        <Toaster />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
