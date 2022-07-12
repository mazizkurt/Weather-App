import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const introSlice = createSlice({
  name: "intro",
  initialState: {
    intro: false
  },
  reducers: {
    setIntro(state:any, action: PayloadAction<any>) {
      state.intro = action.payload
    }
  }
})

export const { setIntro } = introSlice.actions
export default introSlice.reducer
