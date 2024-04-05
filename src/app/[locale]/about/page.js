import styles from "./About.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from "next/image";
import SecondSlider from "../SecondSlider";
import ScrollToTopButton from "@/app/ScrollToTopButton/ScrollToTopButton";
function About({
    params: {locale}
  }) {
    unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
    return (
        <>
            <Header
            home={t("home")}
            projects={t("projects")}
            about={t("about")}
            contact={t("contact")} 
            />
             <ScrollToTopButton/>
            <div className={styles.wrapper}>
            <div className={styles.headBlock}>
          <h1 className={styles.h1}>
            ABOUT <span className={styles.redh1}>US</span>
          </h1>
          <div className={styles.line}></div>
        </div>
                <div className={styles.content}>
                <div className={styles.cv}>
                <div className={styles.cvLeft}>
                <p className={styles.cvText1} >My tattoos are a reflection of my soul, where each line holds its significance, and every pattern tells its story. I create tattoos that forever stand as symbols of your uniqueness and individuality.
</p>
                    
                     <p className={styles.cvTextCitate} >Art is the same wind that breathes in the heart of every individual, waiting to be set free and revealed.</p>
                     <p className={styles.cvText1} >Each client is a unique canvas on which I strive to convey their ideas, emotions, and personality through my art. My goal is to make each tattoo project distinctive and meaningful for the client, allowing them to feel unique and special.</p>
                    
                    </div>
                    <div className={styles.cvRight}>
                    <Image
                        className={styles.imgAbout}
                        width={500}
                        height={380}
                        src="/about.jpg"
                        alt="blackman"
                    />
                    </div>
                    
                    </div>
                    <SecondSlider/>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
