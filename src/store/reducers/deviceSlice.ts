import { createSlice } from '@reduxjs/toolkit';

export type device ={
    id: string;
    name: string;
    ipAddress: string;
    statusAction: string;
    statusConnect: string;
    service: string;
}


type deviceState = {
    initialState: device[];
    changeValueDevice:device[],
    isFillter: boolean,
}

const initialState: deviceState = {
    initialState: [],
    changeValueDevice:[],
    isFillter: false,
}

export const deviceSlice = createSlice({
    name: "devices",
    initialState,
    reducers: {
        changeDevice: (state, action) => {
            state.initialState = action.payload
        },
        fillterDevice: (state, action) =>{
            state.changeValueDevice = action.payload
        },
        changeStatusFillter: (state, action) => {
            state.isFillter = action.payload;
        }
        
    }
})

export const {changeDevice, fillterDevice, changeStatusFillter } = deviceSlice.actions

export default deviceSlice.reducer;