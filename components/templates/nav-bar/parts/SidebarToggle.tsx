import OpenHomeSidebar from "@/components/custom-ui/OpenHomeSidebar";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React from "react";

const SidebarToggle = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("block md:hidden", className)}>
      <OpenHomeSidebar>
        <Menu />
      </OpenHomeSidebar>
    </div>
  );
};

export default SidebarToggle;