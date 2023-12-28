"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";
import { Day } from "@prisma/client";
import { DialogTitle } from "@radix-ui/react-dialog";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface CreateWeeklyRoutineModalProps {
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

interface CreateWeeklyRoutineForm {
  content: string;
  day: Day;
}

const CreateWeeklyRoutineModal: FC<CreateWeeklyRoutineModalProps> = ({
  refetch,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<CreateWeeklyRoutineForm>({ mode: "onChange" });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Weekly Routine</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col space-y-2 items-center">
          <div className="w-full">
            <Label htmlFor="day">Select a day</Label>
            <Select {...register("day", { required: true })}>
              <SelectTrigger id="day">
                <SelectValue placeholder="DAY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Day.SUN}>SUN</SelectItem>
                <SelectItem value={Day.MON}>MON</SelectItem>
                <SelectItem value={Day.TUE}>TUE</SelectItem>
                <SelectItem value={Day.WED}>WED</SelectItem>
                <SelectItem value={Day.THU}>THU</SelectItem>
                <SelectItem value={Day.FRI}>FRI</SelectItem>
                <SelectItem value={Day.SAT}>SAT</SelectItem>
              </SelectContent>
            </Select>
          </div>
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

export default CreateWeeklyRoutineModal;
