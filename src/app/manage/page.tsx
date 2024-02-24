import { getAuthSession } from "@/lib/auth";
import ManageRoutines from "@/components/ManageRoutines";

export default async function Manage() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? <ManageRoutines /> : <h1>Login first!</h1>}
    </main>
  );
}
