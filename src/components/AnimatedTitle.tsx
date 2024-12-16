import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


type TAnimatedTitleProps = {
  className?: string;
  text: string;
};
const AnimatedTitle = ({ className = "", text }: TAnimatedTitleProps) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#text", {
      transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#text",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className={`  animated-word ${className}`}
      id="text"
    >
      {text}
    </div>
  );
};

export default AnimatedTitle;
