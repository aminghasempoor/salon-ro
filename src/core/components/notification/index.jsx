import SuccessNotification from "./SuccessNotification";
import ErrorNotification from "./ErrorNotification";
import PendingNotification from "@/core/components/notification/PendingNotification";
import WarningNotification from "@/core/components/notification/WarningNotification";

const Notifications = (pushToastList, notificationType, t, status, message) => {
    switch (notificationType) {
        case "pending":
            PendingNotification(pushToastList, notificationType, t);
            break;
        case "warning":
            WarningNotification(pushToastList, notificationType, t, status);
            break;
        case "error":
            if (message) {
                ErrorNotification(pushToastList, notificationType, t, status, message);
            } else {
                ErrorNotification(pushToastList, notificationType, t, status);
            }
            break;
        case "success":
            SuccessNotification(pushToastList, notificationType, t, status);
            break;
    }
};

export default Notifications;
