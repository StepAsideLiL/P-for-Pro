"use client";

import { adminSidebarNavLinks } from "@/lib/config/navlinks";
import React from "react";
import AdminSidebarLink from "./AdminSidebarLink";
import { usePathname } from "next/navigation";

const AdminSidebarMenu = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-1">
        {adminSidebarNavLinks.map((list, index) => (
          <AdminSidebarLink
            key={index}
            href={list.path}
            active={pathname === list.path ? true : false}
          >
            {list.title}
          </AdminSidebarLink>
        ))}
      </ul>
    </nav>
  );
};

export default AdminSidebarMenu;
