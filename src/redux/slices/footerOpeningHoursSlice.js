import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footer_opening_hours_arr: [
    {
      id: 1,
      day: {
        day_title: "Mon - Tues :",
        day_hour: "6.00 am - 10.00 pm",
      },
    },
    {
      id: 2,
      day: {
        day_title: "Wednes - Thurs :",
        day_hour: "6.00 am - 10.00 pm",
      },
    },
    {
      id: 3,
      day: {
        day_title: "Launch :",
        day_hour: "Everyday",
      },
    },
    {
      id: 4,
      day: {
        day_title: "Sunday :",
        day_hour: "Closed",
      },
    },
  ],
};

const footerOpeningHoursSlice = createSlice({
  name: "footerOpeningHours",
  initialState,
  reducers: {},
});

export const {} = footerOpeningHoursSlice.actions;
export default footerOpeningHoursSlice.reducer;
