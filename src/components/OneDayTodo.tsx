"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

interface OneDayTodoProps {}

const OneDayTodo: FC<OneDayTodoProps> = ({}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OneDayTodo</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default OneDayTodo;
