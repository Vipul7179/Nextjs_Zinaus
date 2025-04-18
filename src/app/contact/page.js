import styles from './contact.module.css';
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';

export default function Contact() {
    return (
      
      <div className={styles.contactContainer}>
      <section className={styles.contactheader}>
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/Images/contactbannerthumbnailwithout.png"  /* Fallback image while loading */
  className={styles.backgroundVideo}
>
  <source src="https://firebasestorage.googleapis.com/v0/b/kahaniya-52133.appspot.com/o/Sculpnova%2FSculpNova_thumbnail_compress.mp4?alt=media&token=b74e987f-23fe-4c06-90ff-4a75bac72211" type="video/mp4" />
  Your browser does not support the video tag.
</video>

  {/* <h1>Contact Us</h1> */}
</section>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          
        <h1 className="text-black font-semibold pb-2.5">Contact Us</h1>



          <div className={styles.addresscontainer}>
          <FaLocationDot size={20} style={{ marginRight: "8px" }} />
          <h2>Our Address:</h2>
          
          </div>
          <p>Lucknow Chowk<br />Lucknow - 226003</p>
          <div className={styles.phonecontainer}>
          <PiPhoneCallDuotone size={20} style={{ marginRight: "8px" }} />
          <h2>Our Phone:</h2>
         
          </div>
          <p className={styles.phone}>
  <Link href="tel:+18001236879">coming soon</Link>
</p>

          <div className={styles.mailcontainer}>
          <IoMdMail size={20} style={{ marginRight: "8px" }} />
          <h2>Our Mailbox:</h2>
          
          </div>
          <p className={styles.email}>
  <Link href="mailto:info.sculpnova@gmail.com">info.sculpnova@gmail.com</Link>
</p>
        </div>
        <div className={styles.contactRight}>
          <h2>Ready to Get Started?</h2>
          <form action="https://formspree.io/f/xvgkvzaa" method="POST">
  <input type="text" name="firstName" placeholder="First name" className={styles.input} />
  <input type="text" name="lastName" placeholder="Last name" className={styles.input} />
  <input type="email" name="email" placeholder="Eg. example@email.com" className={styles.input} />
  <input type="tel" name="phone" placeholder="Eg. +1 800 0000000" className={styles.input} />
  <textarea name="message" placeholder="Write a message" className={styles.textarea}></textarea>
  <button type="submit" className={styles.button}>SEND MESSAGE</button>
</form>

        </div>
      </div>
    </div>
    
  
    );
  }
  