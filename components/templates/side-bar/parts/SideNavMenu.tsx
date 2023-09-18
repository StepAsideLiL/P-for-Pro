"use client";

import { Button } from "@/components/ui/button";
import { navlinks } from "@/lib/config/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavMenu = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-4">
        {navlinks.map((list, index) => (
          <ActiveLink
            key={index}
            href={list.path}
            active={pathname === list.path ? true : false}
          >
            {list.title}
          </ActiveLink>
        ))}

        <li>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const ActiveLink = ({
  children,
  href = "",
  active = false,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block p-2 font-semibold hover:bg-slate-200 hover:text-black transition-all rounded",
          active ? "bg-slate-200 text-black" : "text-gray-500"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default SideNavMenu;
