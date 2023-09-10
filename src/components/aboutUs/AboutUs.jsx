import React from 'react'
import { Link } from 'react-router-dom'
//images
import backgroundImage from "../../assets/images/AboutUs/background.jpg"
import aboutPizzon from "../../assets/images/AboutUs/about-1.jpg"
import story from "../../assets/images/AboutUs/story.png"
import experience from "../../assets/images/AboutUs/experience.jpg"
import CustomerReviews from '../customerReviews/CustomerReviews'
import background from "../../images/sliderBackgroundImage.png"
//icons
import { BsPlayCircle } from "react-icons/bs"
//styles
import "./AboutUs.scss"
import BookOnline from '../home/bookOnline/BookOnline'

const AboutUs = () => {
    return (
        <section className='aboutUs-section'>
            <div className="aboutUs">
                <div className="aboutUs-heading-modal" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="aboutUs-heading">
                        <h1>About Us</h1>
                        <div className="aboutUs-heading-pages">
                            <Link to="/">Home </Link>
                            <span>/</span>
                            <span>About Us</span>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-pizzon">
                    <div>
                        <img src={aboutPizzon} alt="Pizzon" />
                        <div className="aboutUs-pizzon-title">
                            <h2>Delicious Restaurant</h2>
                            <h1>ABOUT PIZZON</h1>
                            <span>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</span>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-story">
                    <div>
                        <h2>Discover</h2>
                        <h1>OUR STORY</h1>
                        <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                        </span>
                        <img src={story} alt="Signature" />
                    </div>
                </div>
                <div className="aboutUs-experience">
                    <div>
                        <div className="aboutUs-experience-image">
                            <BsPlayCircle className='play-icon' />
                            <img src={experience} alt="Experience" />
                            <div></div>
                        </div>
                        <div className="aboutUs-experience-title">
                            <h2>Modern Cuisine</h2>
                            <h1>EXPERIENCE</h1>
                            <span>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</span>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-experience-reviews">
                    <CustomerReviews style={{backgroundImage: `url(${background})`}} />
                </div>
                <div className="aboutUs-experience-book">
                    <BookOnline />
                </div>
            </div>
        </section>
    )
}

export default AboutUs