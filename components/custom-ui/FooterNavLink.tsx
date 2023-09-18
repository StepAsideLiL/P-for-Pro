import Link from "next/link";
import React from "react";

const FooterNavLink = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <li>
      <Link href={href} className="text-xs hover:underline">
        {children}
      </Link>
    </li>
  );
};

export default FooterNavLink;
