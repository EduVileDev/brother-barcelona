import React from 'react'
import styles from '@/app/ui/coursesWork.module.css'
import assets from '@/public';
import Image from 'next/image';
import { workshops } from '../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation} from 'swiper/modules';
import BannerTransitions from '@/app/components/BannerTransitions';
import { useMediaQuery } from 'react-responsive';

function CoursesAndWorkshops() {

  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });


  return (
    <div className={styles.courseContainer}>
    <Image className={styles.trap} src={assets.trap} width={200} height={200} alt="trap picture" />
    <Image className={styles.cloud} src={assets.cloud} width={550} height={550} alt="cloud picture" />

    <div className={styles.courseInnerContainer}>
      <div className={styles.courseBoxLeft}>
        <p className={styles.courseTitle}>
          Mucho más <br /> que una escuela de <br />
          <b><span>creativos</span></b>
        </p>
        <p className={styles.courseDescription}>
          Un Brother es alguien que <span>piensa continuamente</span>, inquieto, <b>curioso</b> y reflexivo.<br /><br />
        </p>
        <p className={styles.courseDescription}>Que se <span>plantea preguntas</span> y busca las respuestas. Un Brother es alguien que se abre camino, proactivo, que tiene iniciativas, que <b>busca oportunidades.</b></p>
        <p className={styles.courseDescription}>Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea y que si gana, sigue a por más.</p>
        <p className={styles.courseDescription}>Y si pierde, <b>no se rinde <span>jamás.</span></b></p>
      </div>
      <div className={styles.courseBoxRight}>
        <Image className={styles.hex} src={assets.hex} width={250} height={250} alt="hexFull picture" />
        <Image className={styles.asterisk} src={assets.asterisk} width={60} height={60} alt="asterisk picture" />
        <h4 className={styles.courseTitle}>Cursos & Workshops</h4>
        <div className={styles.workshopBoxContainer}>
          <div className={styles.wrapper}>
            <Swiper
              direction="vertical"
              slidesPerView={isMobile ? 2 : 3}
              grid={{ rows: 2, fill: 'row' }}
              spaceBetween={10}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Grid, Navigation]}
            >
              {workshops.map((item, idx) => (
                <SwiperSlide key={idx} className={styles.swiperSlide}>
                  <div className={styles.boxItemSwiper}>
                    <Image src={item.image} alt={item.info} width={140} height={140}/>
                    <p className={styles.itemSwiper}>{item.info}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.navButtons}>
              <div className="swiper-button-prev">
                <Image className={styles.swiperButtonPrev} src={assets.arrowBlack} width={23} height={23} alt="arrow icon" />
              </div>
              <div className="swiper-button-next">
                <Image className={styles.arrowScrollUp} src={assets.arrowBlack} width={30} height={30} alt="arrow icon" />
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <BannerTransitions 
      imageOne={assets.yellowArrow} 
      imageTwo={assets.bearYellow} 
      textTransition="Chequea todos los cursos" 
      textColor="#E1DF3C"
      backgroundColor="#000000"
      />
    </div>
  )
}

export default CoursesAndWorkshops