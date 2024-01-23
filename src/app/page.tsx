import { getAuthSession } from "@/lib/auth";
import ManageRoutines from "@/components/Routines";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Clock from "@/components/ui/Clock";

//정기 루틴은 db에서 가져오고
//오늘 하루만 하는 루틴은 로컬 스토리지에서

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? (
        <div className="flex flex-col justify-center items-center">
          <Clock className="text-8xl" />
          <span>show today routine here</span>
        </div>
      ) : (
        <h1>Login first!</h1>
      )}
    </main>
  );
}
