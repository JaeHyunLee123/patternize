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
}

const DeleteWeeklyRoutineModal: FC<DeleteWeeklyRoutineModalProps> = ({
  routineId,
}) => {
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
