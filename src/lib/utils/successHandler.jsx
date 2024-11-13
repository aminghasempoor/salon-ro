import Notifications from "@/core/components/notification";

export const successRequest = (pushToastList, dismissToastList, response, options) => {
    if (options.notification && options.success.notification.show) {
        dismissToastList(["pending", "warning", "error", "success"])
        Notifications(pushToastList, "success", response.status, "");
    }
}