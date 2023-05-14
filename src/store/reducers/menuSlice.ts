import { createSlice } from '@reduxjs/toolkit';

export type stateModel = {
    title: string,
    path: string
}

type menuState = {
    value: stateModel 
}

const initialState: menuState = {
    value: {
        title: "Dashboard",
        path: "/dashboard"
    },

}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        changeMenuValue: (state, action) => {
            state.value = action.payload
        },
        addValue:(state,action) =>{
            state.value = action.payload
        }
        
    }
})

export const {changeMenuValue } = menuSlice.actions

export default menuSlice.reducer;