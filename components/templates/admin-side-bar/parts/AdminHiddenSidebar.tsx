"use client";

import AdminSidebarMenu from "@/components/custom-ui/AdminSidebarMenu";
import LogoLink from "@/components/custom-ui/LogoLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React, { useState } from "react";

const AdminHiddenSidebar = ({
  className = "",
}: {
  className?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <Menu size="24px" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="space-y-2">
          <SheetHeader>
            <LogoLink />
          </SheetHeader>

          <div onClick={() => setOpen(false)}>
            <AdminSidebarMenu />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminHiddenSidebar;
