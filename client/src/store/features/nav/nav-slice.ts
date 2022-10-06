import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface INavState {
  linkName: string;
}

const initialState: INavState = {
  linkName: "home",
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setRoute: (state: INavState, action: PayloadAction<string>) => {
      state.linkName = action.payload;
    }
  },
})

export const { setRoute } = navSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default navSlice.reducer