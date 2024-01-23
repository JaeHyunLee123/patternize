import { getAuthSession } from "@/lib/auth";
import ManageRoutines from "@/components/Routines";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="p-24">
      {session ? <div>show todo here</div> : <h1>Login first!</h1>}
    </main>
  );
}
