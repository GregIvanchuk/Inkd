"use client";
import styles from "./Section1.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Section1({button,s1title,s1text}) {
    const locale = useLocale();
    

    return (
        
           
        <div className={styles.section3}>
             <Image
                        className={styles.favorImg}
                        width={500}
                        height={380}
                        src="/img1h.jpg"
                        alt="blackman"
                    />
        <div className={styles.ourServicesContainer}>
            <h1 className={styles.h1}>
            {/* {s1title} */}
            SERVICE BEYOND
            <span className={styles.span} > EXPECTATION </span>
            </h1>
            <div className={styles.line}></div>
            <h2 className={styles.mainText}>
                {/* {s1text} */}
                Welcome to our tattoo studio! We specialize in creating unique and personalized tattoos that reflect your individual style and story. Our talented artists are dedicated to providing you with high-quality artwork in a clean and professional environment. Whether you're looking for bold and vibrant designs or intricate and delicate patterns, we're here to bring your vision to life. Explore our gallery for inspiration or book a consultation to discuss your ideas with our team. Let us help you make your tattoo dreams a reality!
            </h2>
            <Link className={styles.link} href={`/${locale}/about`}>
                <button className={styles.buttonBlack}>
                  {button}
                </button>
            </Link>
        </div>
    </div>
            
           
    );
}
