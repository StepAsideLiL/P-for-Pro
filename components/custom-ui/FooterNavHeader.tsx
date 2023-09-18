import React from "react";

const FooterNavHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-lg font-semibold md:text-sm">{children}</h1>;
};

export default FooterNavHeader;
