import {configureStore} from "@reduxjs/toolkit";
import applicationReducer from "./slices/appSlice";

const store = configureStore({

    reducer: {

        application: applicationReducer
    }
});

export default store;

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;



