
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination ,Navigation} from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';

import { usePortfolio } from "../../contextApi/context";
import Card from '../shareds/cards';

import styles from "../../styles/certificated.module.scss";


const Certificated = () => {
    const swiper = useSwiper();
    const { list } = usePortfolio();
    return (
        <section className={styles.containerCertificated} id="Certificates">
            <section className='container'>           
                <div className={styles.containerTitle}>
                        <h1>Certificates</h1>                 
                    
                    </div>
                <div className={styles.containerSlider}>
                    <Swiper
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                
                            }

                        }}
                        navigation={{
                            nextEl:".swiper-button-next",
                            prevEl:".swiper-button-prev"
                        }}
                        freeMode={true}
                        modules={[ Autoplay,Navigation]}
                        initialSlide={1}                  
                        spaceBetween={20}
                        centeredSlides={true}
                    
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {
                            list.map((item, i) => {
                                return (
                                    <div key={i} className="containerSLide">
                                        {
                                            item.Certificateds.map((certificated, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <Card
                                                            img={certificated.logo}
                                                            height={80}
                                                            title={certificated.title}
                                                            paragraph={certificated.company}
                                                            width={80}
                                                        >
                                                        </Card>
                                                    </SwiperSlide>

                                                )

                                            })
                                        }

                                    </div>

                                )
                            })
                        }
                
                    </Swiper>
                        <div className="swiper-button-next next-prev-details-Certificates" />
                        <div className="swiper-button-prev next-prev-details-Certificates" />               

                </div>
              </section>       
        </section>
    )
}
export default Certificated