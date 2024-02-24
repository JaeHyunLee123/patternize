"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface ClockProps {
  className?: string;
}

const Clock: FC<ClockProps> = ({ className }) => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className={cn(className, "flex items-center")}>
      <span>{date.getHours().toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{date.getMinutes().toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{date.getSeconds().toString().padStart(2, "0")}</span>
    </div>
  );
};

export default Clock;
