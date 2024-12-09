import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import FirstPageComponent from "@/components/FirstPage";

export default function Home() {
    const t = useTranslations();
    return (
        <>
            <FirstPageComponent />
        </>
    );
}
