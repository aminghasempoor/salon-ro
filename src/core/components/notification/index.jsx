import SuccessNotification from "./SuccessNotification";
import ErrorNotification from "./ErrorNotification";

const Notifications = (pushToastList, notificationType, status, message) => {
    switch (notificationType) {
        // case "pending":
        //     pendingNotification(pushToastList, notificationType);
        //     break;
        // case "warning":
        //     WarningNotification(pushToastList, notificationType, status);
        //     break;
        case "error":
            if (message) {
                ErrorNotification(pushToastList, notificationType, status, message)
            } else {
                ErrorNotification(pushToastList, notificationType, status)
            }
            break;
        case "success":

            SuccessNotification(pushToastList, notificationType, status);
            break;
    }
};

export default Notifications;
