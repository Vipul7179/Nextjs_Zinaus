import styles from './expertise.module.css';

const Expertise = () => {
    return (
      <main>
      <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Expertise</h1>
        <div className={styles.underline}></div>
      </div>
    </section>

{/* top page title section start*********************** */}

<section className={styles.whyChooseUs}>
  <div className={styles.imagebox}>
      <div className={styles.imagesContainer}>
        <img src="/Images/experties_1.png" alt="Teamwork" className={styles.image} />
        <img src="/Images/experties_2.png" alt="Collaboration" className={styles.image} />
        
      </div>
      <div>
        <img src="/Images/experties_3.png" alt="Discussion" className={styles.image} />
        </div>

        </div>

      <div className={styles.textContainer}>
        {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
        <h2 className={styles.title2}>
        Innovating the Digital Future
        </h2>
        <p className={styles.description}>
        From web development to advanced app solutions, we specialize in creating seamless digital experiences. Our expertise spans game development, e-commerce, social casino gaming, and enterprise solutions, ensuring your business stays ahead in a fast-evolving market.
        </p>

        <button className={styles.playButton}>
          <span className={styles.playIcon}>▶</span> WORK WITH US
        </button>
      </div>
    </section>


{/* top page title section ends*********************** */}


    </main>
    );
  };
  
  export default Expertise;