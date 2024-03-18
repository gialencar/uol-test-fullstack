import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

/**
 * Represents the props for the input component.
 */
type InputProps = {
  register: UseFormRegister<any>;
  name: string;
  options?: RegisterOptions<any, string>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  register,
  name,
  options = {},
  ...rest
}: InputProps) => {
  return (
    <input
      {...register(name, options)}
      type="text"
      {...rest}
      className="mt-6 rounded-md py-3 focus:border-primary focus:outline-primary focus:ring-0"
    />
  );
};
