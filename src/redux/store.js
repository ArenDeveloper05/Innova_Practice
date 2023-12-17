// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";
import footerContactReducer from "./slices/footerContactSlice";
import footerOpeningHoursReducer from "./slices/footerOpeningHoursSlice";
import footerUsefulLinksReducer from "./slices/footerUsefulLinksSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    order: orderReducer,
    latestNews: latestNewsReducer,
    footerContact: footerContactReducer,
    footerOpeningHours: footerOpeningHoursReducer,
    footerUsefulLinks: footerUsefulLinksReducer,
  },
});

export default store;
