"use client";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import React from "react";
import { ForClientsNav, ForClientsTitle } from "./ForClients";
import { ForTalentsNav, ForTalentsTitle } from "./ForTalents";
import { ResourcesNav, ResourcesTitle } from "./Resources";
import { CompanyNav, CompanyTitle } from "./Company";

const ResponsiveFooter = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="1" className="border-b-2 border-b-white">
          <AccordionTrigger>
            <ForTalentsTitle />
          </AccordionTrigger>

          <AccordionContent>
            <ForTalentsNav />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2" className="border-b-2 border-b-white">
          <AccordionTrigger>
            <ForClientsTitle />
          </AccordionTrigger>

          <AccordionContent>
            <ForClientsNav />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3" className="border-b-2 border-b-white">
          <AccordionTrigger>
            <ResourcesTitle />
          </AccordionTrigger>

          <AccordionContent>
            <ResourcesNav />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="4" className="border-b-2 border-b-white">
          <AccordionTrigger>
            <CompanyTitle />
          </AccordionTrigger>

          <AccordionContent>
            <CompanyNav />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResponsiveFooter;
