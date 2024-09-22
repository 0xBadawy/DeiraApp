import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const whatsappNumber = "00966507728885";
  const message = "Hello, I need help!";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-green-500 text-white p-4 text-2xl rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <i>
        <BsWhatsapp />
      </i>
    </a>
  );
};

export default WhatsAppButton;
