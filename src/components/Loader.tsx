import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

const Loader = () => {
  const { loadedData } = useContext(ThemeContext);
  useGSAP(() => {
    gsap.to("#loader-path", {
      width: "0%",
      delay: loadedData ? 0 : 20,
      duration: 4,
      ease: "power2.inOut",
      onComplete: () => {
        document.getElementById("loader-path")?.remove();
      },
    });
  }, [loadedData]);

  return (
    <div
      id="loader-path"
      className="min-h-screen w-screen bg-violet-300 fixed z-[1000] overflow-hidden"
    >
      <div className="loader absolute-center"></div>
    </div>
  );
};

export default Loader;
