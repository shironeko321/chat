import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducer/user";
import msgToReducer from "./reducer/msgto";
import chatReducer from "./reducer/chat";

export default configureStore({
  reducer: {
    user: userReducer,
    msgTo: msgToReducer,
    chat: chatReducer,
  },
})