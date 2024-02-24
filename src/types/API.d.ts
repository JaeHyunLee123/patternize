import type {
  DailyRoutine,
  Date,
  Days,
  MonthlyRoutine,
  WeekAndDay,
  WeeklyRoutine,
} from "@prisma/client";

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

interface MonthlyRoutineWithDate extends MonthlyRoutine {
  date: Date | null;
}

interface MonthlyRoutineWithWeekAndDay extends MonthlyRoutine {
  weekAndDay: WeekAndDay | null;
}

export interface GetMonthlyRoutineAPI extends StandardAPI {
  monthlyRoutinesWithDate: MonthlyRoutineWithDate[];
  monthlyRoutinesWithWeekAndDay: MonthlyRoutineWithWeekAndDay[];
}

interface MonthlyRoutineWithSchedule extends MonthlyRoutine {
  weekAndDay: WeekAndDay | null;
  date: Date | null;
}

export interface GetTodayRoutineAPI extends StandardAPI {
  dailyRoutines: DailyRoutine[];
  todayWeeklyRoutines: WeeklyRoutineWithDays[];
  todayMonthlyRoutines: MonthlyRoutineWithSchedule[];
}
