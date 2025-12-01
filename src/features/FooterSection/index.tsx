import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import FooterNav from "../../components/core/FooterNav";
import HeaderCart from "../../components/core/HeaderCart";
import { twMerge } from "tailwind-merge";

interface FooterSectionProps {
  bgColor?: "white" | "secondary";
  textColor?: "white" | "secondary";
  logoTitleColor?: "primary" | "secondary" | "black" | "accent" | "white";
}

// FooterSection.tsx с принудительным белым цветом
const FooterSection: React.FC<FooterSectionProps> = ({
  bgColor = "secondary",
  textColor = "white",
  logoTitleColor = "white",
}) => {
  const verticalPadding = "py-10";

  return (
    <footer
      className={twMerge(
        "w-full",
        verticalPadding,
        bgColor === "white" && "bg-white",
        bgColor === "secondary" && "bg-secondary"
      )}
    >
      <div
        className="mx-auto flex items-center gap-10 text-white"
        style={{ padding: "0 80px" }}
      >
        <HeaderLogo textColor={textColor} titleColor={logoTitleColor} />
        <FooterNav textColor={textColor} />
        <HeaderCart textColor={textColor} />
      </div>
    </footer>
  );
};

export default FooterSection;
