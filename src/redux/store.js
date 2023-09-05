// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";
import bestCheifReducer from "./slices/bestCheifSlice";
import leftSideReducer from './slices/blogLeftSide'
const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    order: orderReducer,
    latestNews: latestNewsReducer,
    bestCheif: bestCheifReducer,
    leftSide: leftSideReducer
  },
});

export default store;
