import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export default function Home() {
    const t = useTranslations();
    return (
        <div>
            <h1>{t("HomePage.title")}</h1>
            <Button>
                <Link href="/">{t("HomePage.about")}</Link>
            </Button>
        </div>
    );
}
