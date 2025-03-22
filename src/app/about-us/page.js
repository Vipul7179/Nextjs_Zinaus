"use client";
import styles from './about.module.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GoToTop } from "../components/GoToTop";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Adjust the duration as needed
}, []);
    return (
      
      <div>
  <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.underline}></div>
      </div>
    </section>


     <section className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black" >
          Driving <span className="bg-orange-400 px-2">Enterprise Growth</span> And Profitability with Sculpnova
        </h1>
        <p className="text-lg text-gray-700">
        At Sculpnova, we have a clear and ambitious objective: to empower businesses by delivering cutting-edge technologies in today’s digital landscape. Digital transformation drives our passion, pushing us to go beyond the ordinary.
        </p>
        <p className="text-lg text-gray-700">
        We are not just a company; we are innovators and visionaries committed to making a positive impact through technology. Whether we are coding or building websites, we leverage the latest advancements, including AI, Blockchain, and Cloud Computing. The outcome? Motivated and successful solutions that shape the future.
        </p>
        <p className="text-lg text-gray-700">
        Our journey began just two years ago with a vision to revolutionize the digital landscape through innovative technology solutions. What started as a small team of passionate developers has rapidly evolved into a dynamic and forward-thinking IT company.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="/Images/about_us_story.webp" alt="Revenue Growth" width={500} height={300} className="rounded-lg " />
      </div>
    </section>


    <section className="bg-gray-100 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8" data-aos="zoom-in">
      <div className="md:w-1/2 space-y-4" >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          What We <span className="px-2" style={{ backgroundColor: '#ec6933', color: '#fff' }}>Believe</span>
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Sculpnova was established two years ago with a vision to revolutionize the digital landscape. We closely collaborate with industry-leading clients to implement transformational approaches that help enterprises grow sustainably and build a competitive edge. From the C-suite to the frontline, we work side by side with our clients to innovate their digital ecosystem and achieve measurable business growth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our strength lies in our commitment to innovation and our passion for delivering cutting-edge technology solutions. We believe in unlocking opportunities through creativity and dedication, helping businesses thrive in a dynamic digital world.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Images/whatwebelieve_img.png"
          alt="Team Meeting"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </div>

      

      
    </section>
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8  shadow-md" data-aos="zoom-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-lg">Projects Completed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">18+</h2>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">2+</h2>
          <p className="text-lg">Years of Experience</p>
        </div>
      </div>
    </div>

{/* *********************************** */}
<div className={styles.targetingSection} data-aos="zoom-in">
      <div className={styles.contentWrapper}>
        <h1 className={styles.titlee}>Empowering Digital <span className={styles.highlight}>Transformation</span></h1>
        <div className={styles.targetingInfo}>

          <h2 className={styles.subtitle}>TARGETING</h2>
          <ul className={styles.featuresList}>
            <li>- Custom Software Solutions</li>
            <li>- Web & App Development</li>
            <li>- Cloud Integration</li>
            <li>- IT Consulting</li>
          </ul>
        </div>
        <div className={styles.navigation}>
          <span>TARGETING</span>
          <span>VISIBILITY</span>
          <span>EXECUTION</span>
          <span>ENABLEMENT</span>
          <span>REVENUE GENERATION</span>
        </div>
      </div>
    </div>
    {/* ************************************** */}

    <section className={styles.industriesSection}>
      <div className={styles.sectionWrapper}>
        <h1 className={styles.heading}>Empowering Digital <span className={styles.highlightedText}>Transformation</span></h1>
        <div className={styles.industries}>
          <h2>Industries We Serve</h2>
          <div className={styles.industriesGrid}>
            <div className={styles.industryItem} data-aos="zoom-in"><span className={styles.icon}>🏥</span><span>Healthcare</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🎰</span><span>Casino Games</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>⚙️</span><span>Manufacturing</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🚛</span><span>Transportation</span></div> 
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>📈</span><span>Fintech</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🏦</span><span>Banking</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🛒</span><span>ECommerce</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🚘</span><span>Automotive</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🎓</span><span>Education</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🏬</span><span>Retail</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🔗</span><span>Supply Chain</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🏢</span><span>Real Estate</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>🎥</span><span>Media & Entertainment</span></div>
            <div className={styles.industryItem}data-aos="zoom-in"><span className={styles.icon}>📝</span><span>Consulting</span></div>
          </div>
        </div>
      </div>
    </section>

    {/* contact******************************** */}
    <section className={styles.contactSection}>
  <div className={styles.contactWrapper}>
    <img src="/Images/get_in_touch.png" alt="Contact Us" className={styles.contactImage} />
    <div className={styles.contactContent}>
      <h2>Contact us now and</h2>
      <h3>let's get started!</h3>
      {/* button */}
      <div className={styles.serviceButton}>
  <div className={styles.serviceText}>
    <a href="/contact" className={styles.textWhite}>Get In Touch</a>
  </div>
</div>



    </div>
  </div>
</section>

 <GoToTop />
    </div>
    
    );
  };
  
  export default AboutUs;