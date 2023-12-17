import { createSlice } from "@reduxjs/toolkit";
import customer1 from "../../assets/images/Customers/customer1.jpg"
import customer2 from "../../assets/images/Customers/customer2.jpg"
import customer3 from "../../assets/images/Customers/customer3.png"
const initialState = {
    customers: [
    {
        id: 0,
        image: customer1,
        name: "JOHN DOE",
        comment: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much",
        proffesion: "designer"
    },
    {
        id: 1,
        image: customer2,
        name: "JOHN DOE",
        comment: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much",
        proffesion: "designer"
    },
    {
        id: 2,
        image: customer3,
        name: "JOHN DOE",
        comment: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much",
        proffesion: "designer"
    }
]};

const customerReviewsSlice = createSlice({
    name: "customerReviews",
    initialState,
    reducers: {},
  });
  
  export default customerReviewsSlice.reducer;
  export const {} = customerReviewsSlice.actions;