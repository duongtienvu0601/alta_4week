import { configureStore } from "@reduxjs/toolkit";
import breadcrumSlice from "./reducers/breadcrumbSlice";
import menuSlice from "./reducers/menuSlice";
import deviceSlice from "./reducers/deviceSlice";

const store = configureStore({
    reducer: {
        breadcrumb: breadcrumSlice,
        menu: menuSlice,
        devices: deviceSlice 
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;