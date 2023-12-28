"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetDailyRoutinesAPI } from "@/types/API";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import CreateDailyRoutineModal from "./CreateDailyRoutineModal";
import UpdateDailyRoutineSheet from "./UpdateDailyRoutineSheet";

const ShowDailyRoutineCard = () => {
  const { data, isPending, refetch } = useQuery<GetDailyRoutinesAPI>({
    queryKey: ["daily routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/daily");

      return response.data;
    },
  });

  return (
    <Card>
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
            <UpdateDailyRoutineSheet
              key={routine.id}
              routineId={routine.id}
              routineContent={routine.content}
              refetch={refetch}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ShowDailyRoutineCard;
