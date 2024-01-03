import { FC } from "react";

import type { WeeklyRoutine, Days } from "@prisma/client";
import { isDayMatch } from "@/lib/utils";
import UpdateWeeklyRoutineSheet from "./UpdateWeeklyRoutineSheet";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";

interface WeeklyRoutineWithDays extends WeeklyRoutine {
  days: Days;
}

interface DayRoutineProps {
  routines?: WeeklyRoutineWithDays[] | null;
  day: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<unknown, Error>>;
}

const DayRoutine: FC<DayRoutineProps> = ({ routines, day, refetch }) => {
  const thisDayRoutines = routines?.filter((routine) =>
    isDayMatch({
      days: routine.days,
      day: day,
    })
  );

  return (
    <div>
      <p className="text-xl font-medium">{day}</p>
      {!thisDayRoutines || thisDayRoutines.length === 0 ? (
        <p className="text-sm">-</p>
      ) : (
        thisDayRoutines.map((routine) => (
          <UpdateWeeklyRoutineSheet
            routine={routine}
            key={routine.id}
            refetch={refetch}
          />
        ))
      )}
    </div>
  );
};

export default DayRoutine;
