import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export const getDaysStringArr = (days: Days) => {
  const result: string[] = [];

  for (const day in days) {
    if (
      day === "sun" ||
      day === "mon" ||
      day === "tue" ||
      day === "wed" ||
      day === "thu" ||
      day === "fri" ||
      day === "sat"
    ) {
      if (days[day]) result.push(day);
    }
  }

  return result;
};
