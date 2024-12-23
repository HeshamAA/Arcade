import { useGSAP } from "@gsap/react";
import FeatureCard from "../components/FeatureCard";
import Tilt from "react-parallax-tilt";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  const cardsData = [
    {
      title: "radiant",
      description:
        "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
    },
    {
      title: "zigma",
      description:
        "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    },
    {
      title: "nexus",
      description:
        "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    },
    {
      title: " azul",
      description:
        "A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "More Coming Soon",
      description: "",
    },
  ];

  useGSAP(() => {
    cardsData.forEach((_, i) => {
      gsap.fromTo(
        `#card-${i}`,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: `#card-${i}`,
            start: "top bottom",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  const handleMouseEnter = () => {
    gsap.set(`#card-5`, { rotationY: 0 });
    gsap.to(`#card-5`, {
      rotationY: 360, // الدوران حول محور Y
      duration: 1,
      ease: "power1.inOut",
    });
  };

  const cards = cardsData.map((card, i) => {
    if (i === 5) {
      return (
        <Tilt
          tiltMaxAngleX={1}
          tiltMaxAngleY={1}
          transitionSpeed={800}
          scale={0.95}
          perspective={500}
        >
          <div
            key={i}
            id={`card-${i}`}
            className="rounded-md size-full"
            onMouseEnter={handleMouseEnter}
          >
            <FeatureCard
              title={card.title}
              description={card.description}
              srcIndex={0}
              hasVideo={false}
            />
          </div>
        </Tilt>
      );
    }
    return (
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        scale={0.95}
        transitionSpeed={800}
        perspective={500}
      >
        <div key={i} id={`card-${i}`} className="rounded-md size-full">
          <FeatureCard
            title={card.title}
            description={card.description}
            srcIndex={i + 1}
          />
        </div>
      </Tilt>
    );
  });

  return (
    <section className="min-h-screen bg-blue-200 w-screen p-10">
      <div className="w-full flex items-center justify-center flex-col">
        <div>
          <div className="text-blue-100">
            Dive into the 'Game of Games' Universe
          </div>
          <div className="text-blue-300 max-w-[400px] ">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </div>
        </div>
        <div className="container grid-features px-40 py-12 w-full gap-7 ">
          {cards}
        </div>
      </div>
    </section>
  );
};

export default Features;
