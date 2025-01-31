import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <Button variant="contained" color="primary" onClick={onClick}>{label}</Button>;
};

export default CustomButton;
