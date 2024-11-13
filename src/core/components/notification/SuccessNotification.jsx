"use client"
import {toast} from "@/hooks/use-toast";
import {Check} from "lucide-react";
// import {ToastAction} from "@/components/ui/toast";

const SuccessNotification = (pushToastList, notificationType, status) => {

    const toastId =
        toast(
            {
                title : "You're Request has been sent",
                description: (
                    <div className="flex items-center w-full">
                        <Check className={"text-green-900"}/>
                        <div className={"flex"}>
                            <h6 className={"pr-2"}>
                                Operation was successful with code :
                            </h6>
                            <h1 className="text-green-600">
                                {status}
                            </h1>
                        </div>
                    </div>
                ),
                // action : (
                //     <ToastAction altText={"Undo"}>
                //         undo
                //     </ToastAction>
                // )
            }
        );
    pushToastList("success", 'SuccessToastId');
};

export default SuccessNotification;