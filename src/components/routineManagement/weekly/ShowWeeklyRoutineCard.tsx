"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const ShowWeeklyRoutineCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Routines</CardTitle>
      </CardHeader>
      <CardContent>Show weekly routine here</CardContent>
    </Card>
  );
};

export default ShowWeeklyRoutineCard;
