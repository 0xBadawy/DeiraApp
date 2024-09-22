import React, { useContext, useState, useEffect } from "react";
import { AppSettingContext } from "../context/ThemeContext";
import imageCar from "../assets/Images/SubImages/image (7).png";
import imagepalon from "../assets/Images/SubImages/image (4).png";
import imageJop from "../assets/Images/SubImages/image (2).jpg";
import imageBag from "../assets/Images/SubImages/image (8).png";
import imageElectronics from "../assets/Images/SubImages/image (2).png";
import imageFurniture from "../assets/Images/SubImages/image (11).png";
import imageSupplay from "../assets/Images/SubImages/image (1).png";
import image01 from "../assets/Images/SubImages/image (14).png";
import image02 from "../assets/Images/SubImages/image (15).png";
import image03 from "../assets/Images/SubImages/image (3).png";
import image04 from "../assets/Images/SubImages/image (10).png";
import image05 from "../assets/Images/SubImages/image (9).png";

import "./style.css";

const getOS = () => {
  const userAgent = window.navigator.userAgent;

  if (userAgent.indexOf("Win") !== -1) return "Windows";
  if (userAgent.indexOf("Mac") !== -1) return "MacOS";
  if (userAgent.indexOf("X11") !== -1 || userAgent.indexOf("Linux") !== -1) return "Linux";
  if (userAgent.indexOf("Android") !== -1) return "Android";
  if (userAgent.indexOf("like Mac") !== -1) return "iOS";

  return "Unknown OS";
};

const FeaturesCards = () => {
  const [Governate, setGovernate] = useState("رفحاء");
  const [city, setCity] = useState("");
  const os = getOS();

  const getCityName = async (lat, lng) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ar`);
    const data = await response.json();
    if (data.address && data.address.city) {
      return data.address.city;
    }
    return null;
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getLocation();
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const cityName = await getCityName(lat, lng);
        setCity(cityName);
        if (cityName) {
          setGovernate(cityName); // Update Governate state
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  const Data = [
    {
      text: { en: `Cars in ${Governate}`, ar: `سيارات ${Governate}` },
      icon: imageCar,
      services: [`سيارات ${Governate}`, `قطع غيار ${Governate}`],
    },
    {
      text: { en: `Jobs in ${Governate}`, ar: `وظائف ${Governate}` },
      icon: imageJop,
      services: [`موظفين ${Governate}`],
    },
    {
      text: { en: `Events in ${Governate}`, ar: `مناسبات ${Governate}` },
      icon: imagepalon,
      services: [`حفل ${Governate}`, `أفراح ${Governate}`, `عزاء ${Governate}`],
    },
    {
      text: { en: `Clothing in ${Governate}`, ar: `ملابس ${Governate}` },
      icon: imageBag,
      services: [`عطور ${Governate}`, `تجميل ${Governate}`],
    },
    {
      text: { en: `Electronics in ${Governate}`, ar: `إلكترونيات ${Governate}` },
      icon: imageElectronics,
      services: [`آيفون ${Governate}`, `سامسونج ${Governate}`, `سوني ${Governate}`],
    },
    {
      text: { en: `Real Estate in ${Governate}`, ar: `عقارات ${Governate}` },
      icon: imageFurniture,
      services: [`شقق ${Governate}`, `بيوت ${Governate}`, `أراضي ${Governate}`],
    },
    {
      text: { en: `Services in ${Governate}`, ar: `خدمات ${Governate}` },
      icon: imageSupplay,
      services: [`معلمات ${Governate}`, `معلمين ${Governate}`, `توصيل ${Governate}`, `نقل عفش ${Governate}`],
    },
    {
      text: { en: `Used Goods in ${Governate}`, ar: `حراج ${Governate}` },
      icon: image01,
      services: [`مستعمل ${Governate}`],
    },
    {
      text: { en: `Home Supplies in ${Governate}`, ar: `لوازم منزلية ${Governate}` },
      icon: image02,
      services: [`أثاث ${Governate}`, `أجهزة كهربائية ${Governate}`, `مفروشات ${Governate}`, `مراتب ${Governate}`],
    },
    {
      text: { en: `Animals in ${Governate}`, ar: `حيوانات ${Governate}` },
      icon: image03,
      services: [`غنم ${Governate}`, `قطط ${Governate}`],
    },
    {
      text: { en: `Restaurants in ${Governate}`, ar: `مأكولات ${Governate}` },
      icon: image04,
      services: [`كفيهات ${Governate}`, `طبخ بيت ${Governate}`, `سوبرماركت ${Governate}`],
    },
    {
      text: { en: `Contractors in ${Governate}`, ar: `مقاولات ${Governate}` },
      icon: image05,
      services: [
        `سباك ${Governate}`,
        `كهربائي ${Governate}`,
        `تكييف ${Governate}`,
        `نجار ${Governate}`,
        `ألمنيوم ${Governate}`,
        `بلاط ${Governate}`,
        `أصباغ ${Governate}`,
        `تنظيف ${Governate}`,
        `ستلايت ${Governate}`,
        `حداد ${Governate}`,
        `مساح ${Governate}`,
      ],
    },
  ];

  const Text = {
    Head1: {
      en: "Find what you need in an instant.",
      ar: "   اكتشف أفضل إعلانات ",
    },
    Head2: { en: "Browse a variety of items to suit all your needs!", ar: "تصفح أصناف متنوعة تناسب كل احتياجاتك! " },
  };

  const { appSetting } = useContext(AppSettingContext);

  const [StoreLink, setStoreLink] = useState("https://apps.apple.com/sa/app");
  useEffect(() => {
    console.log(os);

    if (os === "iOS" || os === "MacOS") {
      setStoreLink("https://apps.apple.com/sa/app");
    } else if (os === "Android" || os === "Linux") {
      setStoreLink("https://play.google.com/store/apps");
    } else {
      setStoreLink("https://apps.apple.com/sa/app");
    }
  }, [os]);
  return (
    <div className={`dark:bg-black ${appSetting.IsDark && "dark"}`}>
      <div className="dark:bg-gradient-to-bl dark:from-[#000] dark:via-gray-700 dark:to-[#000]">
        <div className="container mx-auto py-[100px]" style={{ fontFamily: "Alexandria" }}>
          <div className="items-center mx-auto max-w-[1200px] px-3">
            <div className="text-center">
              <h5 className="font-semibold text-2xl ScrollEffectApper mb-10">
                <span>{Text.Head1[appSetting.Language] + Governate}</span>
              </h5>
            </div>
            <div className="flex">
              <div
                className={`grid grid-cols-1 md:grid-cols-4 gap- md:flex-row md:gap-6 items-center text-center mx-auto ${
                  appSetting.Language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {Data.map((item, index) => (
                  <a
                    href={StoreLink}
                    key={index}
                    className="cursor-pointer rounded-lg shadow-xl w-[270px] h-[270px] p-6 transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-90 ScrollEffectApper flex flex-col items-center justify-between"
                  >
                    <div className={`flex items-center justify-center h-[60%] ${index === 11 ? "pt-0" : ""}`}>
                      <img src={item.icon} className="w-[30%] object-cover transition duration-500 ease-in-out transform hover:scale-110" alt={item.text[appSetting.Language]} />
                    </div>
                    <h1 className="text-xl font-bold my-2 text-center">{item.text[appSetting.Language]}</h1>
                    <div className="text-sm text-center">
                      {item.services.map((service, serviceIndex) => (
                        <p className="inline" key={serviceIndex}>
                          {serviceIndex === 0 ? "" : " - "}
                          {service}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
