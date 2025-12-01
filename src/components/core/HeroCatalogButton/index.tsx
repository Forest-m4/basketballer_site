import HeroButton from "../../ui/HeroButton";
import Typography from "../../ui/Typography";
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
      <Typography variant="16-700" color="white">
        {children}
      </Typography>
    </HeroButton>
  );
};

export default HeroCatalogButton;
