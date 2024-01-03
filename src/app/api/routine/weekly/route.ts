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

    const routine = await db.weeklyRoutine.findUnique({
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

    await db.weeklyRoutine.delete({
      where: {
        id: routineId,
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

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { routineId, newContent, days } = body;

    if (!routineId || typeof routineId !== "string")
      return Response.json(
        { errorMessage: "Need routineId", ok: false },
        { status: 400 }
      );

    if (!newContent || typeof newContent !== "string")
      return Response.json(
        { errorMessage: "Need content", ok: false },
        { status: 400 }
      );

    if (!(1 < newContent.length && newContent.length < 201))
      return Response.json(
        { errorMessage: "Invalid content", ok: false },
        { status: 400 }
      );

    if (!days || !Array.isArray(days) || days.length === 0) {
      return Response.json(
        { errorMessage: "Need days", ok: false },
        { status: 400 }
      );
    }

    const session = await getAuthSession();

    if (!session?.user)
      return Response.json(
        { errorMessage: "Unauthorized", ok: false },
        { status: 401 }
      );

    const routine = await db.weeklyRoutine.findUnique({
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

    await db.days.update({
      where: {
        id: routine.daysId,
      },
      data: {
        sun: days.includes("sun"),
        mon: days.includes("mon"),
        tue: days.includes("tue"),
        wed: days.includes("wed"),
        thu: days.includes("thu"),
        fri: days.includes("fri"),
        sat: days.includes("sat"),
      },
    });

    await db.weeklyRoutine.update({
      where: {
        id: routineId,
      },
      data: {
        content: newContent,
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
