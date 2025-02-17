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
      
      <img src="icon1.svg" alt="Marketplace Icon" class="service-icon" />
      <h3 class="service-title">Marketplace solutions</h3>
      <p class="service-description">
        We understand the importance of a marketplace presence for a seller...
      </p>
    </div>

    {/* <!-- Service Box 2 --> */}
    <div class="service-box">
      <img src="icon2.svg" alt="Ecommerce Icon" class="service-icon" />
      <h3 class="service-title">Ecommerce extensions</h3>
      <p class="service-description">
        We work across the provision of various e-commerce extensions...
      </p>
    </div>

    {/* <!-- Service Box 3 --> */}
    <div class="service-box">
      <img src="icon3.svg" alt="Marketing Icon" class="service-icon" />
      <h3 class="service-title">Marketing automation</h3>
      <p class="service-description">
        We enable marketing automation for businesses who wish to ease...
      </p>
    </div>

    {/* <!-- Service Box 4 --> */}
    <div class="service-box">
      <img src="icon4.svg" alt="SaaS Icon" class="service-icon" />
      <h3 class="service-title">SaaS based applications</h3>
      <p class="service-description">
        We are efficient in providing Software as a Service (SaaS)...
      </p>
    </div>

    {/* <!-- Service Box 5 --> */}
    <div class="service-box">
      <img src="icon5.svg" alt="Cloud Icon" class="service-icon" />
      <h3 class="service-title">Cloud hosting service</h3>
      <p class="service-description">
        Our cloud hosting service is here to ease your data storage...
      </p>
    </div>

    {/* <!-- Service Box 6 --> */}
    <div class="service-box">
      <img src="icon6.svg" alt="Mobile Icon" class="service-icon" />
      <h3 class="service-title">Mobile and DevOps</h3>
      <p class="service-description">
        We take a step further with our DevOps now. We help in the creation...
      </p>
    </div>
  </div>
</section>
{/* our services section end */}
      
      </main>
      
    
    </div>
    
    
  );
}
