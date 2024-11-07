import {configureStore} from "@reduxjs/toolkit";
import {pinReducer} from "../container/Slices/pinSlice.ts";

export const store = configureStore({
    reducer: {
        pin: pinReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = typeof store.dispatch;