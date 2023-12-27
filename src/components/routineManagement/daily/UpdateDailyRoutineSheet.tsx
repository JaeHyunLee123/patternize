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

interface UpdateDailyRoutineSheetProps {
  routineId: string;
  routineContent: string;
}

//1. delete routine
// delete botton clicked -> modal popup -> ask 'are you sure?' -> delete
//2. change routine name

const UpdateDailyRoutineSheet = ({
  routineId,
  routineContent,
}: UpdateDailyRoutineSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger className="block text-lg hover:font-semibold">
        {routineContent}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update</SheetTitle>
        </SheetHeader>
        <DeleteDailyRoutineModal routineId={routineId} />
      </SheetContent>
    </Sheet>
  );
};

export default UpdateDailyRoutineSheet;
