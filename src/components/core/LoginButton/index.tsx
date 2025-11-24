import React from "react";
import HeroButton from "../../ui/HeroButton";

interface LoginButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, onClick }) => (
  <HeroButton
    className="w-full h-[60px] bg-accent text-white hover:bg-[#EB2D66] hover:text-white"
    onClick={onClick}
  >
    {children}
  </HeroButton>
);

export default LoginButton;