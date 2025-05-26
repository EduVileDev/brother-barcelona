import React from 'react';
import styles from '@/app/ui/Banner.module.css';
import Image from 'next/image';

export default function TransitionText({
  imageOne,
  imageTwo,
  textTransition,
  textColor = '#000',
  backgroundColor = 'transparent',
}) {
  return (
    <div
      className={styles.transitionTextContainer}
      style={{ backgroundColor }}
    >
      <div className={styles.transitionTrack}>
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex} className={styles.transitionInnerBox}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.transitionText}>
                <Image src={imageOne} width={40} height={40} alt="" />
                <Image src={imageTwo} width={40} height={40} alt="" />
                <p
                  className={styles.textBanner}
                  style={{ color: textColor }}
                >
                  {textTransition}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
