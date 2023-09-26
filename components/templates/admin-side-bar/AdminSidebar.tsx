import AdminSidebarMenu from "@/components/custom-ui/AdminSidebarMenu";
import LogoLink from "@/components/custom-ui/LogoLink";
import { cn } from "@/lib/utils";
import React from "react";
import AdminHiddenSidebar from "./parts/AdminHiddenSidebar";

const AdminSidebar = ({ className = "" }: { className?: string }) => {
  return (
    <aside className={cn("py-2 px-0 md:px-8 space-y-2", className)}>
      <div className="flex items-center gap-2">
        <AdminHiddenSidebar className="block md:hidden" />

        <LogoLink />
      </div>

      <AdminSidebarMenu className="hidden md:block" />
    </aside>
  );
};

export default AdminSidebar;
