import ShowDailyRoutineCard from "./routineManagement/daily/ShowDailyRoutineCard";
import ShowMonthlyRoutineCard from "./routineManagement/monthly/ShowMonthlyRoutineCard";
import ShowWeeklyRoutineCard from "./routineManagement/weekly/ShowWeeklyRoutineCard";

const ManageRoutines = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <ShowDailyRoutineCard />
      <ShowWeeklyRoutineCard />
      <ShowMonthlyRoutineCard className="col-span-2" />
    </div>
  );
};

export default ManageRoutines;
