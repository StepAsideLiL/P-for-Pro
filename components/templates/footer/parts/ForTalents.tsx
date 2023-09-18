import FooterNavHeader from "@/components/custom-ui/FooterNavHeader";
import FooterNavLink from "@/components/custom-ui/FooterNavLink";
import FooterNavSection from "@/components/custom-ui/FooterNavSection";
import { footerTalentsNavLinks } from "@/lib/config/navlinks";
import React from "react";

const ForTalents = ({ className = "" }: { className?: string }) => {
  return (
    <FooterNavSection className={className}>
      <FooterNavHeader>For Talents</FooterNavHeader>

      <nav>
        <ul>
          {footerTalentsNavLinks.map((list, index) => (
            <FooterNavLink key={index}>{list.title}</FooterNavLink>
          ))}
        </ul>
      </nav>
    </FooterNavSection>
  );
};

export default ForTalents;
