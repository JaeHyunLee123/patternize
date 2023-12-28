import ShowDailyRoutineCard from "./routineManagement/daily/ShowDailyRoutineCard";
import ShowWeeklyRoutineCard from "./routineManagement/weekly/ShowWeeklyRoutineCard";

const Routines = () => {
  return (
    <div className="flex gap-2 w-full">
      <ShowDailyRoutineCard />
      <ShowWeeklyRoutineCard />
    </div>
  );
};

export default Routines;
