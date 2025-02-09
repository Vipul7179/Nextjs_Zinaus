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
  Backed by a team of highly skilled developers and a strong dedication to excellence, we empower our clients to thrive in the digital age by delivering innovative solutions, cutting-edge technology, and seamless user experiences. Our expertise spans across web development, mobile applications, and enterprise solutions, ensuring businesses stay ahead in an ever-evolving digital landscape
  </p>
  </div>
</div>


        </div>

       </div>
      
      </main>
    
    </div>
    
  );
}
