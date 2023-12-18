import type { DailyRoutine } from "@prisma/client";

export interface StandardAPI {
  ok: boolean;
  errorMessage: string?;
}

export interface GetDailyRoutinesAPI extends StandardAPI {
  dailyRoutines: DailyRoutine[]?;
}
