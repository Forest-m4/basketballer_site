import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import HeaderNav from "../../components/core/HeaderNav";
import HeaderCart from "../../components/core/HeaderCart";
import { twMerge } from "tailwind-merge";

interface HeaderSectionProps {
  bgColor: "white" | "secondary";
  textColor?: "white" | "secondary";
  logoTitleColor?: "primary" | "secondary" | "black" | "accent" | "white";
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  bgColor,
  textColor = "secondary",
  logoTitleColor,
}) => {
  const verticalPadding = bgColor === "secondary" ? "py-10" : "py-6";

  return (
    <header
      className={twMerge(
        "w-full",
        verticalPadding,
        bgColor === "white" && "bg-white", // Убрал "shadow"
        bgColor === "secondary" && "bg-secondary"
      )}
    >
      <div
        className="mx-auto flex items-center justify-between" // changed from gap-10 to justify-between
        style={{ padding: "0 80px" }}
      >
        <HeaderLogo textColor={textColor} titleColor={logoTitleColor} />
        <HeaderNav textColor={textColor} />
        <div className="-translate-x-28">
          {" "}
          {/* Added wrapper with left shift */}
          <HeaderCart textColor={textColor} />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
