// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import menuReducer from "./slices/menuSlice";
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";
import bestCheifReducer from "./slices/bestCheifSlice";
import leftSideReducer from "./slices/blogLeftSide";
import menuPageReducer from "./slices/menuPageSlice";
import customerReviewsReducer from "./slices/customerReviewsSlice";
import menu2Reducer from "./slices/menu2Slice";
import footerContactReducer from "./slices/footerContactSlice";
import footerOpeningHoursReducer from "./slices/footerOpeningHoursSlice";
import footerUsefulLinksReducer from "./slices/footerUsefulLinksSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    menu: menuReducer,
    order: orderReducer,
    latestNews: latestNewsReducer,
    bestCheif: bestCheifReducer,
    leftSide: leftSideReducer,
    menuPage: menuPageReducer,
    customerReviews: customerReviewsReducer,
    menu2: menu2Reducer,
    footerContact: footerContactReducer,
    footerOpeningHours: footerOpeningHoursReducer,
    footerUsefulLinks: footerUsefulLinksReducer,
  },
});

export default store;
