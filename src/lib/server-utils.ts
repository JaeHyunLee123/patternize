import { db } from "./db";
import { Prisma } from "@prisma/client";
import "server-only";

export const createRoutineControl = async (userId: string) => {
  try {
    await db.routineControl.create({
      data: {
        userId: userId,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("This user already has routineControl");
      }
    }
  }
};
