import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footer_useful_links_arr: [
    {
      id: 1,
      title: "Privacy Policy",
    },
    {
      id: 2,
      title: "Order Tracking",
    },
    {
      id: 3,
      title: "Warranty and Services",
    },
    {
      id: 4,
      title: "About",
    },
    {
      id: 5,
      title: "Contact Us",
    },
    {
      id: 6,
      title: "Wishlist",
    },
  ],
};

const footerUsefulLinksSlice = createSlice({
  name: "footerUsefulLinks",
  initialState,
  reducers: {},
});

export const {} = footerUsefulLinksSlice.actions;
export default footerUsefulLinksSlice.reducer;
