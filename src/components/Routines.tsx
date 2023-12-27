"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetDailyRoutinesAPI } from "@/types/API";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import CreateDailyRoutineModal from "./CreateDailyRoutineModal";

const Routines = () => {
  const { data, isPending, refetch } = useQuery<GetDailyRoutinesAPI>({
    queryKey: ["daily routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/daily");

      return response.data;
    },
  });

  return (
    <Card className="w-[50%]">
      <CardHeader className="flex flex-row space-x-6 items-center">
        <CardTitle>Daily Routines</CardTitle>
        <CreateDailyRoutineModal refetch={refetch} />
      </CardHeader>
      <CardContent>
        {isPending ? (
          <p>Loading data...</p>
        ) : data?.dailyRoutines?.length === 0 ? (
          <p>No daily routine</p>
        ) : (
          data?.dailyRoutines?.map((routine) => (
            <p key={routine.id}>{routine.content}</p>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Routines;
