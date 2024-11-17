import {toast} from "@/hooks/use-toast";
import {Check} from "lucide-react";

const WarningNotification = (pushToastList, notificationType, t, status) => {
    const toastId = toast(
        {
            title : "You're Request has been sent",
            description: (
                <div className="flex flex-col items-start justify-start">
                    <div className="flex items-center">
                        <Check />
                        <div className="flex">
                            <h6 className={"pr-2"}>
                                {t("Notifications.warning")} ({t("Notifications.code")})
                            </h6>
                            <h1 className="text-green-600">
                                {status}
                            </h1>
                            <h1 className="text-green-600">
                                {t("Notifications.warning_static_text")}
                            </h1>
                        </div>
                    </div>
                </div>
            )
        }
    );
    pushToastList(notificationType, toastId);
};
export default WarningNotification;