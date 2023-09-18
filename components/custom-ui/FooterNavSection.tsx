import { cn } from "@/lib/utils";
import React from "react";

const FooterNavSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn("space-y-2", className)}>{children}</section>;
};

export default FooterNavSection;
