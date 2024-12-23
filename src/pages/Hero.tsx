import {  useRef, useState } from "react";
import Button from "../components/Button";
import { TiLocation } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Tilt from "react-parallax-tilt";


const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const totalVideo = 4;
  const upcomingVideoIndex = (currentVideoIndex % totalVideo) + 1;
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const originalVideoRef = useRef<HTMLVideoElement | null>(null);
  const miniVideoPreviewRef = useRef<HTMLVideoElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  
  const miniVieoPreviewStart = () => {
    miniVideoPreviewRef.current?.play();
  };
  const miniVieoPreviewPause = () => {
    miniVideoPreviewRef.current?.pause();
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          opacity: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          scale: 1,
          onStart: () => {
            nextVideoRef.current?.play();
          },
        });

        gsap.to(originalVideoRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentVideoIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0 6%, 68% 22%, 89% 90%, 12% 75%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleNextVideoClick = () => {
    setCurrentVideoIndex(upcomingVideoIndex);
    setHasClicked(true);
    console.log(upcomingVideoIndex);
  };

  const getVideoSrc = (index: number) => `/videos/hero-${index}.mp4`;
  const getVideoPoster = (index: number) => `/img/screen${index}.png`;
  return (
    <section>
      <div className="h-dvh w-screen relative">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          {" "}
          <div className="w-full h-full absolute-center z-10">
            <video
              ref={originalVideoRef}
              src={getVideoSrc(currentVideoIndex)}
              poster={getVideoPoster(currentVideoIndex)}
              loop
              muted
              autoPlay
              id="original-video"
              className="object-cover h-dvh w-screen opacity-0 scale-0"
            ></video>
          </div>
          {/* Background video */}
          <div className="w-full h-full absolute-center">
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentVideoIndex)}
              poster={getVideoPoster(currentVideoIndex)}
              loop
              muted
              autoPlay
              id="next-video"
              className="object-cover h-dvh w-screen"
            ></video>
          </div>
          {/* Mini video preview */}
          <div className="absolute-center  size-64 sm:size-72 md:size-80 z-20">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={500}
              style={{ height: "100%", width: "100%" }}
            >
              <video
                ref={miniVideoPreviewRef}
                onClick={handleNextVideoClick}
                src={getVideoSrc(upcomingVideoIndex)}
                onMouseEnter={miniVieoPreviewStart}
                onMouseLeave={miniVieoPreviewPause}
                loop
                muted
                autoPlay={false}
                id="mini-video"
                className="object-cover h-full w-full rounded-lg opacity-0  duration-300 transition-all ease-in cursor-pointer hover:scale-100 hover:opacity-100"
              ></video>
            </Tilt>
          </div>
          <div className="absolute right-10 bottom-10 z-10">
            <h2 className="z-10 text-blue-75 uppercase special-font hero-heading hero-headings">
              G<b>a</b>ming
            </h2>
          </div>
        </div>
        {/* Original video with scale animation */}

        {/* Text and Button */}

        <div className="absolute right-10 bottom-10">
          <h2 className="z-10 text-blue-200 uppercase special-font hero-heading hero-headings">
            G<b>a</b>ming
          </h2>
        </div>

        <div className="absolute left-10 top-[70px] z-10 text-blue-75">
          <h1 className="special-font text-blue-75 hero-heading font-[900] hero-headings">
            REDIFI<b>N</b>E
          </h1>
          <p className="text-xl">ENTER THE METAGAME LAYER</p>
          <p className="text-xl">unlead the economy</p>
          <Button
            text="Watch Trailer"
            bgColor="bg-yellow-300"
            rightIcon={<TiLocation />}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
