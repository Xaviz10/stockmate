import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const ShoppingCarIcon: FC<IconProps> = ({
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
      <ellipse
        cx="5.50008"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="5.50008"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5834 15.5833H5.50008V2.75H3.66675"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5834 15.5833H5.50008V2.75H3.66675"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
