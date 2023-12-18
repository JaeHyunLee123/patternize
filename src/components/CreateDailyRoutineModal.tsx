"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "./ui/Button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";

interface CreateDailyRoutineForm {
  content: string;
}

const CreateDailyRoutineModal = () => {
  const {
    register,
    formState: { errors },
  } = useForm<CreateDailyRoutineForm>({ mode: "onChange" });

  const onSubmit = () => {
    console.log("Do nothing yet");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Daily Routine</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col space-y-2 items-center"
          onSubmit={onSubmit}
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
          <Button type="submit" className="w-[50%]">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDailyRoutineModal;
