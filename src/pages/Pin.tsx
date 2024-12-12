import AnimatedTitle from "../components/AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PinItem from "../components/PinItem";
import { useRef } from "react";


const Pin = () => {
  const pinRef = useRef(null);

  // const Intersection = useIntersection(pinRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.6,
  // });
  // useEffect(() => {
  //   if (Intersection?.isIntersecting) {
  //     setClassName("bg-yellow");
  //   }
  // }, [Intersection?.isIntersecting]);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinClip",
        start: "center center",
        end: "+=3300 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to("#pin-1", {
      opacity: 1,
    });
    clipAnimation.to(".pin-1-parent", {
      display: "block",
    });
    clipAnimation.to("#scroller-1", {
      height: "100%",
    });
    clipAnimation.to("#pin-2", {
      opacity: 1,
    });
    clipAnimation.to(".pin-2-parent", {
      display: "block",
    });
    clipAnimation.to("#scroller-2", {
      height: "100%",
    });
    clipAnimation.to("#pin-3", {
      opacity: 1,
    });
    clipAnimation.to(".pin-3-parent", {
      display: "block",
    });
    clipAnimation.to("#scroller-3", {
      height: "100%",
    });
  });
  return (
    <section
      className={`min-h-screen w-screen  p-20 bg-yellow-300`}
      ref={pinRef}
      id="pinClip"
    >
      <div className="flex flex-col items-start justify-between">
        <AnimatedTitle
          text="the universe
            powered by ZENT"
          className="max-w-[500px] mt-10"
        ></AnimatedTitle>
        <div className="flex flex-col items-start gap-7">
          <PinItem
            numberOfPin={1}
            title="Shaping Zentry Collectively"
            text="Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations"
          ></PinItem>
          <PinItem
            numberOfPin={2}
            title="Unlocking Economic Opportunity"
            text="ARCADE is a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem."
          ></PinItem>
          <PinItem
            numberOfPin={3}
            title="Sharing Value Accrued"
            text="ARC holders thrive as Arcade grows, benefiting from the expansive partnerships, treasury investment and economic activities."
          ></PinItem>
        </div>
      </div>
    </section>
  );
};

export default Pin;
