import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./db";
import { Prisma } from "@prisma/client";

import type { Days } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDayMatch = ({ days, day }: { days: Days; day: string }) => {
  switch (day) {
    case "SUN":
      return days.sun;
    case "MON":
      return days.mon;
    case "TUE":
      return days.tue;
    case "WED":
      return days.wed;
    case "THU":
      return days.thu;
    case "FRI":
      return days.fri;
    case "SAT":
      return days.sat;
    default:
      return false;
  }
};
