// inputPassSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface InputPassState {
  password: string;
  showPassword: boolean;
}

const initialState: InputPassState = {
  password: '',
  showPassword: false,
};

const inputPassSlice = createSlice({
  name: 'inputPass',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
  },
});

export const { setPassword, setShowPassword } = inputPassSlice.actions;
export default inputPassSlice.reducer;