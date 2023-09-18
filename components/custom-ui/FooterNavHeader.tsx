import React from "react";

const FooterNavHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-sm font-semibold">{children}</h1>;
};

export default FooterNavHeader;
