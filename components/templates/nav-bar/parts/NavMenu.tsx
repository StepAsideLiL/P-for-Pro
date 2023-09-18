"use client";

import { navlinks } from "@/lib/config/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={className}>
        {navlinks.map((list, index) => (
          <ActiveLink
            key={index}
            href={list.path}
            active={pathname === list.path ? true : false}
          >
            {list.title}
          </ActiveLink>
        ))}
      </ul>
    </nav>
  );
};

const ActiveLink = ({
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
          "text-sm font-medium hover:border-b-2 hover:border-b-black",
          active && "border-b-2 border-b-black"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavMenu;
