"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetWeeklyRoutinesAPI } from "@/types/API";
import { Separator } from "@/components/ui/Separator";
import DayRoutine from "./DayRoutine";

const ShowWeeklyRoutineCard: FC = () => {
  const { data, isPending, refetch } = useQuery<GetWeeklyRoutinesAPI>({
    queryKey: ["weekly routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/weekly");

      return response.data;
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Routines</CardTitle>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <p>Loading data...</p>
        ) : (
          <div className="flex flex-col">
            <DayRoutine routines={data?.weeklyRoutines} day="SUN" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="MON" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="TUE" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="WED" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="THU" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="FRI" />
            <Separator />
            <DayRoutine routines={data?.weeklyRoutines} day="SAT" />
            <Separator />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShowWeeklyRoutineCard;
