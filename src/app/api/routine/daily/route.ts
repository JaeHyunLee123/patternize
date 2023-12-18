import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createRoutineControl } from "@/lib/server-utils";

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

    return Response.json({ dailyRoutines, ok: true }, { status: 201 });
  } catch (error) {
    return Response.json(
      { errorMessage: "Unknown Error", ok: false },
      { status: 500 }
    );
  }
};
