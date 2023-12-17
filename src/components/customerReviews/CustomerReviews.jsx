import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
//images
import top from "../../assets/images/menu-top-bg.png"
import bottom from "../../assets/images/menu-bottom-bg.png"
//styles
import "./CustomerReviews.scss"

const CustomerReviews = () => {
    const customers = useSelector(state => state.customerReviews.customers)
    console.log(customers);
  return (<>
    <section className='customer-reviews-section' >
        <div className="customer-reviews">
        <img src={top} alt="top" className='top'/>
            <h2>What Say Our Clients</h2>
            <h1>CUSTOMER REVIEWS</h1>
            <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed = {1000}
        autoplay={{ delay: 3000, reverseDirection: false,  disableOnInteraction: false, }}
        loop={true}
        direction="vertical"
        effect='slide'
        pagination={{ clickable: true }}
        className="customer-reviews-slider"
        >
            {customers.map(({image, name, comment, proffesion}, index) => {
                return (
                <SwiperSlide key={index} className={`slider-page`}>
                    <div className={`customer-reviews-slider-page`}>
                        <div className="customer-reviews-slider-page-user">
                            <div className="customer-reviews-slider-page-user-image">
                                <img src={image} alt="user" />
                            </div>
                            <span>{name}</span>
                        </div>
                        <div className="customer-reviews-slider-page-comment">
                            <div className="arrow-left"></div>
                            <p>{comment}</p>
                            <span><b>{name}</b> - {proffesion}</span>
                        </div>
                    </div>
                </SwiperSlide>
                )
            })}   
        </Swiper>
        <img src={bottom} alt="bottom" className='bottom' />
        </div>
    </section>
  
  </>
  )
}

export default CustomerReviews