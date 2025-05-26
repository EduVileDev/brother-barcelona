'use client';
import React from 'react';
import styles from '@/app/ui/footer.module.css';
import Link from 'next/link';
import { footer } from '@/app/data/data';
import assets from '@/public';
import Image from 'next/image';
import { Titillium } from '../ui/font';
import { useMediaQuery } from 'react-responsive';


export default function Footer() {

  const renderLinks = () => (
    <div className={styles.routeFooter}>
      {footer.links.map(({ label, href }, index) => (
        <Link key={index} href={href}>{label}</Link>
      ))}
    </div>
  );

  const renderIcons = () => (
    <div className={styles.icons}>
      <Image className={`${styles.icon} ${styles.rotate}`} src={assets.email}  width={23} height={23} alt="mail icon" />
      <Image className={styles.icon} src={assets.instagram} width={25} height={25} alt="instagram icon" />
      <Image className={styles.icon} src={assets.globe} width={25} height={25} alt="web icon" />
    </div>
  );
  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });


  return (
    <div className={styles.footerContainer}>
      {!isMobile && renderLinks()}
      <div className={styles.infoFooter}>
        {isMobile ? (
          <>
              <div className={styles.footerInformation}>
                <div className={styles.iconFooterSection}>
                  <div className={styles.footerLogoSection}>
                    <Image src={assets.logo} alt="logo brothers" width={150} height={150} className={styles.imageLogo}/>
                    <p className={styles.textLogo}>ESCUELA DE CREATIVOS</p>
                  </div>
                </div>
                <p>
                  Calle Gran Vía 27, 28013 Madrid,<br />
                  +34 910 52 66 49 | +34 612 27 84 09<br />
                  madrid@brotherad.com
                </p>
                {renderIcons()}
                <div className={styles.boxMobileIcons}>
                  <div className={styles.iconInfo}>
                    <span>2021</span>
                    <span>Brother Madrid</span>
                  </div>
                  <p>Made by <b className={Titillium.className}>20DEDOS</b></p>
                </div>
              </div>
          </>

        ) : (
          <>
            <div className={styles.iconFooterSection}>
              {renderIcons()}
              <div className={styles.iconInfo}>
                <span>2021</span>
                <span>Brother Madrid</span>
              </div>
            </div>
            <div className={styles.footerLogoSection}>
              <Image src={assets.logo} alt="logo brothers" width={150} height={150} className={styles.imageLogo}/>
              <p className={styles.textLogo}>ESCUELA DE CREATIVOS</p>
            </div>
            <div className={styles.footerInformation}>
              <p>
                Calle Gran Vía 27, 28013 Madrid,<br />
                +34 910 52 66 49 | +34 612 27 84 09<br />
                madrid@brotherad.com
              </p>
              <p>Made by <b className={Titillium.className}>20DEDOS</b></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
