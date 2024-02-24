"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/Button";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <Link href="/manage">
          <Button>Manage routine</Button>
        </Link>
      ) : (
        <Link href="/">
          <Button>Home</Button>
        </Link>
      )}
    </>
  );
};

export default Nav;
