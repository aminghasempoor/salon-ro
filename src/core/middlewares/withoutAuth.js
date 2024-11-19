"use client"
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import userStore from "@/lib/utils/UserStore";

const WithoutAuthMiddleware = ({children}) => {
    const {isAuth, initAuthState} = userStore();
    const router = useRouter()

    useEffect(() => {
        if (!isAuth || !initAuthState) return;
        const timer = setTimeout(() => {
            router.replace("/dashboard");
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [isAuth]);
    if (!initAuthState) return null
    return isAuth ? (
        <h1>hello</h1> // without Auth middleware
    ) : (
        <>{children}</>
    );
};

export default WithoutAuthMiddleware;
