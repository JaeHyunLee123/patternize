import { getAuthSession } from "@/lib/auth";
import ManageRoutines from "@/components/Routines";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Clock from "@/components/ui/Clock";
import { db } from "@/lib/db";
import { getWeek } from "@/lib/utils";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default async function Home() {
  const session = await getAuthSession();

  const date = new Date();

  const routineControl = await db.routineControl.findUnique({
    where: {
      userId: session?.user.id,
    },
    select: {
      id: true,
    },
  });

  const dailyRoutines = await db.dailyRoutine.findMany({
    where: {
      routineControlId: routineControl?.id || "",
    },
  });

  const weeklyRoutines = await db.weeklyRoutine.findMany({
    where: {
      routineControlId: routineControl?.id || "",
    },
    include: {
      days: true,
    },
  });

  const todayWeeklyRoutines = weeklyRoutines.filter((routine) => {
    switch (date.getDay()) {
      case 0:
        return routine.days.sun;
      case 1:
        return routine.days.mon;
      case 2:
        return routine.days.tue;
      case 3:
        return routine.days.wed;
      case 4:
        return routine.days.thu;
      case 5:
        return routine.days.fri;
      case 6:
        return routine.days.sat;
    }
  });

  const monthlyRoutines = await db.monthlyRoutine.findMany({
    where: {
      routineControlId: routineControl?.id || "",
    },
    include: {
      weekAndDay: true,
      date: true,
    },
  });

  const todayMonthlyRoutines = monthlyRoutines.filter((routine) => {
    if (routine.isDate) {
      if (date.getDate() > 28 && date.getMonth() === 2) {
        return (routine.date?.date || 0) > 28;
      }

      if (
        date.getDate() === 31 &&
        (date.getMonth() === 4 ||
          date.getMonth() === 6 ||
          date.getMonth() === 9 ||
          date.getMonth() === 11)
      ) {
        return (routine.date?.date || 0) === 31;
      }

      return routine.date?.date === date.getDate();
    } else {
      if (routine.weekAndDay?.week === getWeek()) {
        switch (date.getDay()) {
          case 0:
            return routine.weekAndDay.day === "SUN";
          case 1:
            return routine.weekAndDay.day === "MON";
          case 2:
            return routine.weekAndDay.day === "TUE";
          case 3:
            return routine.weekAndDay.day === "WED";
          case 4:
            return routine.weekAndDay.day === "THU";
          case 5:
            return routine.weekAndDay.day === "FRI";
          case 6:
            return routine.weekAndDay.day === "SAT";
        }
      }
      return false;
    }
  });

  console.log(getWeek());
  return (
    <main className="p-24">
      {session ? (
        <div className="flex flex-col justify-center items-center w-full">
          <Clock className="text-8xl text-primary" />
          <div>
            <span className="text-4xl font-semibold">TODO</span>
            <div>
              <span className="text-2xl font-medium">Daily TODO</span>
              <ul>
                {dailyRoutines.map((routine) => (
                  <li key={routine.id}>{routine.content}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-2xl font-medium">Weekly TODO</span>
              <ul>
                {todayWeeklyRoutines.map((routine) => (
                  <li key={routine.id}>{routine.content}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-2xl font-medium">Monthly TODO</span>
              <ul>
                {todayMonthlyRoutines.map((routine) => (
                  <li key={routine.id}>{routine.content}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1>Login first!</h1>
      )}
    </main>
  );
}
