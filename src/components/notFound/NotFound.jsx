import React from 'react'
import { Link } from 'react-router-dom'
import errorTop from "../../assets/images/notFound/error-img-top.png" 
import errorImg from "../../assets/images/notFound/error-img.png" 
//styles
import "./NotFound.scss"
const NotFound = () => {
  return (
    <section className='notFound'>
        <img src={errorTop} className="top" alt="error" />
        <img src={errorImg} alt="error" />
        <h1>Ooops! 404 - Page Not Found</h1>
        <Link to="/"><button>BACK TO HOME</button></Link>
    </section>
  )
}

export default NotFound