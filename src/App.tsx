import About from "./pages/About";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Partners from "./pages/Partners";
import Pin from "./pages/Pin";
import Story from "./pages/Story";
import WhoWeAre from "./pages/WhoWeAre";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ThemeContext, ThemeProvider } from "./context/context";
import { useGSAP } from "@gsap/react";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Loader from "./components/Loader";
import { useContext } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.to("#story-section", {
      backgroundColor: "#edff66",
      color: "#010101",
      scrollTrigger: {
        trigger: "#pinClip",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    tl.to("#pinClip", {
      backgroundColor: "#edff66",
      color: "#010101",
      scrollTrigger: {
        trigger: "#pinClip",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.to("#pinClip", {
      backgroundColor: "#dfdff2 ",
      color: "#010101",
      scrollTrigger: {
        trigger: "#who",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    tl.to("#who", {
      backgroundColor: "#dfdff2 ",
      color: "#010101",
      scrollTrigger: {
        trigger: "#who",
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    tl.to("#partners-section", {
      backgroundColor: "#010101",
      color: "#dfdff2",
      scrollTrigger: {
        trigger: "#partners-section",
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    tl.to("#who", {
      backgroundColor: "#010101",
      color: "#dfdff2",
      scrollTrigger: {
        trigger: "#partners-section",
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });

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
  });

  const { loadedData } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <main className="min-h-screen w-screen relative overflow-x-hidden bg-blue-75">
        <Loader></Loader>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Features></Features>
        <Story></Story>
        <Pin></Pin>
        <WhoWeAre></WhoWeAre>
        <Partners></Partners>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
