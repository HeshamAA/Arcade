import Photo from "../components/Photo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useRef } from "react";

const WhoWeAre = () => {
  gsap.registerPlugin(ScrollTrigger);
  const whoRef = useRef(null);



  useGSAP(() => {
    gsap.to("#whoText", {
      transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#who",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });
  


  return (
    <section
      id="who"
      ref={whoRef}
      className={`min-h-screen w-screen  bg-blue-75 flex items-center justify-center pt-2   `}
    >
      <div
        id="whoText"
        className="flex items-center justify-center flex-col text-center max-w-[85%] sm:max-w-[70%] mx-auto text-3xl sm:text-5xl md:text-7xl animated-who"
      >
        <div className="text-center font-zentry hero-headings ">
          We're building a new <Photo imgSrc="img/gallery-5.webp" /> reality
          that rewards <Photo imgSrc="img/gallery-3.webp" /> players and
          encourages communities <Photo imgSrc="img/gallery-4.webp" /> to thrive
        </div>
        <div className="text-center max-w-[90%] font-mono text-xl">
          Arcade is on a mission to unite diverse player networks to forge the
          world's largest shared adventure.
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
