import { useTranslations } from "next-intl";
import { useEffect } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { Button } from "@/components/ui/button";
import { SEND_OTP_TOKEN } from "@/core/utils/route";

const ResendToken = ({ initialTimerValue, timer, setTimer, PhoneNumber, disabled, setResendingOtp, resendingOtp }) => {
    const t = useTranslations();
    const requestServer = useRequest();
    // Countdown Timer
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);
    // End Countdown Timer

    // Handle Resend Token
    const handleResendClick = () => {
        if (timer > 0 || resendingOtp) return;

        setResendingOtp(true);
        requestServer(SEND_OTP_TOKEN, "post", {
            auth: false,
            data: {
                phone_number: PhoneNumber,
                last_name : "asd", // should delete
                user_name : "sss" // should delete
            },
        })
            .then(function (response) {
                console.log("response");
                setTimer(initialTimerValue);
                setResendingOtp(false);
            })
            .catch(function (error) {
                console.log("error");
                setResendingOtp(false);
            });
    };
    // End Handle Resend Token

    return (
        <>
            {timer > 0 ? (
                <Button
                    color="success"
                    disabled
                    onClick={handleResendClick}
                    className="flex rounded-[12px] border-2 px-4 py-2 w-fit items-center justify-center place-self-end text-[0.75rem] font-bold text-center bg-transparent text-Light-TextColor dark:text-Dark-TextColor hover:bg-Light-BackBtnColor hover:dark:bg-Dark-BackBtnColor"
                >
                    {t("Resend_code_in")} {timer} {t("seconds_later")}
                </Button>
            ) : (
                <Button
                    color="success"
                    disabled={resendingOtp}  // Disable button while resending OTP
                    onClick={handleResendClick}
                    className="flex rounded-[12px] border-2 px-4 py-2 w-fit items-center justify-center place-self-end text-[0.75rem] font-bold text-center bg-transparent text-Light-TextColor dark:text-Dark-TextColor hover:bg-Light-BackBtnColor hover:dark:bg-Dark-BackBtnColor"
                >
                    {t("resend_code")}
                </Button>
            )}
        </>
    );
};

export default ResendToken;

//////****** usage document ******/////////
// 1.) use <ResendToken /> component inside your page
// 2.) list of props that you need to send is down below
// 2.1) initialTimerValue **** Delay Time For Sending Token
// 2.2) timer **** Timer Of Resending Token
// 2.3) setTimer **** Set Timer Of Resend (note: every place in your components if you are requesting for getting token you should use this prop like this setTimer(initialTimerValue) )
// 2.4) PhoneNumber **** Phone Number That Should Receive Token
