import { create } from 'zustand'

const useStore = create((set) => ({
    user : {
        isAuth : false,
        token: "",
        user:{}
    },
}))
