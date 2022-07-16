import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const citySlice = createSlice({
  name: "city",
  initialState: {
    citys: []
  },
  reducers: {
    setCity(state:any, action: PayloadAction<any>) {
      state.citys = action.payload;
    },
    addCity(state:any, action: PayloadAction<any>) {
        const data = [...state.citys]
        data.push(action.payload)
        state.citys = data
    }
  }
})

export const { setCity, addCity} = citySlice.actions
export default citySlice.reducer
