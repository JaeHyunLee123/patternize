"use client";

import OnlyDatePicker from "@/components/OnlyDatePicker";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface CreateMonthlyRoutineModalProps {}

interface CreateMontyleRoutineForm {
  isDate: boolean;
  content: string;

  week?: number;
  day?: number;

  date?: number;
}

type monthlyRoutineType = "weekAndDay" | "date";

const CreateMonthlyRoutineModal: FC<CreateMonthlyRoutineModalProps> = ({}) => {
  const [routineType, setRoutineType] =
    useState<monthlyRoutineType>("weekAndDay");

  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CreateMontyleRoutineForm>({ mode: "onChange" });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Monthly Routine</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col items-center space-y-3">
          <Tabs
            className="w-full"
            onValueChange={(type) => {
              if (type === "weekAndDay" || type === "date")
                setRoutineType(type);
            }}
          >
            <TabsList className="mb-3 w-full">
              <TabsTrigger className="w-[50%]" value="weekAndDay">
                Week And Day
              </TabsTrigger>
              <TabsTrigger className="w-[50%]" value="date">
                Date
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekAndDay">
              <Label htmlFor="week">Select a week</Label>
              <ToggleGroup
                type="single"
                value={week}
                onValueChange={(week) => {
                  setWeek(week);
                }}
              >
                <ToggleGroupItem value="1">1st</ToggleGroupItem>
                <ToggleGroupItem value="2">2nd</ToggleGroupItem>
                <ToggleGroupItem value="3">3rd</ToggleGroupItem>
                <ToggleGroupItem value="4">4th</ToggleGroupItem>
              </ToggleGroup>
              <Label htmlFor="day">Select a day</Label>
              <ToggleGroup
                type="single"
                value={day}
                onValueChange={(day) => {
                  setDay(day);
                }}
              >
                <ToggleGroupItem value="sun">Sun</ToggleGroupItem>
                <ToggleGroupItem value="mon">Mon</ToggleGroupItem>
                <ToggleGroupItem value="tue">Tue</ToggleGroupItem>
                <ToggleGroupItem value="wed">Wed</ToggleGroupItem>
                <ToggleGroupItem value="thu">Thu</ToggleGroupItem>
                <ToggleGroupItem value="fri">Fri</ToggleGroupItem>
                <ToggleGroupItem value="sat">Sat</ToggleGroupItem>
              </ToggleGroup>
            </TabsContent>
            <TabsContent
              value="date"
              className="flex items-center justify-center"
            >
              <OnlyDatePicker classname="mt-2" onChange={setDate} />
            </TabsContent>
          </Tabs>
          <div className="w-full">
            <Label htmlFor="routine">Routine</Label>
            <Input
              id="routine"
              {...register("content", {
                required: "Please write routine.",
                minLength: {
                  value: 2,
                  message: "Please write more than 2 letters",
                },
                maxLength: {
                  value: 200,
                  message: "Please write less than 200 letters",
                },
              })}
            />
            <span className="text-red-500">
              {errors.content ? errors.content.message : ""}
            </span>
          </div>
          <DialogClose asChild>
            <Button type="submit" className="w-[50%]">
              Create
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMonthlyRoutineModal;
