"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Button } from "./ui/Button";
import { ToggleGroup, ToggleGroupItem } from "./ui/ToggleGroup";
import { Calendar } from "lucide-react";

interface OnlyDatePickerProps {
  classname?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

const OnlyDatePicker: FC<OnlyDatePickerProps> = ({ classname, onChange }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    if (onChange) onChange(date);
  }, [date, onChange]);

  const showDate = (date: string) => {
    let formedDate = "";
    if (date === "1" || date === "21" || date === "31") {
      formedDate = date + "st";
    } else if (date === "2" || date === "22") {
      formedDate = date + "nd";
    } else if (date === "3" || date === "23") {
      formedDate = date + "rd";
    } else {
      formedDate = date + "th";
    }

    return formedDate + " of every month";
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={`px-4 py-2 ${classname}`}>
          <Calendar className="mr-3" />
          {date ? showDate(date) : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ToggleGroup
          type="single"
          value={date}
          onValueChange={(date) => {
            setDate(date);
          }}
          className="flex items-center justify-center"
        >
          <div className="grid-cols-7 px-2">
            <ToggleGroupItem className="w-8 h-8" value="1">
              1
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="2">
              2
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="3">
              3
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="4">
              4
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="5">
              5
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="6">
              6
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="7">
              7
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="8">
              8
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="9">
              9
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="10">
              10
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="11">
              11
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="12">
              12
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="13">
              13
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="14">
              14
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="15">
              15
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="16">
              16
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="17">
              17
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="18">
              18
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="19">
              19
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="20">
              20
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="21">
              21
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="22">
              22
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="23">
              23
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="24">
              24
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="25">
              25
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="26">
              26
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="27">
              27
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="28">
              28
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="29">
              29
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="30">
              30
            </ToggleGroupItem>
            <ToggleGroupItem className="w-8 h-8" value="31">
              31
            </ToggleGroupItem>
          </div>
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
};

export default OnlyDatePicker;
