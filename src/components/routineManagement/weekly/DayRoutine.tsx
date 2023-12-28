import { FC } from "react";

import type { Day, WeeklyRoutine } from "@prisma/client";

interface DayRoutineProps {
  routines?: WeeklyRoutine[] | null;
  day: Day;
}

const DayRoutine: FC<DayRoutineProps> = ({ routines, day }) => {
  const thisDayRoutines = routines?.filter((routine) => routine.day === day);

  return (
    <div>
      <p className="text-lg font-medium">{day}</p>
      {!thisDayRoutines || thisDayRoutines.length === 0 ? (
        <p>No routine</p>
      ) : (
        thisDayRoutines.map((routine) => (
          <p key={routine.id}>{routine.content}</p>
        ))
      )}
    </div>
  );
};

export default DayRoutine;
