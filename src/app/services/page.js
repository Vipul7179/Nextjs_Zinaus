import styles from './services.module.css';

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
          alt="Product Strategy & Experience Design"
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
          alt="Digital Business Transformation"
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
          alt="Intelligence Engineering"
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
          alt="Software Product Engineering"
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
          alt="Technology Modernization"
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
          alt="Embedded Engineering & IT/OT Transformation"
          className={styles.serviceImage}
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>Photography & Video Content for Promotions</h3>
          <p className={styles.serviceDescription}>
          We provide professional photography and video content for promotions, creating high-quality product shoots and captivating ads that enhance engagement and boost your brand.
          </p>
        </div>
      </div>
    </div>


{/* services card grid end*********************************** */}
    </main>
    );
  };
  

  export default Services;