import React from "react";
import Typography from "../../../components/ui/Typography";

interface Props {
  textColor?: "white" | "secondary";
}

const HeaderPhone: React.FC<Props> = ({ textColor = "secondary" }) => {
  return (
    <li>
      <a href="tel:890845327798">
        <Typography type="span" variant="14-700" color={textColor}>
          8(908)45-32-7798
        </Typography>
      </a>
    </li>
  );
};

export default HeaderPhone;