"use client";

import LogoLink from "@/components/custom-ui/LogoLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "@/lib/config/navlinks";

const Sidebar = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="p-0 h-fit">
            <Menu size={"24px"} />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"} className="w-full">
          <div className="flex flex-col h-full gap-2">
            <div onClick={() => setOpen(false)}>
              <LogoLink />
            </div>

            {/* <SideNavMenu className="flex-1" /> */}
            <nav className="flex-1">
              <ul className="flex flex-col gap-4">
                {mainNavLinks.map((list, index) => (
                  <ActiveLink
                    key={index}
                    href={list.path}
                    onClick={() => setOpen(false)}
                    active={pathname === list.path ? true : false}
                  >
                    {list.title}
                  </ActiveLink>
                ))}

                <li>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/signin">Sign In</Link>
                  </Button>
                </li>
              </ul>
            </nav>

            <Button className="w-full" asChild onClick={() => setOpen(false)}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ActiveLink = ({
  children,
  href = "",
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
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

export default Sidebar;
