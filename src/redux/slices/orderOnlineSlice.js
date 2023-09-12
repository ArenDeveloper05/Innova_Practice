import { createSlice } from "@reduxjs/toolkit";
//images
import pizza1 from "../../assets/images/OrderOnline/filter-1.png"
import pizza2 from "../../assets/images/OrderOnline/filter-7.png"
import pizza3 from "../../assets/images/OrderOnline/filter-3.png"
import pizza4 from "../../assets/images/OrderOnline/filter-4.png"
import pizza5 from "../../assets/images/OrderOnline/filter-5.png"
import pizza6 from "../../assets/images/OrderOnline/filter-6.png"
import pizza7 from "../../assets/images/OrderOnline/filter-71.png"
import pizza8 from "../../assets/images/OrderOnline/filter-11.png"
import pizza9 from "../../assets/images/OrderOnline/filter-61.png"
import pizza10 from "../../assets/images/OrderOnline/filter-31.png"
import pizza11 from "../../assets/images/OrderOnline/filter-41.png"
import pizza12 from "../../assets/images/OrderOnline/filter-51.png"
import pizza13 from "../../assets/images/OrderOnline/filter-62.png"
import pizza14 from "../../assets/images/OrderOnline/filter-72.png"
import pizza15 from "../../assets/images/OrderOnline/filter-12.png"
import pizza16 from "../../assets/images/OrderOnline/filter-32.png"


const initialState = {
    filterButtons: [
        {
            id: 1,
            title: "Crust",
            options: [
                "Crust",
                "Crust-1",
                "Crust-2",
                "Crust-3",
            ]
        },
        {
            id: 2,
            title: "Price",
            options: [
                "Price",
                "$20",
                "$15",
                "$10",
            ]
        },
        {
            id: 3,
            title: "Size",
            options: [
                "Size",
                "Medium",
                "Regular",
                "Large",
            ]
        },
        {
            id: 4,
            title: "Cheeze",
            options: [
                "Cheeze",
                "Veg",
                "Cheeze",
                "Non-veg",
            ]
        },
        {
            id: 5,
            title: "Type",
            options: [
                "Type",
                "Neapolitan",
                "Chicago",
                "Greek",
            ]
        },
        {
            id: 6,
            title: "Flavour",
            options: [
                "Flavour",
                "Crust-1",
                "Crust-2",
                "Crust-3",
            ]
        },
    ],
    OrderOnlinePizzas: [
        {
            id: 1,
            image: pizza1,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 2,
            image: pizza2,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 3,
            image: pizza3,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 4,
            image: pizza4,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 5,
            image: pizza5,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 6,
            image: pizza6,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 7,
            image: pizza7,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 8,
            image: pizza8,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 9,
            image: pizza9,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 10,
            image: pizza10,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 11,
            image: pizza11,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 12,
            image: pizza12,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 13,
            image: pizza13,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 14,
            image: pizza14,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 15,
            image: pizza15,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
        {
            id: 16,
            image: pizza16,
            title: "Lorem Ipsum is simply dummy text of the",
            price: "$20.50",
            pizzaName: "MARGHERITAPIZZA"
        },
    ]
};

const orderOnlineSlice = createSlice({
    name: "orderOnline",
    initialState,
    reducers: {},
  });
  
  export default orderOnlineSlice.reducer;
  export const {} = orderOnlineSlice.actions;