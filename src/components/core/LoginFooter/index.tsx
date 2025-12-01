import React from "react";
import Typography from "../../ui/Typography";

interface LoginFooterProps {
  text: string;
}

const LoginFooter: React.FC<LoginFooterProps> = ({ text }) => (
  <Typography
    variant="14-400"
    color="secondary"
    className="text-center opacity-70"
  >
    {text}
  </Typography>
);

export default LoginFooter;
