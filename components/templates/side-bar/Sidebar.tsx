"use client";

import React from "react";
import SideNavMenu from "./parts/SideNavMenu";
import SidebarHeader from "./parts/SidebarHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useStore } from "@/lib/app-state/store";
import { cn } from "@/lib/utils";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const isSideMenuOpen = useStore((state) => state.isSideMenuOpen);

  return (
    <div>
      <div
        className={cn(
          "overflow-hidden transition",
          isSideMenuOpen ? "w-0 h-0" : "w-full h-full"
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all",
          isSideMenuOpen ? "w-full h-full" : "w-0 h-0"
        )}
      >
        <aside className="container flex flex-col min-h-screen pb-5 mx-auto">
          <SidebarHeader />

          <SideNavMenu className="flex-1" />

          <Button className="w-full" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
