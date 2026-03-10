import { configureStore } from "@reduxjs/toolkit";

import { api } from "../feature";

import authReducer from "../feature/auth/authSlice";
import userReducer from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,

    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
});
