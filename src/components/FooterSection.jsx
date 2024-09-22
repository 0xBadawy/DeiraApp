import React, { useEffect, useState } from "react";
import Logo from "../assets/Images/Logo/Logo0.png";
import { BsWhatsapp } from "react-icons/bs";

const FooterSection = () => {
  const [Governate, setGovernate] = useState("رفحاء");
  const [city, setCity] = useState("");

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

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          <span>{" اعلن معنا للوصول إلى زبائن المحتملين داخل محافظة "}</span>
          <span>{Governate}</span>
        </h2>
        <p className="text-center mb-6">هل تملك شركة أو متجر؟ انضم إلينا اليوم وشارك إعلاناتك على تطبيق الديرة.</p>
        <div className="flex justify-center mb-4">
          {/* يمكنك إضافة اللوقو أو صورة واجهة اختيار المحافظة هنا */}
          <img src={Logo} alt="Logo" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex justify-center">
          <a
            href="https://wa.me/00966507728885"
            className="bg-green-500 flex items-center gap-4 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            <span>تواصل معنا</span>
            <span>
              <BsWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
