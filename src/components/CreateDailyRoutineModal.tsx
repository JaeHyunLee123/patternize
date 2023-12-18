"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "./ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { Label } from "./ui/Label";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { StandardAPI } from "@/types/API";

interface CreateDailyRoutineForm {
  content: string;
}

const CreateDailyRoutineModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDailyRoutineForm>({ mode: "onChange" });

  const { mutate, isPending } = useMutation({
    mutationFn: (form: CreateDailyRoutineForm) => {
      return axios.post("/api/routine/daily", form);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    },
  });

  const onSubmit = (form: CreateDailyRoutineForm) => {
    mutate(form);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Daily Routine</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col space-y-2 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Button type="submit" className="w-[50%]" disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDailyRoutineModal;
