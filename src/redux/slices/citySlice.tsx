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
        var data = [...state];
        console.log(data);
        console.log(state);
        state.citys = action.payload
    }
  }
})

export const { setCity, addCity} = citySlice.actions
export default citySlice.reducer
