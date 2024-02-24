"use client";

import { FC } from "react";
import Clock from "./Clock";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetTodayRoutineAPI } from "@/types/API";

interface TodayTODOsProps {}

const TodayTODOs: FC<TodayTODOsProps> = ({}) => {
  const { isPending, data } = useQuery<GetTodayRoutineAPI>({
    queryKey: ["today routines"],
    queryFn: async () => {
      const response = await axios.get("/api/routine/today");

      return response.data;
    },
  });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Clock className="text-8xl text-primary" />
      <div className="text-primary mt-8 w-[65%]">
        {isPending ? (
          "Loading..."
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <Card className="row-span-2">
              <CardHeader>
                <CardTitle>Daily TODO</CardTitle>
              </CardHeader>
              <CardContent>
                {data?.dailyRoutines.length === 0 ? (
                  <span>No daily TODO</span>
                ) : (
                  <ul>
                    {data?.dailyRoutines.map((routine) => (
                      <li key={routine.id}>{routine.content}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-medium">
                  Weekly TODO
                </CardTitle>
              </CardHeader>
              <CardContent>
                {data?.todayWeeklyRoutines.length === 0 ? (
                  <span>No weekly TODO today</span>
                ) : (
                  <ul>
                    {data?.todayWeeklyRoutines.map((routine) => (
                      <li key={routine.id}>{routine.content}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-medium">
                  Monthly TODO
                </CardTitle>
              </CardHeader>
              <CardContent>
                {data?.todayMonthlyRoutines.length === 0 ? (
                  <span>No monthly TODO today</span>
                ) : (
                  <ul>
                    {data?.todayMonthlyRoutines.map((routine) => (
                      <li key={routine.id}>{routine.content}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayTODOs;
