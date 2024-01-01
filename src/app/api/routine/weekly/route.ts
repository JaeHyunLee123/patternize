import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createRoutineControl } from "@/lib/server-utils";
import { GetWeeklyRoutinesAPI } from "@/types/API";

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
      include: {
        weeklyRoutines: {
          include: {
            days: true,
          },
        },
      },
    });

    if (!routineControl) {
      createRoutineControl(userId);
      routineControl = await db.routineControl.findUnique({
        where: {
          userId,
        },
        include: {
          weeklyRoutines: {
            include: {
              days: true,
            },
          },
        },
      });
    }

    if (!routineControl)
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );

    const responseData: GetWeeklyRoutinesAPI = {
      ok: true,
      weeklyRoutines: routineControl.weeklyRoutines,
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
    const body = await req.json();

    const { content, days } = body;

    if (!content || typeof content !== "string")
      return Response.json(
        { errorMessage: "Need content", ok: false },
        { status: 400 }
      );

    if (!days || !Array.isArray(days) || days.length === 0) {
      return Response.json(
        { errorMessage: "Need days", ok: false },
        { status: 400 }
      );
    }

    if (!(1 < content.length && content.length < 201))
      return Response.json(
        { errorMessage: "Invalid content", ok: false },
        { status: 400 }
      );

    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
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

    const newDays = await db.days.create({
      data: {
        sun: days.includes("sun"),
        mon: days.includes("mon"),
        tue: days.includes("tue"),
        wed: days.includes("wed"),
        thu: days.includes("thu"),
        fri: days.includes("fri"),
        sat: days.includes("sat"),
      },
      select: {
        id: true,
      },
    });

    await db.weeklyRoutine.create({
      data: {
        content,
        routineControlId: routineControl.id,
        daysId: newDays.id,
      },
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    return Response.json(
      { errorMessage: "Unknown Error", ok: false },
      { status: 500 }
    );
  }
};
