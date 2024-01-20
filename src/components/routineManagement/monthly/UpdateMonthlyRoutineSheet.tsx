"use client";

import { Separator } from "@/components/ui/Separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";
import {
  MonthlyRoutineWithDate,
  MonthlyRoutineWithWeekAndDay,
} from "@/types/API";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { FC, useState } from "react";
import DeleteMonthlyRoutineModal from "./DeleteMonthlyRoutineModal";
import { useToast } from "@/hook/use-toast";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import OnlyDatePicker from "@/components/OnlyDatePicker";

interface UpdateMonthlyRoutineSheetProps {
  routine: MonthlyRoutineWithDate | MonthlyRoutineWithWeekAndDay;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
  classname?: string;
}

interface UpdateMonthlyRoutineForm {
  isDate: boolean;
  newContent: string;
  routineId: string;

  newWeek?: number;
  newDay?: string;

  newDate?: number;
}

type monthlyRoutineType = "weekAndDay" | "date";

const UpdateMonthlyRoutineSheet: FC<UpdateMonthlyRoutineSheetProps> = ({
  refetch,
  routine,
  classname,
}) => {
  const { toast } = useToast();
  const [routineType, setRoutineType] =
    useState<monthlyRoutineType>("weekAndDay");

  const [date, setDate] = useState(
    "date" in routine ? String(routine.date?.date) : ""
  );
  const [day, setDay] = useState(
    "weekAndDay" in routine
      ? routine.weekAndDay
        ? routine.weekAndDay?.day.toLowerCase()
        : ""
      : ""
  );
  const [week, setWeek] = useState(
    "weekAndDay" in routine ? String(routine.weekAndDay?.week) : ""
  );

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<UpdateMonthlyRoutineForm>({ mode: "onChange" });

  const { mutate } = useMutation({
    mutationFn: (form: UpdateMonthlyRoutineForm) => {
      return axios.put("api/routine/monthly", form);
    },
    onSuccess: () => {
      reset();
      refetch();
      toast({
        title: "Create Weekly Routine Success!",
        className: "bg-green-300",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Create Weekly Routine Failed!",
          description: String(error.response?.data.errorMessage),
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (form: UpdateMonthlyRoutineForm) => {
    form.routineId = routine.id;
    if (routineType === "weekAndDay") {
      form.newWeek = Number(week);
      form.newDay = day.toUpperCase();
      form.isDate = false;

      if (!(1 <= form.newWeek && form.newWeek <= 4)) return;

      mutate(form);
    } else {
      form.newDate = Number(date);
      form.isDate = true;

      if (!(1 <= form.newDate || form.newDate <= 31)) return;

      mutate(form);
    }
  };

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "block text-lg hover:font-semibold text-start",
          classname
        )}
      >
        {routine.content}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Update "${routine.content}"`}</SheetTitle>
          <SheetDescription>
            You can update or delete routine here
          </SheetDescription>
        </SheetHeader>
        <form
          className="flex flex-col space-y-2 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Tabs
            className="w-full"
            onValueChange={(type) => {
              if (type === "weekAndDay" || type === "date")
                setRoutineType(type);
            }}
            defaultValue={routine.isDate ? "date" : "weekAndDay"}
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
              <div className="flex flex-col items-center space-y-2">
                <OnlyDatePicker
                  classname="mt-2"
                  onChange={setDate}
                  defaultValue={date}
                />
                <span className="text-xs text-gray-500">
                  {date > "28"
                    ? "This routine will be shown at 28th on February"
                    : ""}
                </span>
                <span className="text-xs text-gray-500">
                  {date === "31"
                    ? "This routine will be shown at 30th on April, June , September and November"
                    : ""}
                </span>
              </div>
            </TabsContent>
          </Tabs>
          <div className="w-full">
            <Label htmlFor="routine">Routine</Label>
            <Input
              id="routine"
              {...register("newContent", {
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
              defaultValue={routine.content}
            />
            <span className="text-red-500">
              {errors.newContent ? errors.newContent.message : ""}
            </span>
          </div>
          <SheetClose asChild>
            <Button type="submit" className="w-[50%]" variant={"outline"}>
              Create
            </Button>
          </SheetClose>
        </form>
        <Separator className="my-2" />
        <div className="flex items-center space-x-2 justify-between">
          <span className="text-foreground text-lg">Delete Routine</span>
          <DeleteMonthlyRoutineModal refetch={refetch} routineId={routine.id} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateMonthlyRoutineSheet;
