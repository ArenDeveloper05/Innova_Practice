import { createSlice } from "@reduxjs/toolkit";
import menu1 from "../../assets/images/menu-img-1.png"
import menu2 from "../../assets/images/menu-img-2.png";
import menu3 from "../../assets/images/menu-img-3.png";
import menu4 from "../../assets/images/menu-img-4.png";
import menu5 from "../../assets/images/menu-img-5.png";
import menu6 from "../../assets/images/menu-img-6.png";
import menu7 from "../../assets/images/menu-img-7.png";
import menu8 from "../../assets/images/menu-img-8.png";




const initialState = {
    menu: [
        {
            id: 1,
            image: menu1,
            title: "MARGERHITA PIZZA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "pizza",
        },
        {
            id: 2,
            image: menu2,
            title: "RUM WITH SODA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "drinks",
        },
        {
            id: 3,
            image: menu3,
            title: "CEASER SALAD",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "salads",
        },
        {
            id: 4,
            image: menu4,
            title: "SEA FOOD PASTA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "pastas",
        },
        {
            id: 5,
            image: menu5,
            title: "CHOCOLATE COOKIES",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "deserts"
        },
        {
            id: 6,
            image: menu6,
            title: "PEPPERONI PIZZA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "pizzas",
        },
        {
            id: 7,
            image: menu7,
            title: "BISMARK PIZZA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "pizzas",
        },
        {
            id: 8,
            image: menu8,
            title: "VALDOSTANA PIZZA",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            price: "$20.50",
            type: "pizzas",
        },
    ],
    buttons: [
        {
            id: 1,
            title: "ALL",
            type: "all"
        },
        {
            id: 2,
            title: "DRINKS",
            type: "drinks"
        },
        {
            id: 3,
            title: "SALADS",
            type: "salads"
        },
        {
            id: 4,
            title: "PASTA",
            type: "pastas"
        },
        {
            id: 5,
            title: "BURGERS",
            type: "burgers"
        },
        {
            id: 6,
            title: "DESERTS",
            type: "deserts"
        },
        {
            id: 7,
            title: "PIZZAS",
            type: "pizzas"
        },
    ]
}



const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        filteredState: (state, { payload }) => {
            console.log(payload.type);
            state.menu = state.menu.filter((item) => item.type === payload.type)

        }
    }
});

export default menuSlice.reducer;
export const { filteredState } = menuSlice.actions;