"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetWeeklyRoutinesAPI } from "@/types/API";
import { Separator } from "@/components/ui/Separator";
import DayRoutine from "./DayRoutine";
import { Day } from "@prisma/client";
import CreateWeeklyRoutineModal from "./CreateWeeklyRoutineModal";

const ShowWeeklyRoutineCard: FC = () => {
  const { data, isPending, refetch } = useQuery<GetWeeklyRoutinesAPI>({
    queryKey: ["weekly routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/weekly");

      return response.data;
    },
  });

  const days = [Day.SUN, Day.MON, Day.TUE, Day.WED, Day.THU, Day.FRI, Day.SAT];

  return (
    <Card>
      <CardHeader className="flex items-center flex-row space-x-6">
        <CardTitle>Weekly Routines</CardTitle>
        <CreateWeeklyRoutineModal refetch={refetch} />
      </CardHeader>
      <CardContent>
        {isPending ? (
          <p>Loading data...</p>
        ) : (
          <div className="flex flex-col">
            {days.map((day) => {
              return (
                <>
                  <DayRoutine routines={data?.weeklyRoutines} day={day} />
                  <Separator />
                </>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShowWeeklyRoutineCard;
