import { createSlice } from "@reduxjs/toolkit";
import { CapsoType } from "../../types";

type CapSoSlice = {
    value: CapsoType[],
    isFillter: boolean,
    dataFillter: CapsoType[],
    chiTiet: CapsoType,
}

const initialState: CapSoSlice = {
    value: [],
    isFillter: false,
    dataFillter: [],
    chiTiet: {
        STT: '',
        HSD: '',
        NguonCap: '',
        TenDV: '',
        TenKH: '',
        ThoiGianCap: '',
        TrangThai: '',
    }
}

const capsoSlice = createSlice({
    name: 'capSo',
    initialState,
    reducers: {
        addCapSoValue: (state, action) => {
            state.value = action.payload
        },
        changeCapSoFillter: (state, action) => {
            state.isFillter = action.payload
        },
        changeDataFillter: (state, action) => {
            state.dataFillter = action.payload
        },
        addChiTietCapSo: (state, action) => {
            state.chiTiet = action.payload
        }
    }
})

export const { addCapSoValue, changeCapSoFillter, changeDataFillter, addChiTietCapSo  } = capsoSlice.actions;

export default capsoSlice.reducer;