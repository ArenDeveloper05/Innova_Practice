
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BestChefSlider.scss'
import 'swiper/css'
import { useSelector } from 'react-redux';

const BestChefSlider = () => {
  const bestCheif = useSelector((state) => {
    return state.bestCheif.bestCheif;
  });
  return (
    <div className='BestChefSlider'>
      <section className='BestChefSlider-Section'>
        <p className='BestChefSlider-textOne'>Meet our experts</p>
        <p className='BestChefSlider-textTwo'>Our Best Chef</p>
        <div>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          speed = {1000}
          autoplay={{ delay: 2000 }}
          loop={true}
          >
            {bestCheif.map(({ id, title, name, photo }) => (
              <SwiperSlide key={id}>
                <div id={id} className='BestChefSlider-Section-Chefs'>
                  <img alt={title} src={photo} />
                  <div>
                  <nav>
                    <p className='BestChefSlider-Section-Chefs-Name'>{name}</p>
                    <p className='BestChefSlider-Section-Chefs-Chef'>{title}</p>
                  </nav>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default BestChefSlider
