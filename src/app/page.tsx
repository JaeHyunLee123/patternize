import { getAuthSession } from "@/lib/auth";
import ManageRoutines from "@/components/Routines";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? <ManageRoutines /> : <h1>Login first!</h1>}
    </main>
  );
}
