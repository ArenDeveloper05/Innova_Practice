import { createSlice } from "@reduxjs/toolkit";
import chef1 from '../../images/chef-Slider/chef-1.jpg'
import chef2 from '../../images/chef-Slider/chef-2.jpg'
import chef3 from '../../images/chef-Slider/chef-3.jpg'
import chef4 from '../../images/chef-Slider/chef-4.jpg'

const initialState = {
  bestCheif: [
    {
        id: 1,
        title: 'Souse Chef',
        name: 'John Doe',
        photo: chef1
      },
      {
        id: 2,
        title: 'Sous Chef',
        name: 'John Doe',
        photo: chef2
      },
      {
        id: 3,
        title: 'Sous Chef',
        name: 'John Doe',
        photo: chef3
      },
      {
        id: 4,
        title: 'Sous Chef',
        name: 'John Doe',
        photo: chef4
      },
      {
        id: 5,
        title: 'Sous Chef',
        name: 'John Doe',
        photo: chef2
      },
      {
        id: 6,
        title: 'Sous Chef',
        name: 'John Doe',
        photo: chef2
      },
  ],
};

const bestCheifSlice = createSlice({
  name: "bestCheif",
  initialState,
  reducers: {},
});

export default bestCheifSlice.reducer;
export const {} = bestCheifSlice.actions;
