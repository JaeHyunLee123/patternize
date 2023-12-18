import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createRoutineControl } from "@/lib/server-utils";
import { type } from "os";

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
        dailyRoutines: true,
      },
    });

    if (!routineControl) {
      createRoutineControl(userId);
      routineControl = await db.routineControl.findUnique({
        where: {
          userId,
        },
        include: {
          dailyRoutines: true,
        },
      });
    }

    if (!routineControl)
      return Response.json(
        { errorMessage: "Cannot find routine", ok: false },
        { status: 500 }
      );

    const dailyRoutines = routineControl.dailyRoutines;

    return Response.json({ dailyRoutines, ok: true }, { status: 200 });
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

    const {
      body: { content },
    } = await req.json();

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

    await db.dailyRoutine.create({
      data: {
        content,
        routineControlId: routineControl.id,
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
