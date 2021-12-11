import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllNames} from "./nameAsyncAction";

export const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: {
        names: [] as string[]
    },
    reducers: {},
    extraReducers: {
        [getAllNames.fulfilled.type]: (state, {payload}: PayloadAction<string[]>) => {
            state.names = payload;
        }
    },
});