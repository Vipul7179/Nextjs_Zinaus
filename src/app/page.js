import Image from "next/image";
import Homepage from "./page";

export default function Home() {
  return (
    
    <div>
      
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
</div>
 </div>
   </div>
   {/* Top banner section end************** */}

   <section className="aboutOurCompany">

<div className="aboutcompany_title">
<h1>Empowering Your Digital Success with End-to-End Solutions</h1>
</div>

<div className="aboutcompany_description">
  <p>At Zinaus, we deliver a full range of digital solutions to drive business success. From stunning websites to cutting-edge game development, we’ve got you covered. Our services include e-commerce, social casino gaming, roulette, crash games, app development, and enterprise solutions. We blend creative design with robust technology to craft exceptional user experiences, keeping you ahead in a dynamic digital landscape. Partner with us for innovative, long-term growth strategies and a competitive edge in today’s market!</p>
</div>
   </section>

   


   {/* animated projects counter******************************************** */}
   <section className="counterdata">
    <div className="counter grid gird-four-column">
      <div className="counter-section"> 
        <h2 className="counter-numbers">2000+</h2>
        <p>Projects completed</p>
      </div>
      <div className="counter-section"> 
        <h2 className="counter-numbers">6000+</h2>
        <p>Happy clients</p>
      </div>
      <div className="counter-section"> 
        <h2 className="counter-numbers">5000+</h2>
        <p>Projects completed</p>
      </div>
      <div className="counter-section"> 
        <h2 className="counter-numbers">4000+</h2>
        <p>Projects completed</p>
      </div>


      

    </div>

   </section>


   {/* Our services section start */}

   <div className="oursevices-section">
    <section className="ourservicestitle">
      <div className="service-element">
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
   <section className="services-section">
  <div className="services-grid">
    {/* <!-- Service Box 1 --> */}
    <div className="service-box">
      <div>
      <img src="/Images/online-store.png" alt="ecommerce Icon" className="service-icon" style={{paddingRight: "3px"}} />
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
      <img src="/Images/cards.png" alt="cards Icon" className="service-icon" style={{paddingRight: "3px"}} />
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
      <img src="/Images/app-development.png" alt="aoo dev Icon" className="service-icon" style={{paddingRight:"3px"}}/>
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
  
  <div className="ot-button-section">

<div>
  <a href="/"  className="ot-button-element">
    <span>contact us</span>
  </a>

</div>

  </div>

    </div>
  </div>

</section>
      
      </main>
      
    
    </div>
    
    
  );
}
