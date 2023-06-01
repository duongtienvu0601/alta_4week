import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  collection, getDocs } from "firebase/firestore";
import { VaiTroType } from "../../types";
import { db } from "../../config/firebase";


type VaiTroSliceState = {
    vaitros: VaiTroType[],
    vaitro: VaiTroType
}
export const getAllVaiTro = createAsyncThunk(
    'VaiTro: Get ALL', 
    async () => {
        try {
            let data: VaiTroType[] = [];
            const q = collection(db, "quanly_vaitro");
            const getData = await getDocs(q);
            getData.forEach((doc) => {
                data.push({...doc.data(), id: doc.id} as VaiTroType)
            });
            return data;
        } catch (error: any) {
            return [];
        }
    }
)

const initialState: VaiTroSliceState = {
    vaitros: [],
    vaitro: {
        id: '',
        MoTa: '',
        SoNgDung: 0,
        TenVaiTro: ''
    }
}



export const vaiTroSlice = createSlice({
    name: "vaitro",
    initialState,
    reducers: {
        getOneVaitro: (state, action) => {
            state.vaitro = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllVaiTro.pending, (state, action) => {
            state.vaitros= [];
        });
        builder.addCase(getAllVaiTro.fulfilled, (state, action) => {
            state.vaitros = action.payload;
        });
    },
})

export const { getOneVaitro } = vaiTroSlice.actions;

export default vaiTroSlice.reducer;