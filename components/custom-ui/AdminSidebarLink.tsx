import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AdminSidebarLink = ({
  children,
  href = "",
  active = false,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "inline-block w-full p-2 rounded hover:bg-slate-200",
          active ? "bg-slate-200" : ""
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default AdminSidebarLink;
