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
      
      </main>
    
    </div>
    
  );
}
