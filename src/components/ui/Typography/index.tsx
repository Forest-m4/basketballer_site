import { type JSX, type PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const typesMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  label: "label",
  span: "span",
  a: "a",
} as const;

type TypographyType = keyof typeof typesMapping;

const typography = tv({
  base: "font-montserrat",
  variants: {
    variant: {
      "12-300": "text-[12px] font-light",
      "12-400": "text-[12px] font-normal",
      "12-700": "text-[12px] font-bold",
      "14-700": "text-[14px] font-bold",
      "15-400": "text-[15px] font-normal",
      "16-400": "text-[16px] font-normal",
      "16-700": "text-[16px] font-bold",
      "16-900": "text-[16px] font-black",
      "17-700": "text-[17px] font-bold",
      "18-400": "text-[18px] font-normal",
      "18-700": "text-[18px] font-bold",
      "20-900": "text-[20px] font-black",
      "25-900": "text-[25px] font-black",
      "36-900": "text-[36px] font-black",
      "50-900": "text-[50px] font-black",
      "14-400": "text-[14px] font-normal",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      black: "text-black",
      accent: "text-accent",
      white: "text-white",
    },
  },

  defaultVariants: {
    variant: "16-700",
    color: "secondary",
  },
});

type TypographyVariantProps = VariantProps<typeof typography>;

interface TypographyProps extends PropsWithChildren, TypographyVariantProps {
  type?: TypographyType;
  className?: string;
  htmlFor?: string;
  href?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  type = "p",
  variant,
  color,
  className,
  ...props
}) => {
  const Component = typesMapping[type] as keyof JSX.IntrinsicElements;

  return (
    <Component
      {...props}
      className={twMerge(typography({ variant, color }), className)}
    >
      {children}
    </Component>
  );
};

export default Typography;