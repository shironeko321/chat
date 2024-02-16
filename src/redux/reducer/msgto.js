import { createSlice } from "@reduxjs/toolkit";

const queryParameters = new URLSearchParams(window.location.search)
const msgTo = queryParameters.get("to")

const MsgToSlice = createSlice({
  name: "msgTo",
  initialState: {
    value: msgTo ? msgTo : ""
  },
  reducers: {
    to: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { to } = MsgToSlice.actions
export default MsgToSlice.reducer