import { FC, MouseEventHandler } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const StockMateIcon: FC<IconProps> = ({
  className,
  color = "#0F60FF",
  width = "28",
  height = "24",
  onClick = () => {},
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="24" rx="8" fill={color} />
      <path
        d="M16.3203 19V13.1758H9.59375L6.47656 10.0586V6.55469L9.59375 3.44922H11.3516V8.96875H18.5L21.5117 12.0859V15.8945L18.4062 19H16.3203ZM12.1719 6.25V3.44922H18.3945L21.0898 6.15625V7.80859H16.3203V6.25H12.1719ZM6.47656 14.3359H11.6562V16.1875H15.5V19H9.08984L6.47656 15.8945V14.3359Z"
        fill="white"
      />
    </svg>
  );
};
