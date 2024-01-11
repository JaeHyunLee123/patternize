import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { Day } from "@prisma/client";

export const GET = async (req: Request) => {};

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
