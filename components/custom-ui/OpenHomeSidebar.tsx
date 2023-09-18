"use client";

import { useStore } from "@/lib/app-state/store";
import React from "react";

const OpenHomeSidebar = ({ children }: { children: React.ReactNode }) => {
  const setIsSideMenuOpen = useStore((state) => state.setIsSideMenuOpen);

  return <button onClick={() => setIsSideMenuOpen(true)}>{children}</button>;
};

export default OpenHomeSidebar;
