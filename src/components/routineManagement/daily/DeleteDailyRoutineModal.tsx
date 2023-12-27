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

interface DeleteDailyRoutineModalProps {
  routineId: string;
}

const DeleteDailyRoutineModal = ({
  routineId,
}: DeleteDailyRoutineModalProps) => {
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
              onClick={() => {}}
            >
              Delete
            </AlertDialogAction>
          </SheetClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDailyRoutineModal;
