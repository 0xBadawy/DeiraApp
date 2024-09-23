import React, { useContext, useState } from "react";
import { IoIosArrowBack, IoIosMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaPhone, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import FooterLogo from "../../assets/Images/Logo/Logo0.png";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { AppSettingContext } from "../../context/ThemeContext";

const Footer = () => {
  const { appSetting } = useContext(AppSettingContext);
  const Language = appSetting.Language;

  const [socialMedia] = useState([
    { text: { en: "Facebook", ar: "فيسبوك" }, link: "https://www.facebook.com/profile.php?id=61564365985435", icon: <FaFacebookF /> },
    { text: { en: "Instagram", ar: "إنستغرام" }, link: "https://www.instagram.com/alsharqiaoffers", icon: <FaInstagram /> },
    { text: { en: "TikTok", ar: "تيك توك" }, link: "https://www.tiktok.com/@alsharqiaoffers", icon: <FaTiktok /> },
    {
      text: { en: "Snapchat", ar: "سناب" },
      link: "https://www.snapchat.com/add/alsharqiaoffers?sender_web_id=dc0b7482-b285-4663-9e29-094ce1b79a6d&device_type=desktop&is_copy_url=true",
      icon: <FaSnapchatGhost />,
    },
    { text: { en: "X", ar: "اكس" }, link: "https://x.com/alsharqiaoffers", icon: <FaXTwitter /> },
  ]);

  const [footerLinks] = useState([
    { text: { en: "About Us", ar: "عنّا" }, link: "#" },
    { text: { en: "Services", ar: "الخدمات" }, link: "#" },
    { text: { en: "Contact Us", ar: "تواصل معنا" }, link: "#" },
  ]);

  const [contactInfo] = useState([
    { text: { en: "drabdulaziza46@gmail.com", ar: "drabdulaziza46@gmail.com" }, link: "mailto:drabdulaziza46@gmail.com", icon: <IoIosMail /> },
    { text: { en: "00966507728885", ar: "00966507728885" }, link: "tel:00966507728885", icon: <FaPhone /> },
    { text: { en: "WhatsApp", ar: "واتساب" }, link: "https://api.whatsapp.com/send?phone=00966507728885", icon: <SiWhatsapp /> },
  ]);

  return (
    <footer className="bg-[#38105d] text-white" style={{ direction: Language === "ar" ? "rtl" : "ltr" }}>
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img src={FooterLogo} className="h-[120px] mx-auto transition duration-100 ease-in transform hover:scale-105" alt="Logo" />
            <p className="text-[10px] mt-3 w-[80%] mx-auto">
              {Language === "ar"
                ? "تطبيق الديرة يسهل عليك عرض وإدارة إعلاناتك بشكل احترافي. تمتع بوصول أسرع إلى جمهورك وزيادة فرص نجاح أعمالك."
                : "Deira App makes it easy for you to display and manage your ads professionally. Enjoy faster access to your audience and increase your business success."}
            </p>
          </div>

          <div>
            <h6 className="my-3 lg:my-5">{Language === "ar" ? "روابط هامة" : "Important Links"}</h6>
            <ul>
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex items-center transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                    <IoIosArrowBack />
                    {item.icon}
                    {item.text[Language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="my-3 lg:my-5">{Language === "ar" ? "تابعنا على" : "Follow Us On"}</h6>
            <ul>
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition duration-100 ease-in transform hover:opacity-70 w-fit font-light"
                  >
                    <span className="mx-1">{item.icon}</span>
                    <span className="mx-1">{item.text[Language]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="my-3 lg:my-5">{Language === "ar" ? "تواصل معنا" : "Contact Us"}</h6>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex items-center gap-3 transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                    <IoIosArrowBack />
                    {item.icon}
                    {item.text[Language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1a082b] text-center font-light p-3 transition duration-100 ease-in transform hover:underline">
        {Language === "ar" ? "جميع الحقوق محفوظة @ تطبيق الديرة 2024" : "All rights reserved @ Deira App 2024"}
      </div>
    </footer>
  );
};

export default Footer;
