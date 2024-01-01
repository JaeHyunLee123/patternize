import { FC } from "react";

import type { WeeklyRoutine, Days } from "@prisma/client";
import { isDayMatch } from "@/lib/utils";

interface WeeklyRoutineWithDays extends WeeklyRoutine {
  days: Days;
}

interface DayRoutineProps {
  routines?: WeeklyRoutineWithDays[] | null;
  day: string;
}

const DayRoutine: FC<DayRoutineProps> = ({ routines, day }) => {
  const thisDayRoutines = routines?.filter((routine) =>
    isDayMatch({
      days: routine.days,
      day: day,
    })
  );

  return (
    <div>
      <p className="text-lg font-medium">{day}</p>
      {!thisDayRoutines || thisDayRoutines.length === 0 ? (
        <p className="text-sm">No routine</p>
      ) : (
        thisDayRoutines.map((routine) => (
          <p key={routine.id}>{routine.content}</p>
        ))
      )}
    </div>
  );
};

export default DayRoutine;
