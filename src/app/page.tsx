import { getAuthSession } from "@/lib/auth";
import TodayTODOs from "@/components/TodayTODOs";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? <TodayTODOs /> : <h1>Login first!</h1>}
    </main>
  );
}
