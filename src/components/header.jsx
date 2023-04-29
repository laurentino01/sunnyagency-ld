import Image from "next/image";
import logo from "../public/images/logo.svg";
import hamburger from "../public/images/icon-hamburger.svg";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [hidden, setHidden] = useState("hidden");
  const [largura, setLargura] = useState();

  useEffect(() => {
    function handleResize() {
      setLargura(window.innerWidth);
    }
    const currentScrollPosition = window.scrollY;
    window.addEventListener("resize", handleResize);

    if (largura >= 768 || isMenuVisible === false) {
      setHidden("hidden");
    }
    if (currentScrollPosition < lastScrollPosition) {
      setHidden("hidden");
    }

    function handleScroll() {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition && isMenuVisible) {
        setIsMenuVisible(false);
      } else if (currentScrollPosition < lastScrollPosition && !isMenuVisible) {
        setIsMenuVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize),
        window.removeEventListener("scroll", handleScroll);
    };
  }, [largura, lastScrollPosition, isMenuVisible]);

  function showHidden() {
    if (hidden === "") {
      setHidden("hidden");
    }
    if (hidden === "hidden") {
      setHidden("");
    }
  }

  return (
    <>
      {isMenuVisible && (
        <header className=" bg-PrimaryBlue ">
          <div className="w-full max-w-[1440px]  bg-PrimaryBlue p-4 z-20 flex justify-between  fixed ">
            <div>
              <Image
                src={logo}
                alt="Picture of the author"
                className="cursor-pointer "
              />
            </div>
            <nav className="relative">
              <ul
                className=" cursor-pointer text-White hidden md:flex"
                id="menu-desk"
              >
                <li className="btn-hover ">
                  <Link to="about" smooth={true} duration={500}>
                    about
                  </Link>
                </li>
                <li className=" btn-hover">
                  <Link to="services" smooth={true} duration={500}>
                    Services
                  </Link>
                </li>
                <li className=" btn-hover">
                  <Link to="projects" smooth={true} duration={500}>
                    Projects
                  </Link>
                </li>
                <li className=" btn-hover">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
              <Image
                src={hamburger}
                alt="Picture of the author"
                className="cursor-pointer md:hidden"
                onClick={() => showHidden()}
              />

              <div
                className={`z-10 bg-White absolute right-0 top-16 max-w-xs w-[90vw] h-[250px] flex justify-center items-center ${hidden}  md:hidden`}
                id="resp"
              >
                <div
                  className="w-[24px] h-[24px] -top-6 right-0 absolute bg-White triangle "
                  id="triangle"
                ></div>
                <ul className="justify-between cursor-pointer text-center text-VeryDarkGrayishBlue">
                  <li>
                    <Link to="about" smooth={true} duration={500}>
                      About
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to="services" smooth={true} duration={500}>
                      Services
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to="projects" smooth={true} duration={500}>
                      Projects
                    </Link>
                  </li>
                  <li className="mt-4 font-serif bg-Yellow rounded-3xl py-2 px-6">
                    <Link to="contact" smooth={true} duration={500}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
