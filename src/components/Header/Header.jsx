import React, { useContext } from "react";
import GetStarted from "../../button/GetStarted";
import { AppSettingContext } from "../../context/ThemeContext";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import Logo from "../../assets/Images/Logo/Logo1.png";
import { FaFacebookF, FaInstagram, FaSnapchat, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaI, FaS } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = ({ scrollToSection, refs }) => {
  const { appSetting, setAppSetting } = useContext(AppSettingContext);

  const handleDark = () => {
    setAppSetting((prev) => ({ ...prev, IsDark: !prev.IsDark }));
  };

  const handleLanguage = () => {
    setAppSetting((prev) => ({
      ...prev,
      Language: prev.Language === "ar" ? "en" : "ar",
    }));
  };

  const NavLinks = [
    { title: { ar: "تواصل معنا", en: "About" }, Link: "/" },
    { title: { ar: "سياسة الخصوصية", en: "Contact Us" }, Link: "/policy" },
  ];

  const SocialMedia = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61564365985435", name: "Facebook" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/alsharqiaoffers", name: "Instagram" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@alsharqiaoffers", name: "Tiktok" },
    {
      icon: <FaSnapchatGhost />,
      link: "https://www.snapchat.com/add/alsharqiaoffers?sender_web_id=dc0b7482-b285-4663-9e29-094ce1b79a6d&device_type=desktop&is_copy_url=true",
      name: "Snapchat",
    },
    { icon: <FaXTwitter />, link: "https://x.com/alsharqiaoffers", name: "Snapchat" },
  ];
  const Navs = () => (
    <div className="mx-auto dark:text-white">
      <nav>
        <ul className="flex items-center gap-10 mr-10 md:gap-10 font-medium">
          {NavLinks.map((item) => (
            <li className="hover:cursor-pointer hover:text-primary hover:font-bold duration-300" key={item.title.ar} onClick={item.action}>
              <Link to={item.Link}>
                <a>{item.title[appSetting.Language]}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className={`dark:bg-black ${appSetting.IsDark ? "dark" : ""}`}>
      <div className="pt-6 pb-4 shadow-md dark:bg-black" style={{ direction: appSetting.Language === "ar" ? "rtl" : "ltr" }}>
        <div className="container mx-auto max-w-[1200px] px-3 md:h-[15vh] h-[20vh] ">
          <div className="flex items-center mx-auto justify-between">
            <div>
              <Link to="/">
                <img className="w-20 md:w-36" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">{Navs()}</div>
            <div className=" items-center text-center text-xl gap-4 flex flex-col">
              <div className="text-sm md:text-xl">{"حساباتنا على السوشيال ميديا"}</div>
              <div className="flex gap-2 md:gap-6 items-center">
                {SocialMedia.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" className="md:text-3xl hover:text-primary hover:font-bold duration-300 " rel="noopener noreferrer">
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="items-center mt-3 mr-2 md:hidden">
            <hr className="mb-3" />
            {Navs()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
