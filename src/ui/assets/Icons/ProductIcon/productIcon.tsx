import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const ProductIcon: FC<IconProps> = ({
  className,
  color = "#8B909A",
  width = "22",
  height = "22",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 2.75L18.3334 6.875V15.125L11.0001 19.25L3.66675 15.125V6.875L11.0001 2.75"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0001 2.75L18.3334 6.875V15.125L11.0001 19.25L3.66675 15.125V6.875L11.0001 2.75"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0001 11V19.25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0001 11V19.25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0001 11L3.66675 6.875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0001 11L3.66675 6.875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
