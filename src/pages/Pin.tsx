import AnimatedTitle from "../components/AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PinItem from "../components/PinItem";
import { useEffect, useRef } from "react";

const Pin = () => {
  const pinRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: "center center",
        end: "+=3300 center",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        toggleActions: "play none none reverse",
      },
    });

    clipAnimation
      .to("#pin-1", { opacity: 1 })
      .to(".pin-1-parent", { opacity: 1, duration: 0 })
      .to("#scroller-1", { height: "100%" }, "<")
      .to("#pin-2", { opacity: 1 })
      .to(".pin-2-parent", { opacity: 1, duration: 0 })
      .to("#scroller-2", { height: "100%" }, "<")
      .to("#pin-3", { opacity: 1 })
      .to(".pin-3-parent", { opacity: 1, duration: 0 })
      .to("#scroller-3", { height: "100%" }, "<");
  });
  console.log(pinRef.current);
  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="min-h-dvh w-screen p-20 bg-yellow-300" id="pinClip">
      <div className="flex flex-col items-start justify-between" ref={pinRef}>
        <AnimatedTitle
          text="the universe
            powered by ARC"
          className="max-w-[500px] mt-10"
        />
        <div className="flex flex-col items-start gap-7">
          <PinItem
            numberOfPin={1}
            title="Shaping Zentry Collectively"
            text="Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations"
          />
          <PinItem
            numberOfPin={2}
            title="Unlocking Economic Opportunity"
            text="ARCADE is a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem."
          />
          <PinItem
            numberOfPin={3}
            title="Sharing Value Accrued"
            text="ARC holders thrive as Arcade grows, benefiting from the expansive partnerships, treasury investment and economic activities."
          />
        </div>
      </div>
    </section>
  );
};

export default Pin;
