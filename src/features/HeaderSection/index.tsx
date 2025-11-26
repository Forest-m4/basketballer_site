import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import HeaderNav from "../../components/core/HeaderNav";
import HeaderCart from "../../components/core/HeaderCart";
import { twMerge } from "tailwind-merge";

interface HeaderSectionProps {
  bgColor: "white" | "secondary";
  textColor?: "white" | "secondary";
  logoTitleColor?: "primary" | "secondary" | "black" | "accent" | "white"; // переименовал для ясности
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  bgColor,
  textColor = "secondary",
  logoTitleColor
}) => {
  const verticalPadding = bgColor === "secondary" ? "py-16" : "py-2";

  return (
    <header
      className={twMerge(
        "w-full",
        verticalPadding,
        bgColor === "white" && "bg-white shadow",
        bgColor === "secondary" && "bg-secondary"
      )}
    >
      <div className="mx-auto flex items-center gap-10" style={{ padding: "0 80px" }}>
        <HeaderLogo 
          textColor={textColor} 
          titleColor={logoTitleColor} 
        />
        <HeaderNav textColor={textColor} />
        <HeaderCart textColor={textColor} />
      </div>
    </header>
  );
};

export default HeaderSection;