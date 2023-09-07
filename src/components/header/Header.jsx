import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import headerLogo from "../../assets/Icons/header-logo.png"
//icons
import {BsTelephone} from "react-icons/bs" 
import {SlHandbag} from "react-icons/sl"
//images
import pepperoni from "../../assets/images/MenuImages/menuModalPizzas/pepperoni.png"
import ham from "../../assets/images/MenuImages/menuModalPizzas/ham.png"
import margherita from "../../assets/images/MenuImages/menuModalPizzas/margherita.png"
import onion from "../../assets/images/MenuImages/menuModalPizzas/onion.png"
import speciality from "../../assets/images/MenuImages/menuModalPizzas/speciality.png"
import vegetarian from "../../assets/images/MenuImages/menuModalPizzas/vegetarian.png"
//styles
import "./Header.scss"

const Header = () => {
    const headerRef = useRef()

    document.addEventListener("scroll", (event) => {
        if (window.scrollY > 0) { 
            headerRef.current.className = "headerScrolled"
        } else {
            headerRef.current.className = "headerNthScrolled"
        }
    } )
  return (
    <header ref={headerRef}>
        <div className="header-section">
        <Link to="/"><img src={headerLogo} alt="" /></Link>
        <nav>
            <ul>
                <li className='menu'><Link to="/">HOME</Link></li>
                <li className='menu'><Link to="/menu">
                    MENU
                    <div className="menu-modal" style={{display: "none"}}>
                        <div className="menu-modal-pizzas">
                            <div className="menu-modal-pizzas-images">
                                <img src={pepperoni} alt="Pepperoni" />
                                <div className="menu-modal-pizzas-images-info">
                                    <h4>Pepperoni</h4>
                                    <p>$12.99</p>
                                </div>
                            </div>
                            <div className="menu-modal-pizzas-images">
                                <img src={vegetarian} alt="Vegetarian" />
                                <div className="menu-modal-pizzas-images-info">
                                    <h4>Vegetarian</h4>
                                    <p>$12.99</p>
                                </div>
                            </div>
                            <div className="menu-modal-pizzas-images">
                                <img src={speciality} alt="Speciality" />
                                <div className="menu-modal-pizzas-images-info">
                                <h4>Speciality</h4>
                                <p>$12.99</p>
                                </div>
                            </div>
                            <div className="menu-modal-pizzas-images">
                                <img src={ham} alt="ham" />
                                <div className="menu-modal-pizzas-images-info">
                                <h4>Ham & Che...</h4>
                                <p>$12.99</p>
                                </div>
                            </div>
                            <div className="menu-modal-pizzas-images">
                                <img src={onion} alt="Onion" />
                                <div className="menu-modal-pizzas-images-info">
                                <h4>Onion</h4>
                                <p>$12.99</p>
                                </div>
                            </div>
                            <div className="menu-modal-pizzas-images">
                                <img src={margherita} alt="Margherita" />
                            <div className="menu-modal-pizzas-images-info">
                                <h4>Margherita...</h4>
                                <p>$12.99</p>
                            </div>
                            </div>
                        </div>
                        <div className="menu-modal-info">
                            <ul>
                                <li> <div className="list-square"></div> <Link to="">Menu list</Link></li>
                                <li> <div className="list-square"></div> <Link to="">Menu grid</Link></li>
                                <li> <div className="list-square"></div> <Link to="">Special Pizza</Link></li>
                                <li> <div className="list-square"></div> <Link to="">All pizza</Link></li>
                            </ul>
                        </div>
                    </div>
                </Link></li>
                <li className='blog'><Link to="/blog">
                    BLOG
                    <div className="blog-modal" style={{display: "none"}}>
                        <ul>
                            <li> <div className="list-square"></div> <Link>Blog Leftside</Link></li>
                            <li> <div className="list-square"></div> <Link>Blog Rightside</Link> </li>
                            <li> <div className="list-square"></div> <Link>Blog Detail</Link></li>
                        </ul>
                    </div>
                </Link></li>
                <li><Link to="/reservation">RESERVATION</Link></li>
                <li className="pages"><Link to="/pages">
                    PAGES
                    <div className="pages-modal" style={{display: "none"}}>
                        <ul>
                            <li> <div className="list-square"></div> <Link to="">About Us</Link></li>
                            <li> <div className="list-square"></div> <Link to="">Contact</Link></li>
                            <li> <div className="list-square"></div> <Link to="">Shop Grid</Link></li>
                            <li> <div className="list-square"></div> <Link to="">404</Link></li>
                        </ul>
                    </div>
                </Link></li>
                <li><BsTelephone /> <span>+91 123 456 789</span></li>
                <li><SlHandbag /><span>0 items-$0.00</span></li>
            </ul>
            <button>ORDER ONLINE</button>
        </nav>
        </div>
    </header>
  )
}

export default Header