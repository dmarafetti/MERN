import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({

    name: "appSlice",

    initialState: {

        loading: false
    },

    reducers: {

        setLoading: (state, action: PayloadAction<boolean>) => {

            state.loading = action.payload;
        }
    }

});

export default slice.reducer;

export const { setLoading } = slice.actions;
