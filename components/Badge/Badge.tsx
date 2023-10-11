import { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: "green" | "red" | "gray" | "ghost";
}

const Badge = ({ children, type }: BadgeProps) => {
  return (
    <div
      className={cn("text-xs py-1.5 px-3 rounded-2xl", {
        "text-emerald-400 bg-green-700": type === "green",
        "border border-slate-500 text-slate-500": type === "gray",
        "text-white bg-red-600": type === "red",
        "text-violet-600 border border-violet-600": type === "ghost",
      })}
    >
      {children}
    </div>
  );
};

export default Badge;
