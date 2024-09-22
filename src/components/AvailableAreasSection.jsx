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
    <section className="py-24 bg-[#8A2BE2] text-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{content.title.ar}</h2>
        {/* <h2 className="text-3xl font-bold mb-8">{content.title.en}</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.regions.map((region, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#8A2BE2] pb-2">{region.title.ar}</h3>
              {/* <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#8A2BE2] pb-2">{region.title.en}</h3> */}
              <ul className="list-disc list-inside space-y-2">
                {region.cities.map((city, idx) => (
                  <li key={idx} className="hover:text-[#8A2BE2] transition-colors">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAreasSection;
