import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, navLinksEs } from "../constants";
import logo from "../assets/jordana-logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useLanguageContext } from "./LanguageContext";
import mexicoFlag from "/mexicoFlag.png";
import usaFlag from "/usaFlag.png";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { language, toggleLanguage } = useLanguageContext();
  const links = language === "es" ? navLinksEs : navLinks;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jordana Betancourt Menchaca
          </p>
        </Link>

        {/*Para pantallas de laptop*/}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <button
            onClick={toggleLanguage}
            className="text-white text-[18px] font-medium cursor-pointer"
          >
            <img
              className="w-12 h-8 rounded"
              src={language === "es" ? usaFlag : mexicoFlag}
              alt="Imagen de idioma"
            />
          </button>
          {links.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/*Para pantallas de celular*/}
        <div className="sm:hidden flex flex-1 justify-end items-center mx-4 my-2">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className="text-white text-[18px] font-medium cursor-pointer"
              >
                  {/* {language === "es" ? "EN" : "ES"} */}
                <img
                  className="w-12 h-8 rounded-md"
                  src={language === "es" ? usaFlag : mexicoFlag}
                  alt="Imagen de idioma"
                />
              </button>
              {links.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
