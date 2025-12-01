import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import Typography from "../../../components/ui/Typography";

const button = tv({
  base: "font-bold transition-colors duration-150 focus:outline-none",
  variants: {
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
      hero: "w-[230px] h-[60px] text-[16px]",
      header: "w-[130px] h-[30px] text-[14px]", // Меняем на 14px
    },
    buttonColor: {
      primary: "bg-primary hover:bg-primary/90 active:bg-primary/80 text-white",
      secondary:
        "bg-secondary hover:bg-secondary/90 active:bg-secondary/80 text-white",
      accent: "bg-[#EB2D66] hover:bg-[#F24C7E] active:bg-[#FF6B9C] text-white",
      black: "bg-black hover:bg-gray-800 active:bg-gray-700 text-white",
    },
    variant: {
      solid: "",
      outline: "bg-transparent border-2",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      buttonColor: "primary",
      class: "border-primary text-primary hover:bg-primary hover:text-white",
    },
    {
      variant: "outline",
      buttonColor: "accent",
      class:
        "border-[#EB2D66] text-[#EB2D66] hover:bg-[#EB2D66] hover:text-white",
    },
    {
      variant: "outline",
      buttonColor: "secondary",
      class:
        "border-secondary text-secondary hover:bg-secondary hover:text-white",
    },
  ],
  defaultVariants: {
    size: "hero",
    buttonColor: "accent",
    variant: "solid",
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

interface HeroButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  children,
  size,
  buttonColor,
  variant,
  className,
  ...props
}) => {
  const getTextColor = () => {
    if (variant === "outline") {
      return buttonColor;
    }
    return "white";
  };

  return (
    <button
      {...props}
      className={twMerge(button({ size, buttonColor, variant }), className)}
    >
      <Typography type="span" color={getTextColor()}>
        {children}
      </Typography>
    </button>
  );
};

export default HeroButton;
