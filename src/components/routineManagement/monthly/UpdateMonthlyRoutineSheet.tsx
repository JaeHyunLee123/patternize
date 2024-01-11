"use client";

import { Separator } from "@/components/ui/Separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";
import {
  MonthlyRoutineWithDate,
  MonthlyRoutineWithWeekAndDay,
} from "@/types/API";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { FC } from "react";
import DeleteMonthlyRoutineModal from "./DeleteMonthlyRoutineModal";

interface UpdateMonthlyRoutineSheetProps {
  routine: MonthlyRoutineWithDate | MonthlyRoutineWithWeekAndDay;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
  classname?: string;
}

const UpdateMonthlyRoutineSheet: FC<UpdateMonthlyRoutineSheetProps> = ({
  refetch,
  routine,
  classname,
}) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "block text-lg hover:font-semibold text-start",
          classname
        )}
      >
        {routine.content}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Update "${routine.content}"`}</SheetTitle>
          <SheetDescription>
            You can update or delete routine here
          </SheetDescription>
        </SheetHeader>
        <div>TODO: make form for update monthly routine</div>
        <Separator />
        <div className="flex items-center space-x-2 justify-between">
          <span className="text-foreground text-lg">Delete Routine</span>
          <DeleteMonthlyRoutineModal refetch={refetch} routineId={routine.id} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateMonthlyRoutineSheet;
