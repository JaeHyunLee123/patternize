"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetDailyRoutinesAPI } from "@/types/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const Routines = () => {
  const { data, isPending } = useQuery<GetDailyRoutinesAPI>({
    queryKey: ["daily routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/daily");

      return response.data;
    },
  });

  return (
    <Card className="w-[50%]">
      <CardHeader>
        <CardTitle>Daily Routines</CardTitle>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <p>Loading data...</p>
        ) : data?.dailyRoutines?.length === 0 ? (
          <p>No daily routine</p>
        ) : (
          <p>show routine here</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Routines;
