import { getAuthSession } from "@/lib/auth";
import Routines from "@/components/Routines";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? <Routines /> : <h1>Login first!</h1>}
    </main>
  );
}
