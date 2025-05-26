// components/CustomInput.tsx
import React from "react";
import styles from "../ui/input.module.css";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  register?: any; // idealmente: UseFormRegister<any> si tienes los tipos
  name: string;
}

const CustomInput = ({ type = "text", placeholder = "", register, name }: CustomInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      {...(register ? register(name) : {})}
    />
  );
};

export default CustomInput;
