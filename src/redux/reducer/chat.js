import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    value: []
  },
  reducers: {
    addMsg: (state, actions) => {
      state.value.push(actions.payload)
    }
  }
})

export const { addMsg } = chatSlice.actions
export default chatSlice.reducer