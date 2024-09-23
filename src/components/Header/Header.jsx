import React, { useContext, useState } from "react";
import GetStarted from "../../button/GetStarted";
import { AppSettingContext } from "../../context/ThemeContext";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import Logo from "../../assets/Images/Logo/Logo1.png";
import { FaFacebookF, FaInstagram, FaPhone, FaSnapchat, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaI, FaS } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiSnapchatLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosMail } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";

const Header = ({ scrollToSection, refs }) => {
  const { appSetting, setAppSetting } = useContext(AppSettingContext);

  const handleDark = () => {
    setAppSetting((prev) => ({ ...prev, IsDark: !prev.IsDark }));
  };

  const [contactInfo, setContactInfo] = useState([
    { text: { en: "drabdulaziza46@gmail.com", ar: "drabdulaziza46@gmail.com" }, link: "mailto:drabdulaziza46@gmail.com", icon: <IoIosMail /> },
    { text: { en: "00966507728885", ar: "00966507728885" }, link: "tel:00966507728885", icon: <FaPhone /> },
    { text: { en: "00966507728885", ar: "00966507728885" }, link: "https://api.whatsapp.com/send?phone=00966507728885", icon: <SiWhatsapp /> },
  ]);

  const handleLanguage = () => {
    setAppSetting((prev) => ({
      ...prev,
      Language: prev.Language === "ar" ? "en" : "ar",
    }));
  };

  const NavLinks = [{ title: { ar: "سياسة الخصوصية", en: "Privacy Policy" }, Link: "/policy" }];

  const SocialMedia = [
    { icon: <FaFacebookF className="text-[#1877F2]" />, link: "https://www.facebook.com/profile.php?id=61564365985435", name: "Facebook" },
    { icon: <FaInstagram className="text-[#5b51d8]" />, link: "https://www.instagram.com/alsharqiaoffers", name: "Instagram" },
    { icon: <FaTiktok className="text-[#000]" />, link: "https://www.tiktok.com/@alsharqiaoffers", name: "Tiktok" },
    {
      icon: <RiSnapchatLine className="text-[#FFFC00]" />,
      link: "https://www.snapchat.com/add/alsharqiaoffers?sender_web_id=dc0b7482-b285-4663-9e29-094ce1b79a6d&device_type=desktop&is_copy_url=true",
      name: "Snapchat",
    },
    { icon: <FaXTwitter className="text-[#000]" />, link: "https://x.com/alsharqiaoffers", name: "Snapchat" },
  ];
  const Navs = () => (
    <div className="mx-auto dark:text-white">
      <nav>
        <ul className="flex items-center gap-10 mx-auto md:gap-10 font-medium">
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

  const ContactUs = () => (
    <div>
      <h6 className="my-3 lg:my-5">{appSetting.Language === "ar" ? "تواصل معنا" : "Contact us"}</h6>
      <ul>
        {contactInfo.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="flex items-center mt-4 gap-3 transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
              <IoIosArrowBack />
              {item.icon}
              {item.text.ar}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const ContactUsMin = () => (
    <div>
      <h6 className="mt-3 lg:my-5 text-sm">{appSetting.Language === "ar" ? "تواصل معنا" : "Contact us"}</h6>
      <ul>
        {contactInfo.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="flex items-center text-sm gap-1 transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
              <IoIosArrowBack />
              {item.icon}
              {item.text.ar}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const Social = () => (
    <div>
      <div className="text-sm md:text-lg">{appSetting.Language === "ar" ? "حساباتنا على السوشيال ميديا" : "Our social media accounts"}</div>
      <div className="flex gap-4 md:gap-3 mt-5 md:mt-10 items-center">
        {SocialMedia.map((item, index) => (
          <a key={index} href={item.link} target="_blank" className="md:text-4xl hover:text-primary hover:font-bold duration-300 " rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
      </div>

      {/* <div className="md:hidden  block"> {ContactUsMin()}</div> */}
    </div>
  );

  const ChangeLng = () => (
    <button
      onClick={handleLanguage}
      className={`focus:outline-none rounded-md border-2 ml-1 px-[6px] py-[2px] ${appSetting.IsDark ? "text-[#FFF] border-white" : "text-primary border-primary"} `}
    >
      {appSetting.Language === "ar" ? <p className="font-semibold">en</p> : <p className="font-semibold">ar</p>}
    </button>
  );

  return (
    <div className={`dark:bg-black ${appSetting.IsDark ? "dark" : ""}`}>
      <div className="pt-6 pb-4 shadow-md dark:bg-black" style={{ direction: appSetting.Language === "ar" ? "rtl" : "ltr" }}>
        <div className="container mx-auto max-w-[1200px] px-3 md:h-[20vh] h-[30vh] ">
          <div className="flex items-center mx-auto justify-between">
            <div>
              <Link to="/">
                <img className="w-24 md:w-40" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">{Navs()}</div>
            <div className=" items-center text-center text-xl gap-4 flex flex-">
              <div className="">{Social()}</div>
              <div className="hidden  md:block"> {ContactUs()}</div>
              <div className=""> {ChangeLng()}</div>
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
