import FooterNavHeader from "@/components/custom-ui/FooterNavHeader";
import FooterNavLink from "@/components/custom-ui/FooterNavLink";
import FooterNavSection from "@/components/custom-ui/FooterNavSection";
import { footerResourcesNavLinks } from "@/lib/config/navlinks";
import { cn } from "@/lib/utils";
import React from "react";

const Resources = ({ className = "" }: { className?: string }) => {
  return (
    <FooterNavSection className={className}>
      <FooterNavHeader>Resources</FooterNavHeader>

      <nav>
        <ul>
          {footerResourcesNavLinks.map((list, index) => (
            <FooterNavLink key={index}>{list.title}</FooterNavLink>
          ))}
        </ul>
      </nav>
    </FooterNavSection>
  );
};

export default Resources;
