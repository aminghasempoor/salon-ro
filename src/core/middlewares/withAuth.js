"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import userStore from "@/lib/utils/UserStore";

function WithAuthMiddleware({ children }) {
    const router = useRouter();
    const { isAuth, initAuthState } = userStore();

    useEffect(() => {
        if (!initAuthState) return;
        if (!isAuth) {
            router.replace("/");
        }
    }, [isAuth, initAuthState]);

    if (!initAuthState || !isAuth) return <h1>hello</h1>; //with auth middleware
    return <>{children}</>;
}

export default WithAuthMiddleware;
