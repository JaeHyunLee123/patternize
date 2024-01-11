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
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { FC } from "react";

interface DeleteMonthlyRoutineModalProps {
  routineId: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

const DeleteMonthlyRoutineModal: FC<DeleteMonthlyRoutineModalProps> = ({}) => {
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
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
            >
              Delete
            </AlertDialogAction>
          </SheetClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMonthlyRoutineModal;
