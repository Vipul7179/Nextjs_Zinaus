"use client";
import { useEffect } from "react";
import Link from 'next/link';
import styles from './expertise.module.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Expertise = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 }); // Initializes AOS with a duration of 1000ms
    }, []);

    // left and righ arrow

      // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.slickArrow}`}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      ></div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.slickArrow}`}
        style={{ ...style, display: "block", left: "10px" }}
        onClick={onClick}
      ></div>
    );
  };

// Slider settings
const settings = {
  dots: false, // Hide dots below slider
  infinite: true, // Loop the slider
  speed: 500,
  slidesToShow: 1, // Show one image at a time
  slidesToScroll: 1, // Move one slide per click
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true, 
  autoplaySpeed: 3000, 
};

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

        <Link href="/contact" className={styles.buttonLink}>
      <button className={styles.playButton}>
        <span className={styles.playIcon}>▶</span> WORK WITH US
      </button>
    </Link>
      </div>
    </section>


{/* top page title section ends*********************** */}


{/* portfolio section start******************************** */}

{/* card 1 */}
<section className={styles.portfoliosection}>
 

      <div className={styles.textContainer} >
        {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
        <h2 className={styles.title2}>
        Social Casino Gaming Platform
        </h2>
        <p className={styles.description}>
        We excel in Social Casino Gaming Platforms, delivering high-performance casino games with real-time multiplayer, virtual currency, immersive UI/UX, and secure payments. From slots to poker, our scalable solutions ensure engagement and compliance.
        </p>

      </div>

      <div className={styles.sliderWrapper}>
  <Slider {...settings} className={styles.portfolioimagebox}>
    
    <div>
      <img src="/Images/poker games.jpg" alt="Poker" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/plinko_2.jpeg" alt="plinko2" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/plinko game.jpg" alt="Plinko Game" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/crash.jpg" alt="Crash" className={styles.portimage} />
    </div>
  </Slider>
</div>



        
    </section>

    {/* card 2 */}
    <section className={styles.portfoliosection} >
 
    <div className={styles.sliderWrapper}>
  <Slider {...settings} className={styles.portfolioimagebox}>
    <div>
      <img src="/Images/E-commerce.jpg" alt="ecommerce" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/ecommerce-website-design.jpg" alt="ecommerce_designs" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/ecommerce-mobile-app.png" alt="e-commerce-app" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/e-com-app.jpg" alt="e-com-app" className={styles.portimage} />
    </div>
  </Slider>
</div>

      <div className={styles.textContainer}data-aos="fade-right">
        {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
        <h2 className={styles.title2}>
        E-commerce
        </h2>
        <p className={styles.description}>
        We build powerful e-commerce platforms with seamless navigation, secure transactions, fast order processing, and optimized mobile experiences. Our solutions ensure smooth checkout, real-time inventory management, and advanced analytics for business growth.
        </p>

      </div>

    </section>

    {/* card 3 */}

    <section className={styles.portfoliosection}>
 
   <div className={styles.textContainer}data-aos="fade-right">
     {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
     <h2 className={styles.title2}>
     Android & iOS App Development
     </h2>
     <p className={styles.description}>
     We create high-performance Android and iOS applications with intuitive UI/UX, seamless functionality, and robust security. Our solutions ensure smooth performance, cross-platform compatibility, and efficient backend integration for a flawless user experience.
     </p>

   </div>
   <div className={styles.sliderWrapper}>
  <Slider {...settings} className={styles.portfolioimagebox}>
    
    <div>
      <img src="/Images/mobileapp.jpg" alt="apps" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/restaurant-app-development3.webp" alt="apps2" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/pharma_app.jpg" alt="Pharma_app" className={styles.portimage} />
    </div>
  </Slider>
</div>

 </section>

 {/* card 4 */}
 <section className={styles.portfoliosection}>
 
 <div className={styles.sliderWrapper}>
  <Slider {...settings} className={styles.portfolioimagebox}>
    
  <div>
      <img src="/Images/management_system.jpg" alt="cms" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/management_system_app.jpg" alt="cms" className={styles.portimage} />
    </div>
    
    <div>
      <img src="/Images/central-kitchen-tab-screen.webp" alt="cms" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/StudentListing.png" alt="cms" className={styles.portimage} />
    </div>
  </Slider>
</div>

      <div className={styles.textContainer} data-aos="fade-right" >
        {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
        <h2 className={styles.title2}>
        Management Systems
        </h2>
        <p className={styles.description}>
        We build tailored management systems to optimize your organization and business.  Our solutions streamline processes, enhance efficiency, and empower data-driven decisions.  From project management to resource allocation, we deliver systems that drive growth and achieve your strategic goals.
        </p>

      </div>

    </section>

{/* card 5 */}
<section className={styles.portfoliosection}>
 
 <div className={styles.textContainer}data-aos="fade-right">
   {/* <h4 className={styles.subTitle}>Our Expertise</h4> */}
   <h2 className={styles.title2}>
   Web Application
   </h2>
   <p className={styles.description}>
   We build unique websites and applications for your brand.  Our designs ensure engaging experiences, seamless functionality, and optimized performance to connect with your audience and achieve your digital goals.  We focus on scalability and security for long-term value.
   </p>

 </div>
 <div className={styles.sliderWrapper}>
  <Slider {...settings} className={styles.portfolioimagebox}>
    
    <div>
      <img src="/Images/client_portals_004_1_5x.webp" alt="web" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/blog-website-templates-1000x750.jpg" alt="web" className={styles.portimage} />
    </div>
    <div>
      <img src="/Images/portfolio_web.jpg" alt="web" className={styles.portimage} />
    </div>
  </Slider>
</div>

</section>


{/* postfolio section ends******************************* */}
 {/* contact******************************** */}
 <section className={styles.contactSection}>
  <div className={styles.contactWrapper}>
    <img src="/Images/get_in_touch.png" alt="Contact Us" className={styles.contactImage} />
    <div className={styles.contactContent}>
      <h2>Connect for a Live Demo</h2>
      <h3>Today!</h3>
      {/* button */}
      
      <div className={styles.serviceButton}>
  <div className={styles.serviceText}>
    <Link href="/contact" className={styles.textWhite}>Get In Touch</Link>
  </div>
</div>




    </div>
  </div>
</section>


    </main>
    );
  };
  
  export default Expertise;