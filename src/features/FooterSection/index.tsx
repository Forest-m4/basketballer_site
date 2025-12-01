import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import FooterNav from "../../components/core/FooterNav";
import { twMerge } from "tailwind-merge";

interface FooterSectionProps {
  bgColor?: "white" | "secondary" | "back";
  textColor?: "white" | "secondary";
  logoTitleColor?: "primary" | "secondary" | "black" | "accent" | "white";
}

const FooterSection: React.FC<FooterSectionProps> = ({
  bgColor = "back",
  textColor = "white", // уже белый по умолчанию
  logoTitleColor = "white",
}) => {
  const verticalPadding = "py-25";

  return (
    <footer
      className={twMerge(
        "w-full",
        verticalPadding,
        bgColor === "white" && "bg-white",
        bgColor === "secondary" && "bg-secondary",
        bgColor === "back" && "bg-back" // используем hex напрямую
      )}
    >
      <div
        className="mx-auto flex items-center gap-10 text-white" // добавляем text-white на весь контейнер
        style={{ padding: "0 80px" }}
      >
        <HeaderLogo textColor={textColor} titleColor={logoTitleColor} />
        <FooterNav textColor={textColor} />
      </div>
    </footer>
  );
};

export default FooterSection;
