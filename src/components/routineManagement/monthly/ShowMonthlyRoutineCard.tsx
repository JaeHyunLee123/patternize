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
      <CardContent className="flex justify-between">
        <div className="w-[50%] border-r-2 border-gray-200">
          <p className="text-xl font-medium">Day & Week</p>
          <div>
            <div className="flex items-center">
              <span className="text-lg font-medium w-[50%]">
                Sample routine
              </span>
              <span className="text-sm ">1st mon</span>
            </div>
          </div>
        </div>
        <div className="w-[48%]">
          <p className="text-xl font-medium">Date</p>
          <div className="flex items-center">
            <span className="text-lg font-medium w-[50%]">Sample routine</span>
            <span className="text-sm ">25</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowMonthlyRoutineCard;
