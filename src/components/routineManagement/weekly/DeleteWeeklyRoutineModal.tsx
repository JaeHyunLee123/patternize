"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { Button, buttonVariants } from "@/components/ui/Button";
import { SheetClose } from "@/components/ui/Sheet";
import { useToast } from "@/hook/use-toast";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FC } from "react";

interface DeleteWeeklyRoutineModalProps {
  routineId: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

const DeleteWeeklyRoutineModal: FC<DeleteWeeklyRoutineModalProps> = ({
  routineId,
  refetch,
}) => {
  const { toast } = useToast();

  const { mutate } = useMutation({
    mutationFn: () => {
      const payload = { routineId };
      return axios.delete("/api/routine/weekly", { data: payload });
    },
    onSuccess: () => {
      refetch();
      toast({
        title: "Delete Daily Routine!",
        className: "bg-red-300",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Delete Daily Routine Failed!",
          description: String(error.response?.data.errorMessage),
          variant: "destructive",
        });
      }
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"destructive"}>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            routine and remove your data from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <SheetClose asChild>
            <AlertDialogAction>Delete</AlertDialogAction>
          </SheetClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWeeklyRoutineModal;
