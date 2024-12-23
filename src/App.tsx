import About from "./pages/About";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Partners from "./pages/Partners";


import WhoWeAre from "./pages/WhoWeAre";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ThemeProvider } from "./context/context";
import { useGSAP } from "@gsap/react";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Loader from "./components/Loader";
import Pin from "./pages/Pin";
import Story from "./pages/Story";


function App() {
  const yellow = "#edff66";
  const black = "#010101";

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.to("#story-section", {
      backgroundColor: yellow,
      color: black,
      scrollTrigger: {
        trigger: "#story-section",
        start: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
 
    tl.to("#pinClip", {
      backgroundColor: "#dfdff2d9",
      color: black,
      scrollTrigger: {
        trigger: "#who",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
    tl.to("#who", {
      backgroundColor: black,
      color: "#F0F2FA",
      scrollTrigger: {
        trigger: "#partners-section",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

  });

  useGSAP(() => {
    gsap.to("#loader-path", {
      width: "0%",
      delay: 2,
      duration: 6,
      ease: "power2.inOut",
      onComplete: () => {
        document.getElementById("loader-path")?.remove();
      },
    });
  });
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
