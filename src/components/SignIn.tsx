"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "lucide-react";

const SignIn = () => {
  const onGitHubSignIn = () => {
    signIn("github");
  };

  return (
    <div className="flex flex-col w-full p-24 justify-center items-center gap-4">
      <span className="text-foreground text-lg">
        Sign In or Sign Up with Github
      </span>
      <Button variant={"default"} className="w-28" onClick={onGitHubSignIn}>
        <GithubIcon />
      </Button>
    </div>
  );
};

export default SignIn;
