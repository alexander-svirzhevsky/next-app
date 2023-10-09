import { HtmlHTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  variant: "h1" | "h2" | "h3";
}

const Heading = ({ children, variant }: HeadingProps) => {
  return (
    <>
      {variant === "h1" && (
        <h1 className='font-medium text-2xl m-0'>{children}</h1>
      )}
      {variant === "h2" && (
        <h2 className='font-medium text-xl m-0'>{children}</h2>
      )}
      {variant === "h3" && (
        <h3 className='font-semibold text-lg m-0'>{children}</h3>
      )}
    </>
  );
};

export default Heading;
