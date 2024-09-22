import React, { useState } from "react";

const AvailableAreasSection = () => {
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
        cities: ["حفر الباطن", "الخفجي", "النعيرية"],
      },
      {
        title: {
          en: "Northern Borders Region",
          ar: "منطقة الحدود الشمالية",
        },
        cities: ["عرعر", "رفحاء", "طريف"],
      },
      {
        title: {
          en: "Al-Jawf Region",
          ar: "منطقة الجوف",
        },
        cities: ["سكاكا", "القريات", "طبرجل", "دومة الجندل"],
      },
    ],
  });

  return (
    <section className="py-24 bg-[#8A2BE2] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{content.title.ar}</h2>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          {content.regions.map((region, index) => (
            <div key={index} className="text-2xl mb-4">
              <span className="font-bold">{region.title.ar}:</span> {region.cities.join(" ، ")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAreasSection;
