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
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/Input";
import { Label } from "@radix-ui/react-label";

interface UpdateDailyRoutineSheetProps {
  routineId: string;
  routineContent: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

const UpdateDailyRoutineSheet = ({
  routineId,
  routineContent,
  refetch,
}: UpdateDailyRoutineSheetProps) => {
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
          <div className="flex flex-col">
            <Label htmlFor="newContent">New Routine Content</Label>
            <div className="flex items-center justify-between space-x-2 mt-1">
              <Input placeholder="New Content" id="newContent" />
              <Button variant={"outline"}>Update</Button>
            </div>
          </div>
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
