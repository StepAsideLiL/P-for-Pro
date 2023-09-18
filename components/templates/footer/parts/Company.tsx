import FooterNavHeader from "@/components/custom-ui/FooterNavHeader";
import FooterNavLink from "@/components/custom-ui/FooterNavLink";
import FooterNavSection from "@/components/custom-ui/FooterNavSection";
import { footerCompanyNavLinks } from "@/lib/config/navlinks";
import React from "react";

const Company = ({ className = "" }: { className?: string }) => {
  return (
    <FooterNavSection className={className}>
      <FooterNavHeader>Company</FooterNavHeader>

      <nav>
        <ul>
          {footerCompanyNavLinks.map((list, index) => (
            <FooterNavLink key={index}>{list.title}</FooterNavLink>
          ))}
        </ul>
      </nav>
    </FooterNavSection>
  );
};

export default Company;
