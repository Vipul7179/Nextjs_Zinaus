import styles from './career.module.css';

const Career = () => {
    return (
      <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Career</h1>
        <div className={styles.underline}></div>
      </div>
    </section>
    );
  };
  
  export default Career;