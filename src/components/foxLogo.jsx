import React from "react";

const FoxLogo = ({ width = 100, height = 100, ...props }) => (
  <svg
    viewBox="0 0 100 70"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Sol Kulak */}
    <polygon points="20,20 40,0 40,30" fill="#FF6600" />
    {/* Sağ Kulak */}
    <polygon points="80,20 60,0 60,30" fill="#FF6600" />
    {/* Yüz */}
    <polygon points="20,20 50,60 80,20" fill="#FFA726" />
    {/* Gözler */}
    <circle cx="35" cy="30" r="2" fill="#000" />
    <circle cx="65" cy="30" r="2" fill="#000" />
    {/* Burun */}
    <polygon points="50,60 45,70 55,70" fill="#000" />
  </svg>
);

export default FoxLogo;
