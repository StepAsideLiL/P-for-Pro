import { cn } from "@/lib/utils";
import React from "react";

const Main = ({
  children,
  className = "",
  varient = "",
}: {
  children: React.ReactNode;
  className?: string;
  varient?: "" | "admin";
}) => {
  if (varient === "admin") {
    return (
      <main
        className={cn("min-h-screen flex-1 w-full p-12 space-y-3", className)}
      >
        {children}
      </main>
    );
  }

  return <main className={cn("min-h-screen", className)}>{children}</main>;
};

export default Main;
