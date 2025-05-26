import React from 'react'
import Image from "next/image";
import styles from '@/app/ui/hero.module.css';
import assets from '@/public';
import { hero } from '../data/data';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function Hero() {

  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

  const CourseContent = ({ course }) => (
    <div className={styles.boxDropdownRigth}>
      <h5>{course.title}</h5>
      <p>
        {course.description.map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
  

  return (
    <div className={styles.heroContainer}>
      <div className={styles.InnerContainer}>
        <Image className={styles.asterisk} src={assets.asterisk} width={50} height={50} alt='asterisk picture'/>
        <Image className={styles.smallAsterisk} src={assets.asterisk} width={50} height={50} alt='asterisk picture'/>
        <Image className={styles.ellipse} src={assets.circle} width={50} height={50} alt='ellipse picture'/>
        <Image className={styles.trap} src={assets.trap} width={150} height={150} alt='trap picture'/>
        <Image className={styles.hex} src={assets.yellowHex} width={180} height={180} alt='hex picture'/>
        <Image className={styles.simpleArrow} src={assets.arrow} width={50} height={50} alt='arrow simple'/>
        {/* {!isTabletOrMobile &&
        <>
        <Image className='hex' src={randomBackground=="grey" ? hexFull: hex} alt='hex picture'/>
        <Image className='arrow-transparent' src={arrowTransparent} alt='arrow transparent picture'/>
        </>
        } */}
        <div className={styles.containerHr}>
          {[...Array(4)].map((_, i) => (
            <hr key={i} className={styles.bordersHr} />
          ))}
        </div>
        <div className={styles.containerImagesAbsolute}>
          <div className={styles.boxCoursesHero}>
            <div className={styles.boxImagesAbsoluteDiferent}>
              <Image className={styles.minusLogo} src={assets.minus} width={75} height={75} alt="minus logo" />
              <Image className={styles.brotherLogo} src={assets.logo} width={430} height={430} alt="brother logo" />
            </div>
            <div className={styles.boxImagesAbsoluteDiferent}>
              <h1 className={styles.titleHero}>{hero.city}</h1>
              <Image className={styles.arrowTopRight} src={assets.arrow2} width={75} height={75} alt="arrow icon" />
            </div>
            <div className={styles.boxImagesAbsoluteDiferent}>
              <div className={styles.textContainer}>
                <h4 className={styles.subtitleHero}>{hero.subtitle}</h4>
              </div>
          </div>
          </div>

          <div className={styles.boxCoursesHeroSwiper}>
            <Image className={styles.dots} src={assets.dots} width={10} height={270} alt='bar dots picture'/>  
            <div className={styles.boxHex}>
              <div className={styles.staticHexBlock }>
                <Image className={styles.staticHex} src={assets.yellowHex} width={230} height={230} alt='hex picture'/>
                <p>Últimos<br/>lugares</p>
              </div>
            </div>

            {isMobile ? (
              <Swiper
              navigation={true} modules={[Navigation]}
              >
                {hero.courses.map((course, index) => (
                  <SwiperSlide key={index}>
                    <CourseContent course={course} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className={styles.desktopWrapper}>
                {hero.courses.map((course, index) => (
                  <CourseContent key={index} course={course} />
                ))}
              </div>
            )}

              <div className={styles.boxTransitioContainer}>
                <div className={styles.textTransitionBox}>
                  {hero.bannerMessages.map((text, i) => (
                    <p key={i} className={styles.textTransition}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
          </div>
        </div>
        <Image className={styles.arrowScroll} src={assets.arrowWhite} width={20} height={20} alt='simple arrow picture'/>
      </div>     
    </div>
  )
}

export default Hero