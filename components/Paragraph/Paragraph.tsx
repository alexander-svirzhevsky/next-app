import { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant: "s" | "m" | "l";
}

const Paragraph = ({ children, variant }: IParagraph) => {
  return (
    <p
      className={cn({
        "text-sm": variant === "s",
        "text-base": variant === "m",
        "text-lg": variant === "l",
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
