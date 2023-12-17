import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footer_contact_arr: [
    {
      id: 1,
      text: {
        text_title:
          "20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom",
        text_info_1: "",
        text_info_2: "",
      },
    },
    {
      id: 2,
      text: {
        text_title: "PHONE - ",
        text_info_1: "+91 123 456 789 0, ",
        text_info_2: "+91 123 456 789 0",
      },
    },
    {
      id: 3,
      text: {
        text_title: "EMAIL - ",
        text_info_1: "info@gmail.com",
        text_info_2: "",
      },
    },
  ],
};

const footerContactSlice = createSlice({
  name: "footerContact",
  initialState,
  reducers: {},
});

export const {} = footerContactSlice.actions;
export default footerContactSlice.reducer;
