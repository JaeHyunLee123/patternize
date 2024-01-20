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

      if (
        !(
          day === "SUN" ||
          day === "MON" ||
          day === "TUE" ||
          day === "WED" ||
          day === "THU" ||
          day === "FRI" ||
          day === "SAT"
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
          day,
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

export const PUT = async (req: Request) => {
  try {
    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    const body = await req.json();
    const { isDate, newContent, newWeek, newDay, newDate, routineId } = body;

    if (!routineId || typeof routineId !== "string") {
      return Response.json(
        { errorMessage: "Please retry after few seconds", ok: false },
        { status: 400 }
      );
    }

    if (!newContent || typeof newContent !== "string") {
      return Response.json(
        { errorMessage: "Need content", ok: false },
        { status: 400 }
      );
    }

    if (!(1 < newContent.length && newContent.length < 201))
      return Response.json(
        { errorMessage: "Invalid content", ok: false },
        { status: 400 }
      );

    if (typeof isDate !== "boolean") {
      return Response.json(
        { errorMessage: "Is week&day or date?", ok: false },
        { status: 400 }
      );
    }

    const routine = await db.monthlyRoutine.findUnique({
      where: {
        id: routineId,
      },
      include: {
        routineControl: true,
        date: true,
        weekAndDay: true,
      },
    });

    if (!routine || !routine.routineControl) {
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );
    }

    if (session.user.id !== routine.routineControl.userId) {
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );
    }

    //seperate to 4 cases
    //ps) I just want to reduce nest despite of repeating
    //week and day -> week and day
    if (!routine.isDate && !isDate) {
      if (!newWeek || typeof newWeek !== "number") {
        return Response.json(
          { errorMessage: "Need new week", ok: false },
          { status: 400 }
        );
      }

      if (!newDay || typeof newDay !== "string") {
        return Response.json(
          { errorMessage: "Need new day", ok: false },
          { status: 400 }
        );
      }
      if (
        !(
          newDay === "SUN" ||
          newDay === "MON" ||
          newDay === "TUE" ||
          newDay === "WED" ||
          newDay === "THU" ||
          newDay === "FRI" ||
          newDay === "SAT"
        )
      ) {
        return Response.json(
          { errorMessage: "Unvalid day", ok: false },
          { status: 400 }
        );
      }

      await db.weekAndDay.update({
        where: {
          id: routine.weekAndDayId || "",
        },
        data: {
          day: newDay,
          week: newWeek,
        },
      });

      await db.monthlyRoutine.update({
        where: {
          id: routine.id,
        },
        data: {
          content: newContent,
        },
      });
    }
    //week and day -> date
    else if (!routine.isDate && isDate) {
      if (!newDate || typeof newDate !== "number") {
        return Response.json(
          { errorMessage: "Need new date", ok: false },
          { status: 400 }
        );
      }

      const date = await db.date.create({
        data: {
          date: newDate,
        },
      });

      await db.weekAndDay.delete({
        where: {
          id: routine.weekAndDayId || "",
        },
      });

      await db.monthlyRoutine.update({
        data: {
          dateId: date.id,

          content: newContent,
          isDate: true,
        },
        where: {
          id: routine.id,
        },
      });
    }
    //date -> date
    else if (routine.isDate && isDate) {
      if (!newDate || typeof newDate !== "number") {
        return Response.json(
          { errorMessage: "Need new date", ok: false },
          { status: 400 }
        );
      }

      await db.date.update({
        where: {
          id: routine.dateId || "",
        },
        data: {
          date: newDate,
        },
      });

      await db.monthlyRoutine.update({
        where: {
          id: routine.id,
        },
        data: {
          content: newContent,
        },
      });
    }
    //date -> week and day
    else {
      if (!newWeek || typeof newWeek !== "number") {
        return Response.json(
          { errorMessage: "Need new week", ok: false },
          { status: 400 }
        );
      }

      if (!newDay || typeof newDay !== "string") {
        return Response.json(
          { errorMessage: "Need new day", ok: false },
          { status: 400 }
        );
      }
      if (
        !(
          newDay === "SUN" ||
          newDay === "MON" ||
          newDay === "TUE" ||
          newDay === "WED" ||
          newDay === "THU" ||
          newDay === "FRI" ||
          newDay === "SAT"
        )
      ) {
        return Response.json(
          { errorMessage: "Unvalid day", ok: false },
          { status: 400 }
        );
      }

      const weekAndDay = await db.weekAndDay.create({
        data: {
          day: newDay,
          week: newWeek,
        },
      });

      await db.date.delete({
        where: {
          id: routine.dateId || "",
        },
      });

      await db.monthlyRoutine.update({
        where: {
          id: routine.id,
        },
        data: {
          weekAndDayId: weekAndDay.id,
          content: newContent,
          isDate: false,
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

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const { routineId } = body;

    if (!routineId || typeof routineId !== "string")
      return Response.json(
        { errorMessage: "Need routineId", ok: false },
        { status: 400 }
      );

    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    const routine = await db.monthlyRoutine.findUnique({
      where: {
        id: routineId,
      },
      include: {
        routineControl: true,
      },
    });

    if (!routine || !routine.routineControlId)
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );

    if (session.user.id !== routine.routineControl?.userId)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    await db.monthlyRoutine.delete({
      where: {
        id: routineId,
      },
    });

    if (routine.dateId) {
      await db.date.delete({
        where: {
          id: routine.dateId,
        },
      });
    }

    if (routine.weekAndDayId) {
      await db.weekAndDay.delete({
        where: {
          id: routine.weekAndDayId,
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
