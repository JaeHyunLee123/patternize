"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "../../ui/Button";
import DeleteDailyRoutineModal from "./DeleteDailyRoutineModal";
import {
  RefetchOptions,
  QueryObserverResult,
  useMutation,
} from "@tanstack/react-query";
import { Separator } from "@/components/ui/Separator";
import { Input } from "@/components/ui/Input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useToast } from "@/hook/use-toast";

interface UpdateDailyRoutineSheetProps {
  routineId: string;
  routineContent: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

interface UpdateDailyRoutineForm {
  newContent: string;
}

const UpdateDailyRoutineSheet = ({
  routineId,
  routineContent,
  refetch,
}: UpdateDailyRoutineSheetProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateDailyRoutineForm>({
    mode: "onChange",
  });
  const { mutate } = useMutation({
    mutationFn: ({
      routineId,
      newContent,
    }: {
      routineId: string;
      newContent: string;
    }) => {
      const payload = { routineId, newContent };
      return axios.put("/api/routine/daily", payload);
    },
    onSuccess: () => {
      reset();
      refetch();
      toast({
        title: "Create Daily Routine Success!",
        className: "bg-green-300",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Create Daily Routine Failed!",
          description: String(error.response?.data.errorMessage),
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (form: UpdateDailyRoutineForm) => {
    const newContent = form.newContent;
    mutate({ routineId, newContent });
  };

  return (
    <Sheet>
      <SheetTrigger className="block text-lg hover:font-semibold">
        {routineContent}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Update "${routineContent}"`}</SheetTitle>
          <SheetDescription>
            You can update or delete routine here
          </SheetDescription>
        </SheetHeader>
        <div className="felx flex-col space-y-4 mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="newContent">New Routine</Label>
            <div className="flex items-center justify-between space-x-2 mt-1">
              <div className="flex flex-col space-y-1 w-full">
                <Input
                  id="newContent"
                  {...register("newContent", {
                    required: "Please write new routine.",
                    minLength: {
                      value: 2,
                      message: "Please write more than 2 letters",
                    },
                    maxLength: {
                      value: 200,
                      message: "Please write less than 200 letters",
                    },
                  })}
                  className="w-full"
                  defaultValue={routineContent}
                />
                <span className="text-red-500">
                  {errors.newContent ? errors.newContent.message : ""}
                </span>
              </div>

              <SheetClose asChild>
                <Button type="submit" variant={"outline"}>
                  Update
                </Button>
              </SheetClose>
            </div>
          </form>
          <Separator />
          <div className="flex items-center space-x-2 justify-between">
            <span className="text-foreground text-lg">Delete Routine</span>
            <DeleteDailyRoutineModal routineId={routineId} refetch={refetch} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateDailyRoutineSheet;
