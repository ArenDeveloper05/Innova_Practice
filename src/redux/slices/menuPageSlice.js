import { createSlice } from "@reduxjs/toolkit";
import pizza1 from "../../assets/images/MenuImages/list-1.jpg"
import pizza2 from "../../assets/images/MenuImages/list-2.jpg"
import pizza3 from "../../assets/images/MenuImages/list-3.jpg"
import pizza4 from "../../assets/images/MenuImages/list-4.jpg"
import pizza5 from "../../assets/images/MenuImages/list-5.jpg"
import pizza6 from "../../assets/images/MenuImages/list-6.jpg"
import pizza7 from "../../assets/images/MenuImages/list-7.jpg"
import pizza8 from "../../assets/images/MenuImages/list-8.jpg"
import pizza9 from "../../assets/images/MenuImages/list-9.jpg"



const initialState ={
    filteredItems:[
        {
                img: pizza1,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]
            },
            {
                img: pizza2,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza3,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "SALADS",
                ing:["Chicken","Olive Oil","Salt"]
            },
            {
                img: pizza4,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "BURGERS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza5,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                ing1: "Chicken",
                ing2: "Olive Oil",
                ing3: "Salt",
                type: "PASTA",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza6,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza7,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "DRINKS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza8,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "SALADS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza9,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "DESERTS",
                ing:["Chicken","Olive Oil","Salt"]

            },],
    menuPage: [
        {
                img: pizza1,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]
            },
            {
                img: pizza2,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza3,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "SALADS",
                ing:["Chicken","Olive Oil","Salt"]
            },
            {
                img: pizza4,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "BURGERS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza5,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                ing1: "Chicken",
                ing2: "Olive Oil",
                ing3: "Salt",
                type: "PASTA",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza6,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "PIZZAS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza7,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "DRINKS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza8,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "SALADS",
                ing:["Chicken","Olive Oil","Salt"]

            },
            {
                img: pizza9,
                name: "BARBECUE PIZZA",
                details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
                type: "DESERTS",
                ing:["Chicken","Olive Oil","Salt"]

            },]
}


const menuPageSlice =createSlice({
    
    name: "menuPage",
    initialState,
    reducers: {
        menuPageFilter(state, {payload}){
                console.log(payload.type);
                console.log(state.menuPage.filter((item) => item.type === payload.type));
                if(payload.type==="ALL")
                        {
                         state.filteredItems = state.menuPage;
                        }
                else{
                state.filteredItems = state.menuPage.filter((item) => item.type === payload.type)
                            }
            }
                }
                })


export const {menuPageFilter} = menuPageSlice.actions;
export default menuPageSlice.reducer;