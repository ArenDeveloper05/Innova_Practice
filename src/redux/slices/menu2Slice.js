import { createSlice } from "@reduxjs/toolkit";
import pizza1Row from "../../assets/images/Menu2Images/pizza1.jpg"
import pizza2Row from "../../assets/images/Menu2Images/pizza3.jpg"
import pizza3Row from "../../assets/images/Menu2Images/pizza5.jpg"
import pizza4Row from "../../assets/images/Menu2Images/pizza7.jpg"
import pizza5Row from "../../assets/images/Menu2Images/pizza9.jpg"
import pizza6Row from "../../assets/images/Menu2Images/pizza11.jpg"

const initialState = {
    pizzasMenu: [
        {
            id: 1,
            image: pizza1Row,
            title: "BARBECUE PIZZA",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: true,
            pastas: false,
            burgers: true,
            deserts: false,
            pizzas: true
        },
        {
            id: 2,
            image: pizza1Row,            
            title: "CHICKEN BREAST",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: true,
            salads: false,
            pastas: false,
            burgers: true,
            deserts: true,
            pizzas: true,
        },
        {
            id: 3,
            image: pizza2Row,
            title: "TRIPLE CROWN",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: true,
            salads: true,
            pastas: false,
            burgers: true,
            deserts: false,
            pizzas: true,
        },
        {
            id: 4,
            image: pizza2Row,
            title: "GREEK PIZZA",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: true,
            salads: false,
            pastas: true,
            burgers: true,
            deserts: false,
            pizzas: true,
        },
        {
            id: 5,
            image: pizza3Row,
            title: "CHICKEN BREAST",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: false,
            pastas: true,
            burgers: true,
            deserts: true,
            pizzas: true,
        },
        {
            id: 6,
            image: pizza3Row,
            title: "FRESH VEGGIE",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: true,
            pastas: true,
            burgers: false,
            deserts: false,
            pizzas: true,
        },
        {
            id: 7,
            image: pizza4Row,
            title: "TRIPLE CROWN",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: true,
            salads: true,
            pastas: false,
            burgers: true,
            deserts: false,
            pizzas: true,
        },
        {
            id: 8,
            image: pizza4Row,
            title: "GREEK PIZZA",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: true,
            pastas: true,
            burgers: false,
            deserts: false,
            pizzas: true,
        },
        {
            id: 9,
            image: pizza5Row,
            title: "PANEER MAKHANI",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: true,
            salads: true,
            pastas: true,
            burgers: false,
            deserts: false,
            pizzas: true,
        },
        {
            id: 10,
            image: pizza5Row,
            title: "GREEK PIZZA",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: true,
            pastas: false,
            burgers: false,
            deserts: true,
            pizzas: true,
        },
        {
            id: 11,
            image: pizza6Row,
            title: "BARBECUE PIZZA",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: false,
            pastas: false,
            burgers: false,
            deserts: true,
            pizzas: true,
        },
        {
            id: 12,
            image: pizza6Row,
            title: "CHEESE CORN",
            info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
            price: "$20.00",
            drinks: false,
            salads: false,
            pastas: false,
            burgers: false,
            deserts: true,
            pizzas: true,
        }
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

const menu2Slice = createSlice({
    name: "menu2",
    initialState,
    reducers: {
        filteredMenu2State: (state, { payload }) => {
            if (payload.type === "all") {
                state.pizzasMenu = initialState.pizzasMenu
                return state
            }
            state.pizzasMenu = initialState.pizzasMenu.filter((item) => item[payload.type])
                return state
        }
    }
});

export default menu2Slice.reducer;
export const { filteredMenu2State } = menu2Slice.actions;