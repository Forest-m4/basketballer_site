import React from "react";
import Typography from "../../../components/ui/Typography";

interface HeaderNavItemProps {
  text: string;
  textColor?: "white" | "secondary";
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  text,
  textColor = "secondary",
}) => {
  return (
    <li>
      <Typography
        type="a"
        variant="12-400"
        color={textColor}
        className="cursor-pointer transition-colors duration-200 hover:text-primary"
      >
        {text}
      </Typography>
    </li>
  );
};

export default HeaderNavItem;
