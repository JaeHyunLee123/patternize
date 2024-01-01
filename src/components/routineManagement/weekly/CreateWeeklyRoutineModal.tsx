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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { useToast } from "@/hook/use-toast";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  RefetchOptions,
  QueryObserverResult,
  useMutation,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface CreateWeeklyRoutineModalProps {
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

interface CreateWeeklyRoutineForm {
  content: string;
  days: string[];
}

const CreateWeeklyRoutineModal: FC<CreateWeeklyRoutineModalProps> = ({
  refetch,
}) => {
  const { toast } = useToast();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CreateWeeklyRoutineForm>({ mode: "onChange" });

  const [days] = useState<string[]>();

  const { mutate } = useMutation({
    mutationFn: (form: CreateWeeklyRoutineForm) => {
      return axios.post("/api/routine/weekly", form);
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

  const onSubmit = (form: CreateWeeklyRoutineForm) => {
    if (!days || days.length === 0) {
      toast({
        title: "Please select at least one day",
        variant: "destructive",
      });

      return;
    }

    form.days = days;

    mutate(form);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Weekly Routine</DialogTitle>
        </DialogHeader>

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
                console.log(days);
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
