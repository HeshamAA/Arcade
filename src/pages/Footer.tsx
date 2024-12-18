
import Tilt from "react-parallax-tilt";
import FooterBtn from "../components/FooterBtn";
const Footer = () => {
  return (
    <section className="min-h-screen w-screen bg-violet-300 py-5 overflow-hidden">
      <div>
        <Tilt
          tiltMaxAngleY={40}
          tiltMaxAngleX={0}
          perspective={1000}
          transitionSpeed={800}
        >
          <div className="w-full font-zentry footer-heading text-center">
            Arcade
          </div>
        </Tilt>
      </div>
      <div className="grid grid-cols-3 items-center text-center">
        <div>
          <div>Explore</div>
          <div className="font-semibold flex flex-col items-center justify-center">
            <FooterBtn text="Home"></FooterBtn>
            <FooterBtn text="Prologue"></FooterBtn>
            <FooterBtn text="About"></FooterBtn>
            <FooterBtn text="Contact"></FooterBtn>
          </div>
        </div>
        <div>
          <div>Products</div>
          <div className="font-semibold flex flex-col items-center justify-center">
            <FooterBtn text="Radiant"></FooterBtn>
            <FooterBtn text="Neuxs"></FooterBtn>
            <FooterBtn text="Zigma"></FooterBtn>
            <FooterBtn text="Azul"></FooterBtn>
          </div>
        </div>
        <div>
          <div>Follow us</div>
          <div className="font-semibold flex flex-col items-center justify-center">
            <FooterBtn text="Discord"></FooterBtn>
            <FooterBtn text="X"></FooterBtn>
            <FooterBtn text="Youtube"></FooterBtn>
            <FooterBtn text="Facebook"></FooterBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
