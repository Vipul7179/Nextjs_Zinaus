
"use client";
import styles from './services.module.css';
import { GoToTop } from "../components/GoToTop";
import Link from 'next/link';


const Services = () => {
    return (
      <main>
      <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.underline}></div>
      </div>
    </section>
    {/* header title section start */}
    <section className={styles.servicesSection}>
      <p className={styles.servicesTitle}>Explore our services</p>
      <h1 className={styles.servicesHeading}>
      Unlock the power of data, design, and engineering to fuel innovation and drive meaningful outcomes for your business.
      </h1>
    </section>
    {/* header title section end  */}


{/* servies card grid start********************************* */}

<div className={styles.servicesGrid}>
      <div className={styles.serviceCard}>
        <img
          src="/Our_services/Ecommerce.jpg"
          alt="E-commerce"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>E-commerce</h3>
          <p className={styles.serviceDescription}>
          We offer a seamless e-commerce platform with intuitive navigation, secure payments, fast delivery, and a smooth checkout, along with mobile optimization and order tracking.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/mobile_apps.jpg"
          alt="Mobile_apps"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Mobile App Development (iOS & Android)</h3>
          <p className={styles.serviceDescription}>
          We create high-performance, user-friendly mobile apps for both iOS and Android, ensuring seamless functionality, security, and scalability across all devices.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/casino_games.jpg"
          alt="Social_casino_gaming"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Social Casino Gaming Platform</h3>
          <p className={styles.serviceDescription}>
          We develop engaging social casino games with fun, interactive experiences. Our custom solutions ensure exciting gameplay, smooth performance, and social features to stand out.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/web_development.jpg"
          alt="Web_development"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Web Development</h3>
          <p className={styles.serviceDescription}>
          We develop custom web applications with innovative, scalable solutions. Our expert team builds high-performance apps tailored to your business, enhancing user experience and driving growth.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/QA.jpg"
          alt="Quality_assurance"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Quality Assurance & Testing Solutions</h3>
          <p className={styles.serviceDescription}>
          We offer comprehensive QA testing, including manual, automation, and API performance testing, ensuring bug-free, reliable, and high-performance products across all platforms.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/video_photo_shoot.jpg"
          alt="Video_photo_graphy"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Photography & Video Content for Promotions</h3>
          <p className={styles.serviceDescription}>
          We provide professional photography and video content for promotions, creating high-quality product shoots and captivating ads that enhance engagement and boost your brand.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/crm.jpg"
          alt="CRM"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>CRM SOFTWARE</h3>
          <p className={styles.serviceDescription}>
          CRM is the most crucial part of IT services required in promoting business, which our technical experts conduct enabling the commercial entity to retrieve its past genuine customers via high quality CRM software.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/billing_software.webp"
          alt="Billing_Software"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>BILLING SOFTWARE</h3>
          <p className={styles.serviceDescription}>
          We develop intuitive billing software solutions that streamline invoicing, payment processing, and financial tracking, enabling businesses to manage transactions efficiently and maintain accurate financial records.
          </p>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <img
          src="/Our_services/Restaurant_Management_Software.jpg"
          alt="Magagement_system"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Restaurant Management Software</h3>
          <p className={styles.serviceDescription}>
          Restaurant management software is very helpful to manage various activities like inventories, payments, food, and many more. Good restaurant management software will narrow the burden.
          </p>
        </div>
      </div>

    </div>

    {/* contact section************************************ */}

<div className={styles.connectSection}>
      <div className={styles.connect}>
        <h4>Willing to get in touch?</h4>
        <h1>We are just a tap away!</h1>

        <div className={styles.serviceButton}>
  <div className={styles.serviceText}>
    <Link href="/contact" className={styles.textWhite}>CONNECT NOW</Link>
  </div>
</div>

      </div>
    </div>

    {/* contact section end********************************* */}
    <GoToTop />
{/* services card grid end*********************************** */}
    </main>
    );
  };
  

  export default Services;