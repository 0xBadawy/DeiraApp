import React, { useContext, useState } from "react";
import { AppSettingContext } from "../context/ThemeContext";

const PrivacyPolicy = () => {
  // State to store the text in Arabic and English
  const { appSetting } = useContext(AppSettingContext);
  const language = appSetting.Language;

  const [texts] = useState({
    title: {
      en: "Privacy Policy",
      ar: "سياسة الخصوصية",
    },
    intro: {
      en: "Deira is committed to protecting users' privacy and providing a safe online experience. This policy describes how we collect, use, share, and protect your personal information when using our services.",
      ar: "تلتزم شركة الديرة بحماية خصوصية المستخدمين وتقديم تجربة آمنة على الإنترنت. تصف هذه السياسة كيفية جمع، واستخدام، ومشاركة، وحماية المعلومات الشخصية الخاصة بك عند استخدامك لخدماتنا.",
    },
    sections: [
      {
        title: {
          en: "Collection of Personal Information",
          ar: "جمع المعلومات الشخصية",
        },
        description: {
          en: "We collect the personal information you provide directly when using our services, including:",
          ar: "نقوم بجمع المعلومات الشخصية التي تقدمها لنا مباشرة عند استخدامك لخدماتنا، بما في ذلك:",
        },
        list: {
          en: ["Full Name", "Email Address", "Phone Number"],
          ar: ["الاسم الكامل", "عنوان البريد الإلكتروني", "رقم الهاتف"],
        },
      },
      {
        title: {
          en: "Use of Personal Information",
          ar: "استخدام المعلومات الشخصية",
        },
        description: {
          en: "We use the information we collect for:",
          ar: "نستخدم المعلومات التي نجمعها من أجل:",
        },
        list: {
          en: ["Providing and improving services", "Customizing your experience", "Communicating about updates and services", "Analyzing and improving our website’s performance"],
          ar: ["تقديم الخدمات وتحسينها", "تخصيص تجربتك", "التواصل معك بشأن الخدمات والتحديثات", "تحليل وتحسين فعالية موقعنا وخدماتنا"],
        },
      },
      {
        title: {
          en: "Sharing Personal Information",
          ar: "مشاركة المعلومات الشخصية",
        },
        description: {
          en: "We will not sell, rent, or share your personal information with third parties without your consent, except in the following cases:",
          ar: "لن نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أي طرف ثالث دون موافقتك، إلا في الحالات التالية:",
        },
        list: {
          en: ["Compliance with applicable laws and regulations", "Protecting the rights, property, and safety of Deira or other users"],
          ar: ["الامتثال للقوانين واللوائح المعمول بها", "حماية حقوق وممتلكات وأمان شركة الديرة أو المستخدمين الآخرين"],
        },
      },
      {
        title: {
          en: "Protecting Personal Information",
          ar: "حماية المعلومات الشخصية",
        },
        description: {
          en: "We take security measures to protect personal information from unauthorized access, use, or disclosure. However, no internet data transmission can be guaranteed to be 100% secure.",
          ar: "نتخذ تدابير أمنية لحماية المعلومات الشخصية من الوصول غير المصرح به أو الاستخدام أو الإفصاح. ومع ذلك، لا يمكن ضمان أمان أي نقل بيانات عبر الإنترنت بنسبة 100%.",
        },
      },
      {
        title: {
          en: "Your Rights",
          ar: "حقوقك",
        },
        description: {
          en: "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at [customer service email].",
          ar: "لديك الحق في الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك وتصحيحها أو حذفها. إذا كنت ترغب في ممارسة هذه الحقوق، يرجى الاتصال بنا على [عنوان البريد الإلكتروني لخدمة العملاء].",
        },
      },
      {
        title: {
          en: "Changes to Privacy Policy",
          ar: "التغييرات على سياسة الخصوصية",
        },
        description: {
          en: "We may update this privacy policy from time to time to reflect changes in our practices or applicable laws and regulations. We will notify you of any significant changes by posting the new policy on our website.",
          ar: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو القوانين واللوائح المعمول بها. سنقوم بإعلامك بأي تغييرات كبيرة من خلال نشر السياسة الجديدة على موقعنا الإلكتروني.",
        },
      },
      {
        title: {
          en: "Contact Us",
          ar: "الاتصال بنا",
        },
        description: {
          en: "If you have any questions or concerns regarding this privacy policy, please contact us at [customer service email] or [phone number].",
          ar: "إذا كانت لديك أي أسئلة أو استفسارات بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا على [عنوان البريد الإلكتروني لخدمة العملاء] أو [رقم الهاتف].",
        },
      },
    ],
  });

  return (
    <div className="bg-purple-100" style={{ direction: appSetting.Language == "ar" ? "rtl" : "ltr" }}>
      <div className="privacy-policy container mx-auto px-4   py-[50px]">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">{texts.title[language]}</h1>
        <p className="text-gray-900 text-lg mb-6 text-center">{texts.intro[language]}</p>

        {texts.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title[language]}</h2>
            <p className="text-gray-800 mb-4">{section.description[language]}</p>
            {section.list && (
              <ul className="list-disc list-inside text-gray-900 ml-4">
                {section.list[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
