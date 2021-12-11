import {configureStore} from "@reduxjs/toolkit";
import {nameSlice} from "../../module/nameSlice";

export const store = configureStore({
    reducer: {
        nameSlice: nameSlice.reducer
    }
});

export type typeGlobalState = ReturnType<typeof store.getState>;