import { cn } from "@/lib/utils";
import React from "react";

const Main = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <main className={cn("min-h-screen", className)}>{children}</main>;
};

export default Main;
