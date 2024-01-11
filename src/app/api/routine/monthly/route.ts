import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createRoutineControl } from "@/lib/server-utils";
import { GetMonthlyRoutineAPI } from "@/types/API";

export const GET = async (req: Request) => {
  try {
    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    const userId = session.user.id;

    if (!userId || typeof userId !== "string")
      return Response.json(
        { errorMessage: "Need userid", ok: false },
        { status: 400 }
      );

    let routineControl = await db.routineControl.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!routineControl) {
      createRoutineControl(userId);
      routineControl = await db.routineControl.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
    }

    if (!routineControl)
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );

    const monthlyRoutinesWithDate = await db.monthlyRoutine.findMany({
      where: {
        routineControlId: routineControl.id,
        isDate: true,
      },
      include: {
        date: true,
      },
      orderBy: {
        date: {
          date: "asc",
        },
      },
    });

    const monthlyRoutinesWithWeekAndDay = await db.monthlyRoutine.findMany({
      where: {
        routineControlId: routineControl.id,
        isDate: false,
      },
      include: {
        weekAndDay: true,
      },
    });

    //sort by day
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    monthlyRoutinesWithWeekAndDay.sort((a, b) => {
      const day1 = days.indexOf(a.weekAndDay?.day || "");
      const day2 = days.indexOf(b.weekAndDay?.day || "");

      if (day1 < day2) {
        return -1;
      }

      if (day1 > day2) {
        return 1;
      }
      return 0;
    });
    //sort by week
    monthlyRoutinesWithWeekAndDay.sort((a, b) => {
      const week1 = a.weekAndDay?.week || 0;
      const week2 = b.weekAndDay?.week || 0;

      if (week1 < week2) {
        return -1;
      }

      if (week1 > week2) {
        return 1;
      }
      return 0;
    });

    const responseData: GetMonthlyRoutineAPI = {
      ok: true,
      monthlyRoutinesWithDate,
      monthlyRoutinesWithWeekAndDay,
      errorMessage: "",
    };

    return Response.json(responseData, { status: 200 });
  } catch (error) {
    return Response.json(
      { errorMessage: "Unknown Error", ok: false },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    const body = await req.json();

    const { content, isDate, week, date, day } = body;

    if (!content || typeof content !== "string")
      return Response.json(
        { errorMessage: "Need content", ok: false },
        { status: 400 }
      );

    if (!(1 < content.length && content.length < 201))
      return Response.json(
        { errorMessage: "Invalid content", ok: false },
        { status: 400 }
      );

    const routineControl = await db.routineControl.findUnique({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    if (!routineControl)
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );

    if (isDate) {
      if (!date || typeof date !== "number") {
        return Response.json(
          { errorMessage: "Need content", ok: false },
          { status: 400 }
        );
      }

      if (!(1 <= date && date <= 31)) {
        return Response.json(
          { errorMessage: "Invalid date", ok: false },
          { status: 400 }
        );
      }

      const newDate = await db.date.create({
        data: {
          date,
        },
        select: {
          id: true,
        },
      });

      await db.monthlyRoutine.create({
        data: {
          content,
          routineControlId: routineControl.id,
          isDate: true,
          dateId: newDate.id,
        },
      });
    } else {
      if (!day || typeof day !== "string") {
        return Response.json(
          { errorMessage: "Need day", ok: false },
          { status: 400 }
        );
      }

      const upperCaseDay = day.toUpperCase();

      if (
        !(
          upperCaseDay === "SUN" ||
          upperCaseDay === "MON" ||
          upperCaseDay === "TUE" ||
          upperCaseDay === "WED" ||
          upperCaseDay === "THU" ||
          upperCaseDay === "FRI" ||
          upperCaseDay === "SAT"
        )
      ) {
        return Response.json(
          { errorMessage: "Unvalid day", ok: false },
          { status: 400 }
        );
      }

      if (!week || typeof week !== "number") {
        return Response.json(
          { errorMessage: "Need week", ok: false },
          { status: 400 }
        );
      }

      if (!(1 <= week && week <= 4)) {
        return Response.json(
          { errorMessage: "Unvalid week", ok: false },
          { status: 400 }
        );
      }

      const newWeekAndDay = await db.weekAndDay.create({
        data: {
          week,
          day: upperCaseDay,
        },
        select: {
          id: true,
        },
      });

      await db.monthlyRoutine.create({
        data: {
          content,
          isDate: false,
          weekAndDayId: newWeekAndDay.id,
          routineControlId: routineControl.id,
        },
      });
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    return Response.json(
      { errorMessage: "Unknown Error", ok: false },
      { status: 500 }
    );
  }
};
