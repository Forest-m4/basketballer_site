import React from "react";
import Typography from "../../../components/ui/Typography";

interface Props {
  textColor?: "white" | "secondary";
}

const HeaderPhone: React.FC<Props> = ({ textColor = "secondary" }) => {
  return (
    <li>
      <Typography type="a" variant="14-700" color={textColor}>
        8(908)45-32-7798
      </Typography>
    </li>
  );
};

export default HeaderPhone;
