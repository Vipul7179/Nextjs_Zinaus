"use client";
import Image from "next/image";
import Homepage from "./page";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoToTop } from "./components/GoToTop";
import CountUp from "react-countup";
import Sidemenu from "./components/Sidemenu";

// react icon
import { FaClipboardCheck } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initializes AOS with a duration of 1000ms
  }, []);

  return (
    
    <div>
      <Sidemenu/>
      <main >
       <div>
        <div className="topbanner">

        <video autoPlay loop muted playsInline className="blurred-video">
  <source src="/banner_video.mp4" type="video/mp4" />
</video>
 {/* Overlay Text */}
 <div className="videotext">
  <h1 className="videotextcontent">Innovate</h1>
  <h1 className="videotextcontent">Transform</h1>
  <h1 className="videotextcontent">Succeed – Your IT Partner for the Future</h1>
  <div className="bannercontectpara">
  <p className="videotextsub">
  Backed by a team of highly skilled developers and a strong dedication to excellence, we empower our clients to thrive in the digital age by delivering innovative solutions, cutting-edge technology, and seamless user experiences. Our expertise spans across web development, mobile applications, and enterprise solutions, ensuring businesses stay ahead in an ever-evolving digital landscape.
  </p>
 
  <div className="subbannertextbutton">
    <a>Connect with our team</a>
  </div>
  </div>
  <div className="mobilebannerbutton-container">
  <div className="subbannertextbutton2" >
    <a>Connect with our team</a>
  </div>
  </div>
</div>

 </div>
   </div>
   {/* Top banner section end************** */}

   <section className="aboutOurCompany">

<div className="aboutcompany_title">
<span>about zinaus</span>
<h1>Empowering Your Digital Success with End-to-End Solutions</h1>
</div>

<div className="aboutcompany_description">
  <p>At Zinaus, we deliver a full range of digital solutions to drive business success. From stunning websites to cutting-edge game development, we’ve got you covered. Our services include e-commerce, social casino gaming, roulette, crash games, app development, and enterprise solutions. We blend creative design with robust technology to craft exceptional user experiences, keeping you ahead in a dynamic digital landscape. Partner with us for innovative, long-term growth strategies and a competitive edge in today’s market!</p>
</div>
   </section>

   


   {/* animated projects counter******************************************** */}
   <section className="counterdata">
   <div className="counter grid grid-four-column" data-aos="fade-up" >
      <div className="counter-section"> 
      <h2 className="counter-numbers" style={{ display: "flex", alignItems: "center" }}>
  <FaClipboardCheck size={24} style={{ marginRight: "8px" }} />
  <span>
    <CountUp start={0} end={20} duration={4} separator="," />+
  </span>
</h2>
        <p>Projects completed</p>
      </div>
      <div className="counter-section"> 
      <h2 className="counter-numbers" style={{ display: "flex", alignItems: "center" }}>
  <FaSmile size={24} style={{ marginRight: "8px" }} />
  <span>  
    <CountUp start={0} end={18} duration={4} separator="," />+
  </span>
</h2>
        <p>Happy clients</p>
      </div>
      {/* <div className="counter-section"> 
      <h2 className="counter-numbers">
            <CountUp start={0} end={20} duration={4} separator="," />+
          </h2>
        <p>Projects completed</p>
      </div> */}
      <div className="counter-section"> 
      <h2 className="counter-numbers" style={{ display: "flex", alignItems: "center" }}>
  <FaCalendarAlt size={24} style={{ marginRight: "8px" }} />
  <span>
    <CountUp start={0} end={2} duration={4} separator="," />+
  </span>
</h2>
        <p>Years of Experience</p>
      </div>
      </div>

   </section>


   {/* Our services section start */}

   <div className="oursevices-section">
    <section className="ourservicestitle" data-aos="zoom-in">
      <div className="service-element" >
        <span>our services</span>
        <h1 className="services-main-heading">We Offer a Wide <br/> 
        Variety of IT Services </h1>

      </div>

      <div className="ourservices-button">
      <div className="ourservices-textbutton">
      <a className="text-white">All Services</a>
  </div>
      </div>

    </section>
   </div>
   <section className="services-section" data-aos="zoom-in">
  <div className="services-grid" >
    {/* <!-- Service Box 1 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/online-store.png" alt="ecommerce Icon" className="service-icon" />
      </div>
      <div>
      <h3 className="service-title">E-commerce</h3>
      <p className="service-description">
      We offer a seamless e-commerce platform with intuitive navigation, secure payments, fast delivery, and a smooth checkout, along with mobile optimization and order tracking.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 2 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/ui-design.png" alt="UI Icon" className="service-icon" />
      </div>
      <div>
      <h3 className="service-title">Mobile App Development (iOS & Android)</h3>
      <p className="service-description">
      We create high-performance, user-friendly mobile apps for both iOS and Android, ensuring seamless functionality, security, and scalability across all devices.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 3 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/cards.png" alt="cards Icon" className="service-icon" />
      </div>
      <div>
      <h3 className="service-title">Social Casino Gaming Platform</h3>
      <p className="service-description">
      We develop engaging social casino games with fun, interactive experiences. Our custom solutions ensure exciting gameplay, smooth performance, and social features to stand out.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 4 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/movie.png" alt="movie Icon" className="service-icon" />
      </div>
      <div>
      <h3 className="service-title">Photography & Video Content for Promotions</h3>
      <p className="service-description">
      We provide professional photography and video content for promotions, creating high-quality product shoots and captivating ads that enhance engagement and boost your brand.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 5 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/testing.png" alt="qa Icon" className="service-icon" />
      </div>
      <div>
      <h3 className="service-title">Quality Assurance & Testing Solutions</h3>
      <p className="service-description">
      We offer comprehensive QA testing, including manual, automation, and API performance testing, ensuring bug-free, reliable, and high-performance products across all platforms.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 6 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/app-development.png" alt="aoo dev Icon" className="service-icon" style={{height:"40px", width:"60px"}}/>
      </div>
      <div>
      <h3 className="service-title">Web Development</h3>
      <p className="service-description">
      We develop custom web applications with innovative, scalable solutions. Our expert team builds high-performance apps tailored to your business, enhancing user experience and driving growth.
      </p>
      </div>
    </div>
  </div>
</section>
{/* our services section end */}

<section className="helpsection">
  <div className="ot-container">
    <div className="ot-container-box">
      <div className="ot-heading">
<span>We are all up to hearing from you</span>
<h2 className="main-heading">How can we <br/>help? 
</h2>	  
  </div>
  
  <div className="ot-button-section" data-aos="zoom-in">

<div>
  <a href="/"  className="ot-button-element">
    <span>contact us</span>
  </a>

</div>

  </div>

    </div>
  </div>

</section>
<section className="expertise-section">

      <div className="expertise-grid">
        <div className="expertise-items">
      <h2 className="expertise-title">Examples of our <br/><span className="Expertise-text">Expertise</span></h2>
          
        </div>

        <div className="expertise-item">
          <img src="/Images/poker games.jpg" alt="Poker" />
          <h3>We build immersive poker tables for a seamless and exciting gaming experience.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/E-commerce.jpg" alt="E-commerce" />
          <h3>Crafting dynamic e-commerce platforms for smooth shopping and business growth.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/plinko game.jpg" alt="Plinko" />
          <h3>We design innovative and engaging Plinko tables for a fun and rewarding gaming experience.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/mobileapp.jpg" alt="Mobile application" />
          <h3>We develop high-performance Android and iOS apps with seamless functionality and user-friendly design.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/travelweb.jpg" alt="Travelweb" />
          <h3>We create stunning and user-friendly travel websites for seamless bookings and unforgettable journeys.</h3>
          <a href="#" className="category">View →</a>
        </div>

        

        <div className="expertise-item">
          <img src="/Images/kitchen-web.jpg" alt="Kitchen" />
          <h3>We build visually appealing and user-friendly food websites for restaurants, delivery services, and culinary brands.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/management_system.jpg" alt="management-system" />
          <h3>We build smart, efficient management systems to streamline operations and productivity for schools, colleges, offices, businesses, gyms, and hospitals.</h3>
          <a href="#" className="category">View →</a>
        </div>

        <div className="expertise-item">
          <img src="/Images/professional-photographer-vmg-studios.webp" alt="video-graphy" />
          <h3>We create high-quality photography and videography for brand promotion and skit videos.</h3>
          <a href="#" className="category">View →</a>
        </div>
      </div>
      
      <div className="Expertise-button">
      <div className="Expertise-textbutton">
      <a className="text-white">View More ➔</a>
  </div>
      </div>
    </section>
      
      </main>
      <GoToTop />
    
    </div>
    
    
  );
}
