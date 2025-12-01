import React from "react";
import Typography from "../../ui/Typography";

interface LoginHeaderProps {
  text: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ text }) => (
  <Typography type="h2" variant="25-900" className="text-center">
    {text}
  </Typography>
);

export default LoginHeader;
