"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import ShowDailyRoutineCard from "./routineManagement/daily/ShowDailyRoutineCard";
const Routines = () => {
  return (
    <div className="flex">
      <ShowDailyRoutineCard />
    </div>
  );
};

export default Routines;
