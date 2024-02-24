import { getAuthSession } from "@/lib/auth";
import Clock from "@/components/ui/Clock";
import { db } from "@/lib/db";
import { getWeek } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default async function Home() {
  const session = await getAuthSession();

  const date = new Date();

  if (!session?.user) {
    return <h1>Login first!</h1>;
  }

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
      if (
        date.getDate() > 29 &&
        date.getMonth() === 2 &&
        date.getFullYear() % 4 === 0
      ) {
        return (routine.date?.date || 0) > 29;
      }

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
      if (routine.weekAndDay?.week === getWeek(new Date())) {
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

  return (
    <main className="p-24">
      {session ? (
        <div className="flex flex-col justify-center items-center w-full space-y-2">
          <Clock className="text-8xl text-primary" />
          <div className="text-primary">
            <span className="text-4xl font-semibold">TODO</span>
            <div className="flex space-x-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Daily TODO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {dailyRoutines.length === 0 ? (
                        <span>No daily TODO</span>
                      ) : (
                        <ul>
                          {dailyRoutines.map((routine) => (
                            <li key={routine.id}>{routine.content}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-medium">
                      Weekly TODO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {todayWeeklyRoutines.length === 0 ? (
                      <span>No weekly TODO today</span>
                    ) : (
                      <ul>
                        {todayWeeklyRoutines.map((routine) => (
                          <li key={routine.id}>{routine.content}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-medium">
                      Monthly TODO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {todayMonthlyRoutines.length === 0 ? (
                      <span>No monthly TODO today</span>
                    ) : (
                      <ul>
                        {todayMonthlyRoutines.map((routine) => (
                          <li key={routine.id}>{routine.content}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Login first!</h1>
      )}
    </main>
  );
}
