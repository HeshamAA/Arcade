import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Partners = () => {
  const partnersRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#partners-control",
        start: "top center ",
        end: "bottom center",
        pin: "#pinned-text-partners",
        pinSpacing: true,
        scrub: 1,
        
      },
    });
  });
  const partners = [
    "Binance labs",
    "Coinbase Ventures",
    "Pantera Capital",
    "DeFiance Capital",
    "Animoca Brands",
    "SkyVision Capital",
    "Play Venture",
    "Vessel Capital",
    "Arche Fund",
    "Marblex",
    "GAMING Fnatic",
    "GAMING XSET",
    "GAMING JamboWEB3",
    "AWSBRANDS",
  ];

  useGSAP(() => {});

  const partnersShow = partners.map((partner, index) => {
    return (
      <div
        key={index}
        id={`pin-partner-${index + 1}`}
        className="flex items-start justify-center flex-col text-start partners-heading font-zentry  "
      >
        <div>{partner}</div>
      </div>
    );
  });

  return (
    <section
      ref={partnersRef}
      className={`min-h-screen w-screen p-20 bg-blue-75`}
      id="partners-section"
    >
      <div
        className="flex items-start flex-col md:flex-row justify-center relative "
        id="partners-control"
      >
        <div className="font-bold   relative max-w-[40%]" id="pinned-text-partners">
          Our backers include top-tier VCs,funds,and companies,providing
          expertise,network and resources to fuel our project's sucess
        </div>
        <div className="flex flex-col items-start" id="partners">
          {partnersShow}
        </div>
      </div>
    </section>
  );
};

export default Partners;
