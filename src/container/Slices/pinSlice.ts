import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PinSliceState {
    pin: string;
    rightPin: string,
    isRightPin: boolean;
}

const initialState: PinSliceState = {
    pin: "",
    rightPin: "9999",
    isRightPin: false,
};


export const pinSlice = createSlice({
   name: "pin",
   initialState,
   reducers: {
       enterNumber : (state, action:  PayloadAction<string>)=> {
           if (state.pin.length < 4) {
               state.pin += action.payload;
           }
       },
       removeLastNumber: (state)=> {
           state.pin = state.pin.slice(0, -1);
       },
       checkPin: (state) => {
           state.isRightPin = (state.pin) === state.rightPin;
           state.pin = "";
       },
   },
});

export const pinReducer = pinSlice.reducer;
export const {enterNumber, removeLastNumber, checkPin} = pinSlice.actions;
