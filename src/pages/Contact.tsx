import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Tilt from "react-parallax-tilt";
const Contact = () => {
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#contact",
                start:"top bottom",
                end:"bottom center",
                toggleActions:"play none none reverse",
            }
        })

        tl.to(".photo-one",{
            right:0,
            top:0,
        })
        tl.to(".photo-two",{
            left:0,
            bottom:"-64px",
           
        })
    })
  return (
    <section  id="contact" className="min-h-screen w-screen bg-blue-200">
      <div className="flex items-center justify-center">
        <div className=" rounded w-[90%] mx auto h-[80vh] flex items-center justify-center relative perspective ">
          <div className="font-zentry text-4xl sm:text-5xl md:text-6xl text-center z-10 text-blue-75 max-w-[50%]">
            let’s build the new era of gaming together.
          </div>
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="w-[300px] h-[400px] absolute border rounded photo-one">
            <img
              src="img/swordman.webp"
              className="max-w-full max-h-full border rounded object-cover h-full w-full"
            ></img>
          </Tilt>
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="w-[400px] h-[600px] absolute photo-two hidden sm:block ">
                <img
                src="img/gallery-1.webp"
                className="max-w-full max-h-full"
                ></img>
            </Tilt>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
