import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: parseInt(document.getElementById('user').value)
  },
  reducers: {
    addUser: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer