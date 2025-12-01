import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const square = tv({
  base: "bg-white border border-gray-300",
  variants: {
    size: {
      xs: "w-2 h-2", // 8px
      sm: "w-3 h-3", // 12px
      md: "w-4 h-4", // 16px
      lg: "w-6 h-6", // 24px
      xl: "w-8 h-8", // 32px
    },
  },
  defaultVariants: {
    size: "md", // 16px по умолчанию
  },
});

type SquareVariantProps = VariantProps<typeof square>;

interface SmallSquareProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SquareVariantProps {
  className?: string;
}

const SmallSquare: React.FC<SmallSquareProps> = ({
  size,
  className,
  ...props
}) => {
  return <div {...props} className={twMerge(square({ size }), className)} />;
};

export default SmallSquare;
