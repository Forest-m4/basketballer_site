import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import HeaderNav from "../../components/core/HeaderNav";
import HeaderCart from "../../components/core/HeaderCart";
import TriangleDownIcon from "../../components/core/TriangleDownIcon"; // импортируем
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
        bgColor === "white" && "bg-white",
        bgColor === "secondary" && "bg-secondary"
      )}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ padding: "0 80px" }}
      >
        <HeaderLogo textColor={textColor} titleColor={logoTitleColor} />
        <HeaderNav textColor={textColor} />

        {/* Контейнер для корзины и треугольника */}
        <div className="flex items-center gap-1 -translate-x-28">
          <HeaderCart textColor={textColor} />
          {/* Треугольник справа от корзины, выровнен по центру по оси Y */}
          <TriangleDownIcon
            color={textColor === "white" ? "#FFFFFF" : "#000000"}
            size={10}
            className="mb-1" // немного смещаем вниз для визуального выравнивания
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
