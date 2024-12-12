import { TiLocation } from "react-icons/ti";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heads = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  const lis = heads.map((head) => (
    <li className="hidden lg:block  z-[1] w-[150px] h-[24px] px-2 py-4 text-center uppercase text-blue-75 transition-all ease-in-out duration-300 list-none text-sm font-semibold rounded-full hover:text-blue-200  bg-transparent cursor-pointer">
      <a className=" z-[1] flex items-center justify-center w-full h-full">
        {head}
        <TiLocation></TiLocation>
      </a>
    </li>
  ));

  const { y: ScrollY } = useWindowScroll();

  return (
    <header
      id="header"
      className={` ${
        ScrollY > 88 ? "floating-header" : ""
      } absolute bg-transparent  top-0 left-0 z-50  pr-10 pb-5 pl-5  duration-500 w-full `}
    >
      <div
        className={`${
          ScrollY > 88 ? "floating-nav " : ""
        } flex justify-between items-center px-8   w-full mx-auto    `}
      >
        <div>
          <Button
            text="Arcade"
            rightIcon={<TiLocation />}
            bgColor="bg-blue-75"
          ></Button>
        </div>
        <nav className="flex items-center  relative">
          {lis}
          <li  className="block lg:hidden z-[1] w-[150px] h-[24px] px-2 py-4 text-center uppercase text-blue-75 transition-all ease-in-out duration-300 list-none text-sm font-semibold rounded-full hover:text-blue-200  bg-transparent cursor-pointer">
            <a className=" z-[1] flex items-center justify-center w-full h-full">
              Nexus
              <TiLocation></TiLocation>
            </a>
          </li>
          <span className="flex items-center justify-center w-[150px] h-[24px] px-2 py-4 rounded-full bg-yellow-300 text-yellow-300 opacity-0 select-none  absolute left-[-150px] top-0 duration-300 ">
            h
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
