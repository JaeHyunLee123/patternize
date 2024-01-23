import { getAuthSession } from "@/lib/auth";
import { Button } from "./ui/Button";
import Link from "next/link";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="px-10 py-5 text-foreground bg-background border-b-2 border-b-border flex justify-between">
      <Link href="/">
        <h1 className="font-bold text-xl">Patternize</h1>
      </Link>

      <div className="flex items-center space-x-2">
        <Link href="/manage">
          <Button>Manage routine</Button>
        </Link>

        {session ? (
          <Button variant={"destructive"}>
            <Link href="/sign-out">Sign Out</Link>
          </Button>
        ) : (
          <Button>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
