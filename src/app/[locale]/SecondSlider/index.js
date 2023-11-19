"use client"
import styles from './SecondSlider.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { Helmet } from 'react-helmet';
function SecondSlider({s5main,s5text1,s5text2,s5text3,s5name1,s5name2,s5name3}) {
     // --------------------------------------------
     const slides2= [
        {src:"/people2.webp" ,    p :s5text1 ,   name:s5name1},
        {src:"/peple1.webp",  p :s5text2 ,   name:s5name2},
        {src:"/people3.webp" , p :s5text3,   name:s5name3},
    ];
      const [currentIndex2,setСurrentIndex2]= React.useState(0);

      // Set up automatic slide transition
      useEffect(() => {
        const intervalId = setInterval(() => {
          goToNext2();
        }, 5000); // Change the delay time as needed
        return () => clearInterval(intervalId);
      }, [currentIndex2]);
    
      const goToPrevios2 = () => {
        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToNext2 = () => {
        const isLastSlide = currentIndex2 === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToSlide2 = (slideIndex) => {
        setСurrentIndex2(slideIndex);
      };
    
      
  return (
    <>
              <h2 className={styles.titleSlider}> {s5main}</h2>
                    <div  className={styles.slideStyles2} >
                    <div  className={styles.slideItem} >
                       <Image  height={150} width={150} src={slides2[currentIndex2].src} alt="peple"/> 
                       <h4>{slides2[currentIndex2].name}</h4>
                          <p>{slides2[currentIndex2].p}</p>
                          <div  className={styles.dotsContainer}>
              {slides2.map((item,slideIndex)=><div onClick={() => goToSlide2(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                          </div>
                        {/* <div className={styles.leftArrowStyles2} onClick={goToPrevios2}>
                        <Image height={22} width={22} src="/images/rarrow.png"  alt="arrow" />
                          </div>
                        <div className={styles.rightArrowStyles2} onClick={goToNext2}> 
                        <Image height={22} width={22} src="/images/larrow.png" alt="arrow" />
                          </div> */}
                    </div>
                    
    </>
  );
}
export default SecondSlider;
