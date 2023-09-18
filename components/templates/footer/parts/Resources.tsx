import FooterNavHeader from "@/components/custom-ui/FooterNavHeader";
import FooterNavLink from "@/components/custom-ui/FooterNavLink";
import FooterNavSection from "@/components/custom-ui/FooterNavSection";
import { footerResourcesNavLinks } from "@/lib/config/navlinks";
import React from "react";

const Resources = ({ className = "" }: { className?: string }) => {
  return (
    <FooterNavSection className={className}>
      <ResourcesTitle />

      <ResourcesNav />
    </FooterNavSection>
  );
};

export const ResourcesTitle = () => {
  return <FooterNavHeader>Resources</FooterNavHeader>;
};

export const ResourcesNav = () => {
  return (
    <nav>
      <ul>
        {footerResourcesNavLinks.map((list, index) => (
          <FooterNavLink key={index}>{list.title}</FooterNavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Resources;
