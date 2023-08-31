// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    order: orderReducer,
    latestNews: latestNewsReducer,
  },
});

export default store;
