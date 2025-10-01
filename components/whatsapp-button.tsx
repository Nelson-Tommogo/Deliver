"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'd like to download the LetaGas app. Can you send me the Play Store link?";
    const whatsappUrl = `https://wa.me/0202444100?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
      }}
    >
      <button
        onClick={handleWhatsAppClick}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          animation: "pulse 2s infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow =
            "0 6px 25px rgba(37, 211, 102, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(37, 211, 102, 0.5)";
        }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={30} />

        <style>
          {`
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
              }
              70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
              }
            }
          `}
        </style>
      </button>
    </div>
  );
};

export default WhatsAppButton; 