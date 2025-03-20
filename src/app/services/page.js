import styles from './services.module.css';

const Services = () => {
    return (
      <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.underline}></div>
      </div>
    </section>
    );
  };
  
  export default Services;