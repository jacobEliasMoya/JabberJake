import { cn } from "@/util/util";
import React from "react";
import { IconType } from "react-icons";
import {} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowUp, FaEllipsisH, FaChevronDown } from "react-icons/fa";

type IconProps = {
  icon: string;
  size: string;
  additionalClasses: string;
};

type StringObject = Record<string, string>;

const IconRenderer = ({
  icon,
  size = "md",
  additionalClasses = "",
}: IconProps) => {
  const icons: Record<string, IconType> = {
    hamburgerMenu: RxHamburgerMenu,
    downIcon: FaChevronDown,
    downArrow: FaArrowUp,
    pendingDots: FaEllipsisH,
    shareIcon: FiShare,
  };

  const sizes: StringObject = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const selectedSize: string = sizes[size];

  const Comp: IconType = icons[icon];

  return <Comp className={cn(selectedSize, additionalClasses)} />;
};

export default IconRenderer;
