"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { FC } from "react";

interface ShowMonthlyRoutineCardProps {
  className?: string;
}

const ShowMonthlyRoutineCard: FC<ShowMonthlyRoutineCardProps> = ({
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Monthly Routines</CardTitle>
      </CardHeader>
      <CardContent className="flex space-x-2">
        <div className="w-[50%] border-r-2 border-gray-200">
          <p className="text-xl font-medium">Day & Weeks</p>
          <div>
            <span>Sample 1st</span>
          </div>
        </div>
        <div className="">
          <p className="text-xl font-medium">Date</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowMonthlyRoutineCard;
