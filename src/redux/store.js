import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./reducer/chat";

export const store = configureStore({
  reducer: {
    chat: chatReducer
  }
})