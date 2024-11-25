"use client";
import { create } from "zustand";
import { toast } from "@/hooks/use-toast";

const ToastStore = create((set) => ({
    toastLists: {
        pending: [],
        error: [],
        warning: [],
        success: [],
    },

    pushToastList: (toast_type, toast_id) =>
        set((state) => ({
            toastLists: {
                ...state.toastLists,
                [toast_type]: [...state.toastLists[toast_type], toast_id],
            },
        })),

    dismissToastList: (toast_type) =>
        set((state) => {
            // Display each dismissed toast
            toast_type.forEach((type) => {
                state.toastLists[type].forEach((id) => {
                    toast({ description: `${id}` });
                });
            });

            const newToastLists = { ...state.toastLists };
            toast_type.forEach((type) => {
                newToastLists[type] = [];
            });

            return { toastLists: newToastLists };
        }),
}));

export default ToastStore;
