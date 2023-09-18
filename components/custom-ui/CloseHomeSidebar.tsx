"use client";

import { useStore } from "@/lib/app-state/store";
import React from "react";

const CloseHomeSidebar = ({ children }: { children: React.ReactNode }) => {
  const setIsSideMenuOpen = useStore((state) => state.setIsSideMenuOpen);

  return <button onClick={() => setIsSideMenuOpen(false)}>{children}</button>;
};

export default CloseHomeSidebar;
