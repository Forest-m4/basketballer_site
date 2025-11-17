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
      "12px-bold":"text-[12px] font-bold",
      "11px-regular": "text-[11px] font-normal",
      "12px-regular": "text-[12px] font-normal",
      "16px-regular": "text-[16px] font-normal",
      "16px-bold": "text-[16px] font-bold",
      "18px-semibold": "text-[18px] font-semibold",
      "25px-bold": "text-[25px] font-bold",
      "36px-bold": "text-[36px] font-bold",
      "18px-medium": "text-[18px] font-medium",
    },
    color: {
      primary: "text-primary",
      accent: "text-accent",
      secondary: "text-secondary",
      muted: "text-muted",
    },
  },
  defaultVariants: {
    variant: "12px-regular",
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
