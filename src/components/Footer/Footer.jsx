import React, { useState } from "react";
import { IoIosArrowBack, IoIosMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaPhone, FaSnapchatGhost, FaTiktok } from "react-icons/fa"; // Import the icons
import FooterLogo from "../../assets/Images/Logo/Logo0.png";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([
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

  const [footerLinks, setFooterLinks] = useState([
    { text: { en: "About Us", ar: "عنّا" }, link: "#" },
    { text: { en: "Services", ar: "الخدمات" }, link: "#" },
    { text: { en: "Contact Us", ar: "تواصل معنا" }, link: "#" },
  ]);

  const [contactInfo, setContactInfo] = useState([
    { text: { en: "drabdulaziza46@gmail.com", ar: "drabdulaziza46@gmail.com" }, link: "mailto:drabdulaziza46@gmail.com", icon: <IoIosMail /> },
    { text: { en: "00966507728885", ar: "00966507728885" }, link: "tel:00966507728885", icon: <FaPhone /> },
    { text: { en: "00966507728885", ar: "00966507728885" }, link: "https://api.whatsapp.com/send?phone=00966507728885", icon: <SiWhatsapp /> },
  ]);

  return (
    <footer className="bg-[#38105d] text-white" style={{ direction: "rtl" }}>
      <div className="container mx-auto py-6">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="text-center">
            <img src={FooterLogo} className="h-[120px] mx-auto transition duration-100 ease-in transform hover:scale-105" alt="Logo" />
            <p className="text-[10px] mt-3 w-[80%] mx-auto">تطبيق الديرة يسهل عليك عرض وإدارة إعلاناتك بشكل احترافي. تمتع بوصول أسرع إلى جمهورك وزيادة فرص نجاح أعمالك.</p>
          </div>

          {/* Important Links Section */}
          <div>
            <h6 className="my-3 lg:my-5">روابط هامة</h6>
            <ul>
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex items-center transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                    <IoIosArrowBack />
                    {item.icon}
                    {item.text.ar}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h6 className="my-3 lg:my-5">تابعنا على</h6>
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
                    <span className="mx-1">{item.text.ar}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="my-3 lg:my-5">تواصل معنا</h6>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex items-center gap-3 transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                    <IoIosArrowBack />
                    {item.icon}
                    {item.text.ar}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1a082b] text-center font-light p-3 transition duration-100 ease-in transform hover:underline">{"جميع الحقوق محفوظة @ تطبيق الديرة 2024 "}</div>
    </footer>
  );
};

export default Footer;
