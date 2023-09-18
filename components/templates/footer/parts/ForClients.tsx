import FooterNavHeader from "@/components/custom-ui/FooterNavHeader";
import FooterNavLink from "@/components/custom-ui/FooterNavLink";
import FooterNavSection from "@/components/custom-ui/FooterNavSection";
import { footerClientsNavLinks } from "@/lib/config/navlinks";
import React from "react";

const ForClients = ({ className = "" }: { className?: string }) => {
  return (
    <FooterNavSection className={className}>
      <ForClientsTitle />

      <ForClientsNav />
    </FooterNavSection>
  );
};

export const ForClientsTitle = () => {
  return <FooterNavHeader>For Clients</FooterNavHeader>;
};

export const ForClientsNav = () => {
  return (
    <nav>
      <ul>
        {footerClientsNavLinks.map((list, index) => (
          <FooterNavLink key={index}>{list.title}</FooterNavLink>
        ))}
      </ul>
    </nav>
  );
};

export default ForClients;
