"use client"
import {create} from "zustand";
import axios from "axios";
import {GET_USER_ROUTE} from "@/core/utils/route";

const useUserStore = create((set, get) => ({
    isAuth: false,
    userChangedLanguage: false,
    token: localStorage.getItem("_token") || null,
    user: {},

    clearUser: () => set({ user: {} }),

    changeUser: (user) => set({ user }),

    changeUserLanguage: (language) =>
        set((state) => ({
            user: { ...state.user, user_language: language }
        })),

    changeAuthState: (isAuth) => set({ isAuth }),

    changeLanguageState: (userChangedLanguage) => set({ userChangedLanguage }),

    clearToken: () => {
        localStorage.removeItem("_token");
        set({ token: null });
    },

    setToken: (token) => {
        localStorage.setItem("_token", token);
        set({ token });
    },

    getUser: async (callback = () => {}) => {
        const token = get().token;
        if (!token) return;

        try {
            const { data } = await axios.get(GET_USER_ROUTE, {
                headers: { authorization: `Bearer ${token}` },
            });
            if (typeof callback === "function") callback(data);
            set({ user: data, isAuth: true, userChangedLanguage: true });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                get().clearToken();
            }
        }
    },

    // Initialize the token and user data on load
    initialize: async () => {
        const token = get().token;
        if (!token) {
            get().clearUser();
            get().changeAuthState(false);
            get().changeLanguageState(false);
            return;
        }
        await get().getUser();
    }
}));

export default useUserStore;
