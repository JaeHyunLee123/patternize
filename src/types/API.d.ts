import type { DailyRoutine, WeeklyRoutine } from "@prisma/client";

export interface StandardAPI {
  ok: boolean;
  errorMessage: string?;
}

export interface GetDailyRoutinesAPI extends StandardAPI {
  dailyRoutines: DailyRoutine[]?;
}

export interface GetWeeklyRoutinesAPI extends StandardAPI {
  weeklyRoutines: WeeklyRoutine[]?;
}
