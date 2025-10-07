import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


// simple util function to merge and better apply tw classes
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
