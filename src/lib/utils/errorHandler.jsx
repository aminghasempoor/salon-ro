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

export const errorResponse = (pushToastList, dismissToastList, response, clearToken, t, notification) => {
    if (notification) {
        dismissToastList(["pending", "warning", "error", "success"])
    }
    if (isServerError(response.status)) {
        errorServer(pushToastList, response, t, notification)
    } else if (isClientError(response.status)) {
        errorClient(pushToastList, response, clearToken, t, notification)
    }
}

const errorServer = (pushToastList, response, t, notification) => {
    if (notification) Notifications(pushToastList, "warning", t, response.status);
}
const errorClient = (pushToastList, response, clearToken, t, notification) => {
    switch (response.status) {
        case 401:
            clearToken()
            if (notification) Notifications(pushToastList, "error", t, response.status);
            break;
        case 422:
            if ('type' in response.data) {
                errorLogic(pushToastList, response, t, notification)
                break;
            }
            errorValidation(pushToastList, response, t, notification)
            break;
        case 429:
            if (notification) Notifications(pushToastList, "error", t, response.status);
            break
        default:
            if (notification) Notifications(pushToastList, "error", t, response.status);
            break
    }
}

const isServerError = status => status >= 500 && status <= 599;
const isClientError = status => status >= 400 && status <= 499;

const errorLogic = (pushToastList, response, t, notification) => {
    if (notification) {
        if (Array.isArray(response.data.message)) {
            response.data.message.map((item) => {
                Notifications(pushToastList, "error", t, response.status, item);
            });
        } else
            Notifications(
                pushToastList,
                "error",
                t,
                response.status,
                response.data.message
            );
    }
}
const errorValidation = (pushToastList, response, t, notification) => {
    if (notification) {
        const errorsMap = Object.keys(response.data.errors)
        const errorsArray = response.data.errors

        errorsMap.map((item) => {
            Notifications(pushToastList, "error", t, response.status, errorsArray[item][0]);
        })
    }
}