import { FC, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};

export default Button;
