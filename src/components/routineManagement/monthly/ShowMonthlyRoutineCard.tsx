"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { FC } from "react";
import CreateMonthlyRoutineModal from "./CreateMonthlyRoutineModal";
import { useQuery } from "@tanstack/react-query";
import { GetMonthlyRoutineAPI } from "@/types/API";
import axios from "axios";

interface ShowMonthlyRoutineCardProps {
  className?: string;
}

const formNumber = (date: number) => {
  let formedNumber = "";

  if (date !== 11 && date % 10 === 1) {
    formedNumber = date + "st";
  } else if (date !== 12 && date % 10 === 2) {
    formedNumber = date + "nd";
  } else if (date !== 13 && date % 10 === 3) {
    formedNumber = date + "rd";
  } else {
    formedNumber = date + "th";
  }

  return formedNumber;
};

const ShowMonthlyRoutineCard: FC<ShowMonthlyRoutineCardProps> = ({
  className,
}) => {
  const { data, isPending, refetch } = useQuery<GetMonthlyRoutineAPI>({
    queryKey: ["monthly routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/monthly");

      return response.data;
    },
  });

  return (
    <Card className={className}>
      <CardHeader className="flex items-center flex-row space-x-6">
        <CardTitle>Monthly Routines</CardTitle>
        <CreateMonthlyRoutineModal refetch={refetch} />
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="w-[50%] border-r-2 border-gray-200">
          <p className="text-xl font-medium">Day & Week</p>
          <div>
            <div className="flex flex-col w-full space-y-1">
              {isPending
                ? "Loading..."
                : data?.monthlyRoutinesWithWeekAndDay.map((routine) => (
                    <div key={routine.id} className="flex items-center">
                      <span className="text-lg w-[60%]">{routine.content}</span>
                      <span className="text-sm ">{`${formNumber(
                        routine.weekAndDay?.week || 0
                      )} ${routine.weekAndDay?.day}`}</span>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className="w-[48%]">
          <p className="text-xl font-medium">Date</p>
          <div className="flex flex-col w-full sapce-y-1">
            {isPending
              ? "Loading..."
              : data?.monthlyRoutinesWithDate.map((routine) => (
                  <div key={routine.id} className="flex items-center">
                    <span className="text-lg w-[60%]">{routine.content}</span>
                    <span className="text-sm">
                      {`${formNumber(routine.date?.date || 0)} of every month`}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowMonthlyRoutineCard;
