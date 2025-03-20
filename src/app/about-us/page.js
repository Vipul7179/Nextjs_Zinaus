import styles from './about.module.css';

const AboutUs = () => {
    return (
  <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.underline}></div>
      </div>
    </section>
    
    );
  };
  
  export default AboutUs;