"use client";
import { useState } from "react";
import SendTokenComponent from "./SendTokenComponent";
import SendUserNumberComponent from "./SendUserNumberComponent";
import SendUserDataComponent from "./SendUserDataComponent";
export default function OtpComponent() {
    const initialTimerValue = 3;
    const [otpToken, setOtpToken] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [timer, setTimer] = useState(initialTimerValue);

    switch (pageNumber) {
        case 1 :
            return (
                <SendUserNumberComponent
                    setOtpToken={setOtpToken}
                    setPhoneNumber={setPhoneNumber}
                    setPageNumber={setPageNumber}
                    PhoneNumber={PhoneNumber}
                    initialTimerValue={initialTimerValue}
                    setTimer={setTimer}
                />
            );
        case 2 :
            return (
                <SendTokenComponent
                    PhoneNumber={PhoneNumber}
                    setOtpToken={setOtpToken}
                    setPageNumber={setPageNumber}
                    timer={timer}
                    initialTimerValue={initialTimerValue}
                    setTimer={setTimer}
                />
            );
        case 3 :
            return (
                <SendUserDataComponent
                    PhoneNumber={PhoneNumber}
                    otpToken={otpToken}
                />
            );
        default :
            return (
                <SendUserNumberComponent
                    setOtpToken={setOtpToken}
                    setPhoneNumber={setPhoneNumber}
                    setPageNumber={setPageNumber}
                    PhoneNumber={PhoneNumber}
                    initialTimerValue={initialTimerValue}
                    setTimer={setTimer}
                />
            );
    }
}