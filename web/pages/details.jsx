import Image from "next/Image";
import Layout from "../components/layout/layout";
import styles from "/styles/details.module.scss";
import { usePortfolio } from "../contextApi/context";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import 'swiper/css/navigation';
import { useRouter } from "next/router";
import Skills from "../components/shareds/skills";
import stylesSkill from "../styles/skills.module.scss";
import Botn from "../components/shareds/buton";

export default function Details() {
  const { details } = usePortfolio();
  const router = useRouter()
  const swiper = useSwiper();

  return (
    <>
      <Layout>
        <div className={styles.arrow}>
          <div className="container">
            <i className="bi bi-arrow-left"
              onClick={() => router.push("/")}
            ></i>
          </div>
        </div>
        <section className={styles.sectionDetails}>

          <div className="container">
            <div className={styles.containerDetails}>
              {
                details.map((item) => {
                  return (
                    <>
                      <section className={styles.containerDetailsTexto}>
                        <div className={styles.containerTitle}>
                          <h2>{item.title}</h2>
                          <i className="bi bi-file-code"></i>
                        </div>
                        <p>{item.text}</p>
                        <div>
                          <span>Repositorio </span>
                          <Botn>
                            Demo
                          </Botn>
                        </div>
                      </section>
                    </>
                  )
                })
              }
              <section className={styles.containerSlider}>
                <Swiper
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    1440: {
                      slidesPerView: 1,
                      spaceBetween: 20,

                    }

                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  }}
                  freeMode={true}
                  modules={[Autoplay, Navigation]}
                  initialSlide={1}
                  spaceBetween={0}
                  centeredSlides={true}

                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
                  {
                    details.map((item, i) => {
                      return (
                        <div key={i} >
                          {
                            item.imagen.map((img, i) => {
                              return (
                                <SwiperSlide key={i}>
                                  <Image className="imgSlider" src={img} alt="" width={200} height={200} />
                                </SwiperSlide>
                              )

                            })
                          }

                        </div>

                      )
                    })
                  }
                  <div className="swiper-button-next next-prev-details" />
                  <div className="swiper-button-prev next-prev-details" />
                </Swiper>

              </section>
            </div>
            <section className={styles.containerSkills}>
              <h2>Tecnologias usadas</h2>
              <Skills children={details} background={"#fff"} >
                {
                  details.map((item, i) => {
                    return (
                      <div key={i} className={stylesSkill.contentSkill}>
                        {
                          item.Project.Skills.map((skill) => {
                            return (
                              <div key={i} className={`${stylesSkill.skill} ${styles.skillDetails}`}>
                                <p>{skill.nombre}</p>
                                <div><img src={skill.link} /></div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )

                  })
                }

              </Skills>
            </section>
          </div>
        </section>

      </Layout>
    </>
  );
}
