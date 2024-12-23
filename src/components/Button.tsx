import { ReactNode } from "react";

const Button = ({
  text,
  bgColor,
  rightIcon,
  leftIcon,
}: {
  text: string;
  bgColor: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}) => {
  return (
    <button
      className={` rounded-full py-3 px-6 ${bgColor} text-[black] flex items-center gap-2 my-3 font-semibold animate-Button`}
    >
      {leftIcon}
      <span>{text}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
