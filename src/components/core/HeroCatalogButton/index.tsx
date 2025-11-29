import HeroButton from "../../ui/HeroButton";
import React from "react";

interface HeroCatalogButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const HeroCatalogButton: React.FC<HeroCatalogButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <HeroButton
      size="hero"
      buttonColor="accent"
      className={className}
      {...props}
    >
      {children}
    </HeroButton>
  );
};

export default HeroCatalogButton;
