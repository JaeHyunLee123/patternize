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
import { WeeklyRoutine, Days } from "@prisma/client";
import { FC, useState } from "react";
import DeleteWeeklyRoutineModal from "./DeleteWeeklyRoutineModal";
import {
  RefetchOptions,
  QueryObserverResult,
  useMutation,
} from "@tanstack/react-query";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { useToast } from "@/hook/use-toast";
import axios, { AxiosError } from "axios";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input";

interface WeeklyRoutineWithDays extends WeeklyRoutine {
  days: Days;
}

interface UpdateWeeklyRoutineSheetProps {
  routine: WeeklyRoutineWithDays;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

interface UpdateWeeklyRoutineForm {
  newContent: string;
  days: string[];
  id: string;
}

const UpdateWeeklyRoutineSheet: FC<UpdateWeeklyRoutineSheetProps> = ({
  routine,
  refetch,
}) => {
  const { toast } = useToast();

  const {} = useMutation({
    mutationFn: (form) => {
      return axios.put("/api/routine/weekly", form);
    },
    onSuccess: () => {
      reset();
      refetch();
      toast({
        title: "Update Daily Routine Success!",
        className: "bg-green-300",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Update Daily Routine Failed!",
          description: String(error.response?.data.errorMessage),
          variant: "destructive",
        });
      }
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UpdateWeeklyRoutineForm>({ mode: "onChange" });

  const [days, setDays] = useState<string[]>();

  const onSubmit = (form: UpdateWeeklyRoutineForm) => {
    if (!days || days.length === 0) {
      toast({
        title: "Please select at least one day",
        variant: "destructive",
      });

      return;
    }
    form.id = routine.id;
    form.days = days;
  };

  return (
    <Sheet>
      <SheetTrigger className="block text-lg hover:font-semibold">
        {routine.content}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Update "${routine.content}"`}</SheetTitle>
          <SheetDescription>
            You can update or delete routine here
          </SheetDescription>
          <form
            className="flex flex-col space-y-2 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <Label htmlFor="day">Select days</Label>
              <ToggleGroup
                type="multiple"
                value={days}
                onValueChange={(days) => {
                  setDays(days);
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
            </div>
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
          <Separator />
          <div className="flex items-center space-x-2 justify-between">
            <span className="text-foreground text-lg">Delete Routine</span>
            <DeleteWeeklyRoutineModal
              routineId={routine.id}
              refetch={refetch}
            />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateWeeklyRoutineSheet;
