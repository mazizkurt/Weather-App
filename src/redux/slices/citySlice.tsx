import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const citySlice = createSlice({
  name: "city",
  initialState: {
    citys: []
  },
  reducers: {
    setCity(state:any, action: PayloadAction<any>) {
      console.log("action.payload")
      console.log(action.payload)
      state.citys = action.payload;
    },
    addCity(state:any, action: PayloadAction<any>) {
        const data = [...state.citys]
        data.push(action.payload)
        state.citys = data
    },
    updateCity(state:any, action: PayloadAction<any>) {
        const data = [...state.citys]
        data[action.payload.index].currentWeather = action.payload.data
        state.citys = data
    }
  }
})

export const { setCity, addCity,updateCity} = citySlice.actions
export default citySlice.reducer
