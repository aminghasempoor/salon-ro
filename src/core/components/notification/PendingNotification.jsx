import {toast} from "@/hooks/use-toast";
import {Check} from "lucide-react";
import {useTranslations} from "next-intl";

const PendingNotification = (pushToastList, notificationType) => {
    const t = useTranslations();
    const toastId = toast(
        {
            title : "You're Request has been sent",
            description: (
                <div className="flex flex-col items-start justify-start">
                    <div className="flex items-center">
                        <Check />
                        <div className="flex">
                            <h6 className={"pr-2"}>
                                {t("Notifications.pending")}
                            </h6>
                        </div>
                    </div>
                </div>
            )
        }
    );
    pushToastList(notificationType, toastId);
};

export default PendingNotification;
