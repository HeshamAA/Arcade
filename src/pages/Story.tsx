import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Tilt from "react-parallax-tilt";

import AnimatedTitle from "../components/AnimatedTitle";
import { useRef } from "react";

const Story = () => {
  gsap.registerPlugin(ScrollTrigger);
  const storyRef = useRef(null);

  useGSAP(() => {
    gsap.to(".story-photo", {
      transform: "translate3d(0, -50px, 0) rotateY(40deg) rotateX(20deg)",
      opacity: 1,
      duration: 0.5,
    });

  });

  return (
    <section
      ref={storyRef}
      id="story-section"
      className={`min-h-screen w-screen p-36 sm:p-28 md:p-40 bg-blue-200 text-blue-75 relative `}
    >
      <div className="flex items-center justify-center flex-col text-center text-blue-75 w-full  ">
        <div>THE OPEN IP UNIVERSE</div>
        <AnimatedTitle
          text="The Story of a Hidden REALM"
          className="z-[2] select-none mix-blend-difference"
        ></AnimatedTitle>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className=" perspective h-[400px] w-[200px] sm:h[400px] sm:w-[500px]  ">
            <img
              src="img/entrance.webp"
              className="story-photo md:max-w-[100%] w-full rounded cursor-pointer"
            ></img>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Story;
