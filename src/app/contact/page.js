import styles from './contact.module.css';

export default function Contact() {
    return (
      
      <div className={styles.contactContainer}>
      <section className={styles.contactheader}>
        <h1>Contact Us</h1>
      </section>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          <h2>Address</h2>
          <p>Mada Center 8th floor, 379 Hudson St,<br />New York, NY 10018 US</p>
          <h2>Let's Talk</h2>
          <p className={styles.phone}>+1 800 1236879</p>
          <h2>General Support</h2>
          <p className={styles.email}>contact@example.com</p>
        </div>
        <div className={styles.contactRight}>
          <h2>Ready to Get Started?</h2>
          <form>
            <input type="text" placeholder="First name" className={styles.input} />
            <input type="text" placeholder="Last name" className={styles.input} />
            <input type="email" placeholder="Eg. example@email.com" className={styles.input} />
            <input type="tel" placeholder="Eg. +1 800 0000000" className={styles.input} />
            <textarea placeholder="Write a message" className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
    
  
    );
  }
  