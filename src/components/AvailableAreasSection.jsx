import React, { useContext, useState } from "react";
import { AppSettingContext } from "../context/ThemeContext";

const AvailableAreasSection = () => {
  const { appSetting, setAppSetting } = useContext(AppSettingContext);

  const [content, setContent] = useState({
    title: {
      en: "Easy to Use App Available In",
      ar: "تطبيق سهل الاستخدام ومتاح في",
    },
    regions: [
      {
        title: {
          en: "Eastern Province",
          ar: "المنطقة الشرقية",
        },
        cities: [
          { en: "Hafar Al-Batin", ar: "حفر الباطن" },
          { en: "Khafji", ar: "الخفجي" },
          { en: "Nairyah", ar: "النعيرية" },
        ],
      },
      {
        title: {
          en: "Northern Borders Region",
          ar: "منطقة الحدود الشمالية",
        },
        cities: [
          { en: "Arar", ar: "عرعر" },
          { en: "Rafha", ar: "رفحاء" },
          { en: "Turaif", ar: "طريف" },
        ],
      },
      {
        title: {
          en: "Al-Jawf Region",
          ar: "منطقة الجوف",
        },
        cities: [
          { en: "Sakaka", ar: "سكاكا" },
          { en: "Al-Qurayyat", ar: "القريات" },
          { en: "Tabarjal", ar: "طبرجل" },
          { en: "Dumat Al-Jandal", ar: "دومة الجندل" },
        ],
      },
    ],
  });

  return (
    <section className="py-24 bg-[#8A2BE2] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{content.title[appSetting.Language]}</h2>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          {content.regions.map((region, index) => (
            <div key={index} className="text-2xl mb-4">
              <span className="font-bold">{region.title[appSetting.Language]}:</span> {region.cities.map((city) => city[appSetting.Language]).join(" ، ")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAreasSection;
