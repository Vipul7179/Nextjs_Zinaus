"use client";
import styles from './career.module.css';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { GoToTop } from "../components/GoToTop";

const Career = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 }); // Adjust the duration as needed
  }, []);
    return (
      <main>
      <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Career</h1>
        <div className={styles.underline}></div>
      </div>
    </section>

{/* main title start************************* */}

<section className={styles.servicesSection}>
      <p className={styles.servicesTitlee}>Why Choose us?</p>
      <h1 className={styles.servicesHeading}>
      We value growth and learning, fostering a diverse team focused on skill enhancement and passion. Join us for a motivating, development-driven environment.
      </h1>
    </section>

{/* main title end****************************** */}

{/* perks section start************************* */}

<div className={styles.perksSection}>
            <h2 className={styles.titlee}>PERKS WE OFFER</h2>
            <p className={styles.subtitle}>For that perfect balance you have been seeking</p>
            <div className={styles.perksContainer}  data-aos="zoom-in">
                <div className={styles.perkCard}>
                    <div className={styles.icon}>🕰️</div>
                    <h3>Flexible Work Hours</h3>
                </div>
                <div className={styles.perkCard}>
                    <div className={styles.icon}>💰</div>
                    <h3>Competitive Compensation</h3>
                </div>
                <div className={styles.perkCard}>
                    <div className={styles.icon}>🌟</div>
                    <h3>Industry Exposure & Self-Growth</h3>
                </div>
                <div className={styles.perkCard}>
                    <div className={styles.icon}>🏢</div>
                    <h3>Healthy Work Environment</h3>
                </div>
            </div>
        </div>
         {/* contact section************************************ */}

<div className={styles.connectSection}>
      <div className={styles.connect}>
        <h4>Are you a fresher?</h4>
        <h1>Join our family and kickstart your career with us!</h1>

        <div className={styles.serviceButton}>
  <div className={styles.serviceText}>
    <a href="/contact" className={styles.textWhite}>APPLY NOW</a>
  </div>
</div>


      </div>
    </div>

    {/* contact section end********************************* */}

        <GoToTop />

{/* perks nd ********************************* */}

    </main>
    );
  };
  
  export default Career;