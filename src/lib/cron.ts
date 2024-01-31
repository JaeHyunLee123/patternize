import cron from "node-cron";
import { db } from "./db";

const deleteExpiredOneDayRoutines = async () => {
  const currentDate = new Date();

  await db.oneDayRoutine.deleteMany({
    where: {
      createdAt: {
        lt: currentDate.toISOString().split("T")[0],
      },
    },
  });
};

cron.schedule("0 0 * * *", async () => {
  await deleteExpiredOneDayRoutines();
});
