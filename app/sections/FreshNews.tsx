import React from 'react'
import styles from '@/app/ui/freshNews.module.css';
import BannerTransitions from '@/app/components/BannerTransitions';
import Image from 'next/image';
import { newsData } from '../data/data';
import assets from '@/public';
import { useMediaQuery } from 'react-responsive';


function FreshNews() {

  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

  return (
  <div className={styles.newsContainer}>
      <Image className={styles.cloud} src={assets.cloud} width={300} height={300} alt="nube" />
      <Image className={styles.asterisk} src={assets.asterisk} width={100} height={100} alt="asterisco" />
      {/* {!isMobile && <Image className={styles.magentaCircle} src={magentaCircle} alt="círculo magenta" />} */}
      <Image className={styles.magentaCircle} src={assets.circle2} width={40} height={40} alt="círculo magenta" />
      <Image className={styles.greyCloud} src={assets.cloud} width={250} height={250} alt="nube gris" />
      <Image className={styles.ellipse} src={assets.circle} width={250} height={250} alt="elipse" />

      {isMobile && (
        <>
          <Image className={styles.cloudCopy} src={assets.cloud} width={250} height={250} alt="nube copia" />
          <Image className={styles.greyCloudCopy} src={assets.cloud} width={250} height={250} alt="nube gris copia" />
          <Image className={styles.asteriskCopy} src={assets.asterisk} width={100} height={100} alt="asterisco copia" />
        </>
      )}

      <div className={styles.newsInnerContainer}>
        <h4 className={styles.newsTitle}>Noticias Frescas</h4>
        <div className={styles.newsImagesContainer}>
          {newsData.map((item, index) => (
            <div key={index} className={styles.newsBoxImage}>
              <Image src={item.image} alt={`Noticia ${index + 1}`} width={250} height={180}/>
              <p className={styles.newsItemTitle}>{item.info}</p>
              <div className={styles.newsDate}>
                <p>Publicado 04/04/2020</p>
                <p>·</p>
                <div className={styles.readMore}>
                  <p>Leer más</p>
                  <Image className={styles.arrowCard} src={assets.arrowWhite} width={10} height={10} alt="flecha" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BannerTransitions 
      imageOne={assets.smile} 
      imageTwo={assets.whiteArrow} 
      textTransition="Revisá todas las noticias" 
      textColor="white"
      backgroundColor="#FF1F57"
      />
  </div>
  )
}

export default FreshNews