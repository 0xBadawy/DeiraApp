import React from 'react'

const PhoneSection = () => {
  return (
    <div>
      
    </div>
  )
}

export default PhoneSection


// import React, { useContext, useState } from "react";
// import { AppSettingContext } from "../context/ThemeContext";
// import screenImage from "../assets/Screens/Image2.png";
// const PhoneSection = () => {
//   const { appSetting, setAppSetting } = useContext(AppSettingContext);

//   const [textData, setTextData] = useState({
//     Title: {
//       ar: "تواصل مباشر مع العملاء",
//       en: "Shop by Category",
//     },
//     Description: {
//       ar: "مع ميزة التحدث المباشر عبر تطبيق الديرة، يمكنك الآن التفاعل بسهولة مع العملاء المحتملين، طرح الأسئلة، التفاوض على الأسعار، وتأكيد تفاصيل البيع في الوقت الحقيقي. نوفر لك أداة تواصل فعالة تساعدك على إتمام صفقاتك بسرعة وكفاءة.",
//       en: "Browse our wide selection of available products to meet all your store's needs.",
//     },
//   });

//   return (
//     <>
//       <div className={`dark:bg-black bg-purple-100 ${appSetting.IsDark && "dark"}`}>
//         <div className="dark:bg-gradient-to-br  dark:from-[#000]  dark:via-gray-700  dark:to-[#000]">
//           <div className="container mx-auto py-[50px] ">
//             <div className=" mx-auto  max-w-[1200px] px3 ">
//               <div className="flex flex-col md:flex-row md:items-start  items-center justify-between">
//                 <div className="justify-center items-center mt-28 ScrollEffectRight">
//                   <h4
//                     className={` text-3xl font-bold  pr-3 py-1 mb-7 border-primary dark:text-white  ${appSetting.Language == "ar" ? "border-r-8" : " border-l-8 text-left pl-3"}`}
//                   >
//                     {textData.Title[appSetting.Language]}
//                   </h4>
//                   <p className={`text-xl font-medium  pr-3 py-1 mb-7 border-primary dark:text-white  ${appSetting.Language == "ar" ? "border-r-4" : " border-l-4 text-left pl-3"}`}>
//                     {textData.Description[appSetting.Language]}
//                   </p>
//                 </div>

//                 <div className="mt-20 md:mt-0">
//                   <div className="justify-center items-center ScrollEffectApper ">
//                     <div className=" w-[300px] h-[300px]   md:w-[600px] md:h-[600px] dark:border-white rounded-full border-4 border-red-950 flex justify-center items-center">
//                       <div className="w-[200px] h-[200px]  md:w-[400px] md:h-[400px]   rounded-full border-8  border-primary">
//                         <img
//                           className="mt-[-130px] w-[300px] mx-auto drop-shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 ScrollEffectRotate"
//                           src={screenImage}
//                           alt="Screen"
//                         />{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PhoneSection;
