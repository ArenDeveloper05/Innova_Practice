import { createSlice } from '@reduxjs/toolkit'
import blog1 from '../../images/left-side-page/blog-3.jpg'
import blog2 from '../../images/left-side-page/blog-2.jpg'
import blog3 from '../../images/left-side-page/blog-1.jpg'
import recent1 from '../../images/left-side-page/recent-1.jpg'
import recent2 from '../../images/left-side-page/recent-2.jpg'
import recent3 from '../../images/left-side-page/recent-3.jpg'
const initialState = {
  leftSide: [
    {
      id: 1,
      image: blog1,
      orderBy: 'John Doe',
      comment: 0,
      title: 'POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION',
      message:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful'
    },
    {
      id: 2,
      image: blog2,
      orderBy: 'John Doe',
      comment: 0,
      title: 'NEW CHEESE CRUSTS ON PIZZAS',
      message:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful'
    },
    {
      id: 3,
      image: blog3,
      orderBy: 'John Doe',
      comment: 0,
      title: 'PEPPE`S LAUNCHES HEALTHY PIZZA FOR KIDS',
      message:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful'
    }
  ],
  leftSideTwo:[
    {
      id:1,
      image: recent1,
      date: 'SEPTEMBER 1, 2020',
      message: 'POSSESSION SO COMPARISON INQUIETU'
    },
    {
      id:2,
      image: recent2,
      date: 'SEPTEMBER 3, 2020',
      message: 'OFFERS MADE SPECIALLY FOR KIDS'
    },
    {
      id:3,
      image: recent3,
      date: 'SEPTEMBER 10, 2020',
      message: 'OUR WONDERFULLY PIZZA NEW TASTES'
    }
  ]
}

const leftSideSlice = createSlice({
  name: "leftSide",
  initialState,
  reducers: {},
});

export default leftSideSlice.reducer;
export const {} = leftSideSlice.actions;