import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

import Arrow from "./arrow.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "ghost";
  arrow: "right" | "bottom" | "none";
}

const Button = ({
  children,
  variant,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn("p-2.5", "cursor-pointer", "rounded-md", {
        "bg-violet-600": variant === "primary",
        "text-stone-50": variant === "primary",
        "hover:bg-violet-800": variant === "primary",
        "bg-indigo-50": variant === "ghost",
        "text-neutral-900": variant === "ghost",
        "hover:bg-indigo-100": variant === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn("inline-block ml-2.5", {
            "rotate-90": arrow === "bottom",
            "[&>svg] fill-gray-50": variant === "primary",
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};

export default Button;
