"use client";

import LogoLink from "@/components/custom-ui/LogoLink";
import { navlinks } from "@/lib/config/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchForm from "./parts/SearchForm";
import ProfileLogin from "./parts/ProfileLogin";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container flex items-center justify-between max-w-full py-5 mx-auto">
        <div className="flex items-center gap-10">
          <LogoLink />

          <nav>
            <ul className="flex items-center gap-4">
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
        </div>

        <div className="flex items-center gap-10">
          <SearchForm />

          <ProfileLogin />
        </div>
      </div>
    </header>
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

export default Navbar;
