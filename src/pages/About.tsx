import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".animated-word", {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".animated-word",
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      marginTop: "1px",
    });
  });

  return (
    <section>
      <div id="about" className="min-h-screen w-screen">
        <div className="relative flex-center mt-8 flex-col text-center perspective">
          <h2 className="uppercase font-general text-sm">Welcome to Arcade</h2>
          <div className="text-7xl  uppercase animated-word">
            Disc<b>o</b>ver the world's
            <br /> l<b>a</b>rgest shared adventure
          </div>
          <div className="about-subtext">
            <p>The game of games begins your life,now an epic MMORPG</p>
            <p>Arcade Units every player from countless games and platforms</p>
          </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path  about-image perspective">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
