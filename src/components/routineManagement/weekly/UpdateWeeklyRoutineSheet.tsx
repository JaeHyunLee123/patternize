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
import { FC } from "react";
import DeleteWeeklyRoutineModal from "./DeleteWeeklyRoutineModal";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";

interface WeeklyRoutineWithDays extends WeeklyRoutine {
  days: Days;
}

interface UpdateWeeklyRoutineSheetProps {
  routine: WeeklyRoutineWithDays;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

const UpdateWeeklyRoutineSheet: FC<UpdateWeeklyRoutineSheetProps> = ({
  routine,
  refetch,
}) => {
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
