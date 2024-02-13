import { createSlice } from "@reduxjs/toolkit";

export const chatReducer = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addMsg: (state, actions) => {
      state.push(actions.payload)
    }
  }
})

export const { addMsg } = chatReducer.actions
export default chatReducer.reducer