import React, { useContext, useState } from "react";
import ButtonBlack from "../button/ButtonBlack";
import "./style.css";
import { AppSettingContext } from "../context/ThemeContext";
import image2 from "../assets/Screens/Image4.png";
import image1 from "../assets/Screens/Image5.png";

const Download = () => {
  const { appSetting } = useContext(AppSettingContext);

  // Define state for text and image sources
const [content, setContent] = useState({
  title: {
    en: "Download Deira Now",
    ar: "حمّل تطبيق الديرة الآن",
  },
  description: {
    en: "With the Deira app, you can effortlessly showcase and manage your ads while reaching a wider audience. Download the app now and enjoy a seamless experience tailored to your advertising needs. Choose from various categories and enhance your business visibility with just a few taps.",
    ar: "مع تطبيق الديرة، يمكنك عرض وإدارة إعلاناتك بسهولة مع الوصول إلى جمهور أوسع. حمّل التطبيق الآن واستمتع بتجربة سلسة مصممة لتلبية احتياجاتك الإعلانية. اختر من بين فئات متعددة وزيِّن ظهور عملك ببضع نقرات فقط.",
  },
  buttonText: {
    en: "Download",
    ar: "تحميل",
  },
  images: [image1, image2],
});


  return (
    <>
      <div className={`dark:bg-black ${appSetting.IsDark && "dark"}`}>
        <div className="dark:bg-[#2c2b2b]">
          <div className="container mx-auto py-[50px] ">
            <div className="items-center justify-between mx-auto max-w-[1200px] px-3">
              <div className="w-full bg-purple-100 text-primary md:h-[500px] rounded-3xl flex flex-col md:flex-row">
                <div className="w-full p-20 ScrollEffectRight">
                  <h6 className="text-[40px] font-semibold">{content.title[appSetting.Language]}</h6>
                  <p className="text mt-12 mb-20 font-normal">{content.description[appSetting.Language]}</p>
                  <div className="flex flex-row-reverse">
                    <ButtonBlack Text={content.buttonText[appSetting.Language]} />
                  </div>
                </div>
                <div className="w-full hidden overflow-hidden md:flex ScrollEffectLeft">
                  <img className="h-[400px] mt-[250px]" src={content.images[0]} alt="App Screenshot 1" />
                  <img className="h-[400px] mt-[-200px] ScrollEffectButton" src={content.images[1]} alt="App Screenshot 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
