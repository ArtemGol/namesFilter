import {createAsyncThunk} from "@reduxjs/toolkit";
import {getNames} from "../api/getNames";

export const getAllNames = createAsyncThunk(
    "nameSlice/getAllNames",
    async (_, { rejectWithValue }) => {
        try {
            return await getNames();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);