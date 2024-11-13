"use client"
import {toast} from "@/hooks/use-toast";
import {Check} from "lucide-react";

const ErrorNotification = (pushToastList, notificationType, status, message) => {

    const toastId = toast(
        {
            title : "You're Request has been sent",
            description: (
                <div className="flex flex-col items-start justify-start">
                    <div className="flex items-center">
                        <Check />
                        <div className="flex">
                            <h6 className={"pr-2"}>
                                {message || "hello"}
                            </h6>
                            <h1 className="text-green-600"> {/* Use your class for success color */}
                                {status}
                            </h1>
                        </div>
                    </div>
                </div>
            )
        }
    );
    pushToastList(notificationType, toastId);
};

export default ErrorNotification;