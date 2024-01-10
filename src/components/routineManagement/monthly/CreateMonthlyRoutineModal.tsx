"use client";

import OnlyDatePicker from "@/components/OnlyDatePicker";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { FC } from "react";

interface CreateMonthlyRoutineModalProps {}

const CreateMonthlyRoutineModal: FC<CreateMonthlyRoutineModalProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Monthly Routine</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-3">
          <Tabs className="w-full">
            <TabsList className="mb-3 w-full">
              <TabsTrigger className="w-[50%]" value="weekAndDay">
                Week And Day
              </TabsTrigger>
              <TabsTrigger className="w-[50%]" value="date">
                Date
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekAndDay">
              <Label htmlFor="week">Select a week</Label>
              <ToggleGroup type="single">
                <ToggleGroupItem value="1">1st</ToggleGroupItem>
                <ToggleGroupItem value="2">2nd</ToggleGroupItem>
                <ToggleGroupItem value="3">3rd</ToggleGroupItem>
                <ToggleGroupItem value="4">4th</ToggleGroupItem>
              </ToggleGroup>
              <Label htmlFor="day">Select a day</Label>
              <ToggleGroup type="single">
                <ToggleGroupItem value="sun">Sun</ToggleGroupItem>
                <ToggleGroupItem value="mon">Mon</ToggleGroupItem>
                <ToggleGroupItem value="tue">Tue</ToggleGroupItem>
                <ToggleGroupItem value="wed">Wed</ToggleGroupItem>
                <ToggleGroupItem value="thu">Thu</ToggleGroupItem>
                <ToggleGroupItem value="fri">Fri</ToggleGroupItem>
                <ToggleGroupItem value="sat">Sat</ToggleGroupItem>
              </ToggleGroup>
            </TabsContent>
            <TabsContent
              value="date"
              className="flex items-center justify-center"
            >
              <OnlyDatePicker classname="mt-2" />
            </TabsContent>
          </Tabs>
          <div className="w-full">
            <Label htmlFor="routine">Routine</Label>
            <Input id="routine" />
          </div>
          <DialogClose asChild>
            <Button className="w-[50%]">Create</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMonthlyRoutineModal;
