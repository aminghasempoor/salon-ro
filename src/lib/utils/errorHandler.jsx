import Notifications from "@/core/components/notification";

export const errorSetting = (dismissToastList, notification) => {
    if (notification) {
        dismissToastList(["pending", "warning", "error", "success"])
    }
}
export const errorRequest = (dismissToastList, notification) => {
    if (notification) {
        dismissToastList(["pending", "warning", "error", "success"])
    }
}

export const errorResponse = (pushToastList, dismissToastList, response, clearToken, notification) => {
    if (notification) {
        dismissToastList(["pending", "warning", "error", "success"])
    }
    if (isServerError(response.status)) {
        errorServer(pushToastList, response, notification)
    } else if (isClientError(response.status)) {
        errorClient(pushToastList, response, clearToken, notification)
    }
}

const errorServer = (pushToastList, response, notification) => {
    if (notification) Notifications(pushToastList, "warning", response.status, "");
}
const errorClient = (pushToastList, response, clearToken, notification) => {
    switch (response.status) {
        case 401:
            clearToken()
            if (notification) Notifications(pushToastList, "error", response.status, "");
            break;
        case 422:
            if ('type' in response.data) {
                errorLogic(pushToastList, response, notification)
                break;
            }
            errorValidation(pushToastList, response, notification)
            break;
        case 429:
            if (notification) Notifications(pushToastList, "error", response.status, "");
            break
        default:
            if (notification) Notifications(pushToastList, "error", response.status, "Request failed with status code :");
            break
    }
}

const isServerError = status => status >= 500 && status <= 599;
const isClientError = status => status >= 400 && status <= 499;

const errorLogic = (pushToastList, response, notification) => {
    if (notification) {
        if (Array.isArray(response.data.message)) {
            response.data.message.map((item) => {
                Notifications(pushToastList, "error", response.status, item);
            });
        } else
            Notifications(
                pushToastList,
                "error",
                response.status,
                response.data.message
            );
    }
}
const errorValidation = (pushToastList, response, notification) => {
    if (notification) {
        const errorsMap = Object.keys(response.data.errors)
        const errorsArray = response.data.errors

        errorsMap.map((item) => {
            Notifications(pushToastList, "error", response.status, errorsArray[item][0]);
        })
    }
}