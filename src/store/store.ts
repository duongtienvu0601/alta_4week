import { configureStore } from "@reduxjs/toolkit";
import breadcrumSlice from "./reducers/breadcrumbSlice";
import menuSlice from "./reducers/menuSlice";
import deviceSlice from "./reducers/deviceSlice";
import capsoSlice from "./reducers/capsoSlice";
import vaiTroSlice from "./reducers/vaiTroSlice";

const store = configureStore({
    reducer: {
        breadcrumb: breadcrumSlice,
        menu: menuSlice,
        devices: deviceSlice ,
        capSo: capsoSlice,
        vaitro: vaiTroSlice,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;