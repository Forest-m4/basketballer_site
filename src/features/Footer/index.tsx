import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import HeaderNav from "../../components/core/HeaderNav";
import HeaderCart from "../../components/core/HeaderCart";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a2d46] text-white py-16">
      <div
        className="mx-auto flex items-center gap-10"
        style={{ padding: "0 80px" }}
      >
        <HeaderLogo textColor="white" />
        <HeaderNav textColor="white" />
        <HeaderCart textColor="white" />
      </div>
    </footer>
  );
};

export default Footer;
