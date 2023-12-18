import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createRoutineControl } from "@/lib/server-utils";

export const GET = async (req: Request) => {
  try {
    const session = await getAuthSession();

    if (!session?.user) return new Response("Unauthorized", { status: 401 });

    const userId = session.user.id;

    if (!userId || typeof userId !== "string")
      return new Response("Need userid", { status: 400 });

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
      return new Response("Cannot find routine", { status: 500 });

    const dailyRoutines = routineControl.dailyRoutines;

    return Response.json(dailyRoutines, { status: 201 });
  } catch (error) {
    return new Response("Unknown Error", { status: 500 });
  }
};
