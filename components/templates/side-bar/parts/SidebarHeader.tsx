import CloseHomeSidebar from "@/components/custom-ui/CloseHomeSidebar";
import LogoLink from "@/components/custom-ui/LogoLink";
import { X } from "lucide-react";
import React from "react";

const SidebarHeader = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <LogoLink />

      <CloseHomeSidebar>
        <X size="24px" />
      </CloseHomeSidebar>
    </header>
  );
};

export default SidebarHeader;
