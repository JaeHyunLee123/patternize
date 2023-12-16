"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/Button";

const SignIn = () => {
  return (
    <div className="flex flex-col w-full p-24 justify-center items-center gap-4">
      <span className="text-foreground text-lg">
        Do you really want to Sign Out?
      </span>
      <Button
        variant={"destructive"}
        className="w-28"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignIn;
