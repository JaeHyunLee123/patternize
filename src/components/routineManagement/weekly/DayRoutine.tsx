import { FC } from "react";

import type { WeeklyRoutine, Days } from "@prisma/client";
import { isDayMatch } from "@/lib/utils";
import UpdateWeeklyRoutineSheet from "./UpdateWeeklyRoutineSheet";

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
      <p className="text-xl font-medium">{day}</p>
      {!thisDayRoutines || thisDayRoutines.length === 0 ? (
        <p className="text-sm">-</p>
      ) : (
        thisDayRoutines.map((routine) => (
          <UpdateWeeklyRoutineSheet routine={routine} key={routine.id} />
        ))
      )}
    </div>
  );
};

export default DayRoutine;
