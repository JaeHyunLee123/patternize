"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { DailyRoutine } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const Routines = ({ userId }: { userId: string }) => {
  const { data, isPending } = useQuery<DailyRoutine[]>({
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
        ) : data?.length === 0 ? (
          <p>No daily routine</p>
        ) : (
          <p>show routine here</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Routines;
