// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
<<<<<<< HEAD
import menuReducer from "./slices/menuSlice";
=======
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";
>>>>>>> 9e8d280ea02b6a2f690801d9135620ac73f6b0e2

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
<<<<<<< HEAD
    menu: menuReducer,
=======
    order: orderReducer,
    latestNews: latestNewsReducer,
>>>>>>> 9e8d280ea02b6a2f690801d9135620ac73f6b0e2
  },
});

export default store;
