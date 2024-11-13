"use client"
import axios from "axios";
import useUserStore from "@/lib/utils/UserStore";
import Notifications from "@/core/components/notification";
import {successRequest} from "@/lib/utils/successHandler";
import {errorRequest, errorResponse, errorSetting} from "@/lib/utils/errorHandler";
import ToastStore from "@/lib/utils/ToastStore ";

const defaultOptions = {
    auth: false,
    data: {},
    requestOptions: {
        headers: {}
    },
    notification: true,
    pending: true,
    success: {
        notification: {
            show: true,
        },
    },
    failed: {
        notification: {
            show: true,
        },
    },
}
const useRequest = (initOptions) => {
    const {token, clearToken} = useUserStore()
    const { pushToastList, dismissToastList } = ToastStore();
    let _options = {...defaultOptions, ...initOptions}

    function requestServer(url = '', method = 'get', options) {
        _options = {..._options, ...options}
        if (_options.auth) _options = {
            ..._options, requestOptions: {
                ..._options.requestOptions,
                headers: {..._options.requestOptions.headers, authorization: `Bearer ${token}`}
            }
        }

        return new Promise((resolve) => {
            if (_options.notification && _options.failed.notification.show && _options.pending) {
                dismissToastList(["pending", "warning", "error", "success"]);
                Notifications(pushToastList, "pending", "", "");
            }

            axios({
                url: url, method: method, data: _options.data, ..._options.requestOptions
            })
                .then(response => {
                    successRequest(pushToastList, dismissToastList, response, _options)
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        errorResponse(pushToastList, dismissToastList, error.response, clearToken, _options.notification && _options.failed.notification.show)
                    } else if (error.request) {
                        errorRequest(dismissToastList, _options.notification && _options.failed.notification.show)
                    } else {
                        errorSetting(dismissToastList, _options.notification && _options.failed.notification.show)
                    }
                })
        });
    }
    return requestServer
}

export default useRequest