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
    <a>All Services</a>
  </div>
      </div>

    </section>
   </div>
   <section class="services-section">
  <div class="services-grid">
    {/* <!-- Service Box 1 --> */}
    <div class="service-box">
      <div>
      <img src="/Images/online-store.png" alt="Marketplace Icon" class="service-icon" />
      </div>
      <div>
      <h3 class="service-title">E-commerce</h3>
      <p class="service-description">
      We offer a seamless e-commerce platform with easy product navigation, secure payments, and fast delivery to help businesses thrive online.
      </p>
      </div>
    </div>

    {/* <!-- Service Box 2 --> */}
    <div class="service-box">
      <img src="icon2.svg" alt="Ecommerce Icon" class="service-icon" />
      <h3 class="service-title">Mobile App Development (iOS & Android)</h3>
      <p class="service-description">
      We create high-performance, user-friendly mobile apps for both iOS and Android, ensuring seamless functionality, security, and scalability across all devices.
      </p>
    </div>

    {/* <!-- Service Box 3 --> */}
    <div class="service-box">
      <img src="icon3.svg" alt="Marketing Icon" class="service-icon" />
      <h3 class="service-title">Social Casino Gaming Platform</h3>
      <p class="service-description">
      We develop engaging social casino games that offer players a fun, interactive experience. Our custom-built solutions provide exciting gameplay, smooth performance, and social features, ensuring your game stands out in the competitive gaming market.
      </p>
    </div>

    {/* <!-- Service Box 4 --> */}
    <div class="service-box">
      <img src="icon4.svg" alt="SaaS Icon" class="service-icon" />
      <h3 class="service-title">Photography & Video Content for Promotions</h3>
      <p class="service-description">
      We offer professional photography and video content to enhance your promotional campaigns. From product shoots to captivating video ads, we create high-quality visuals that grab attention and boost your brand’s engagement.
      </p>
    </div>

    {/* <!-- Service Box 5 --> */}
    <div class="service-box">
      <img src="icon5.svg" alt="Cloud Icon" class="service-icon" />
      <h3 class="service-title">Quality Assurance & Testing Solutions</h3>
      <p class="service-description">
      We provide comprehensive QA testing, including manual testing, automation, and API performance testing, ensuring your products are bug-free, reliable, and optimized for peak performance across all platforms.
      </p>
    </div>

    {/* <!-- Service Box 6 --> */}
    <div class="service-box">
      <img src="icon6.svg" alt="Mobile Icon" class="service-icon" />
      <h3 class="service-title">Web Development</h3>
      <p class="service-description">
      We specialize in developing custom web applications that provide innovative and scalable solutions. Our experienced team creates high-performance applications tailored to your business, enhancing user experiences and driving growth.
      </p>
    </div>
  </div>
</section>
{/* our services section end */}
      
      </main>
      
    
    </div>
    
    
  );
}
