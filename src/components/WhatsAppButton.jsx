import React from "react";
import "./WhatsAppButton.css"; // for styling

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917397597561"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
