import type { DailyRoutine, Days, WeeklyRoutine } from "@prisma/client";

export interface StandardAPI {
  ok: boolean;
  errorMessage: string?;
}

export interface GetDailyRoutinesAPI extends StandardAPI {
  dailyRoutines: DailyRoutine[]?;
}

interface WeeklyRoutineWithDays extends WeeklyRoutine {
  days: Days;
}

export interface GetWeeklyRoutinesAPI extends StandardAPI {
  weeklyRoutines: WeeklyRoutineWithDays[]?;
}
