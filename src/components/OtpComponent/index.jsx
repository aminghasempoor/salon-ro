"use client";
import { useState } from "react";
import SendUserDataComponent from "@/components/OtpComponent/SendUserDataComponent";
import SendTokenComponent from "@/components/OtpComponent/SendTokenComponent";
export default function OtpComponent() {
    const [otpToken, setOtpToken] = useState(false);
    const [PhoneNumber, setPhoneNumber] = useState("");

    // For Resend Token (read ResendToken Component Doc)
    const initialTimerValue = 30;
    const [timer, setTimer] = useState(initialTimerValue);
    // End For Resend Token
    if (!otpToken) {
        return (
            <SendUserDataComponent
                setOtpToken={setOtpToken}
                setPhoneNumber={setPhoneNumber}
                PhoneNumber={PhoneNumber}
                initialTimerValue={initialTimerValue}
                setTimer={setTimer}
            />
        );
    } else {
        return (
            <SendTokenComponent
                PhoneNumber={PhoneNumber}
                setOtpToken={setOtpToken}
                timer={timer}
                initialTimerValue={initialTimerValue}
                setTimer={setTimer}
            />
        );
    }
}