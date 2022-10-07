import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface INavState {
  linkName: string;
}

const initialState: INavState = {
  linkName: "home",
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setRoute: (state: INavState, action: PayloadAction<string>) => {
      state.linkName = action.payload;
    }
  },
});

export const { setRoute } = navSlice.actions;

export default navSlice.reducer;