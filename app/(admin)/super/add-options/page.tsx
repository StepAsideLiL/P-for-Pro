import Main from "@/components/custom-ui/Main";
import CompanyCategories from "@/components/pages/add-options/CompanyCategories";
import JobRoles from "@/components/pages/add-options/JobRoles";
import RemoteOrOnsite from "@/components/pages/add-options/RemoteOrOnsite";
import Skills from "@/components/pages/add-options/Skills";
import WorkAgreements from "@/components/pages/add-options/WorkAgreements";
import WorkStatus from "@/components/pages/add-options/WorkStatus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Options - P for Pro",
};

const AddOptionsPage = () => {
  return (
    <Main varient="admin">
      <div>
        <h1 className="text-3xl font-semibold">Add Options</h1>
        <p className="text-muted-foreground">
          Add dropdown options for various field
        </p>
      </div>

      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid w-full h-full grid-cols-6">
          <TabsTrigger value="skills" className="text-base">
            Skills
          </TabsTrigger>

          <TabsTrigger value="workAgreement" className="text-base">
            Job Types
          </TabsTrigger>

          <TabsTrigger value="jobRoles" className="text-base">
            Job Roles
          </TabsTrigger>

          <TabsTrigger value="remoteOrOnsite" className="text-base">
            Remote/On-site
          </TabsTrigger>

          <TabsTrigger value="workStatus" className="text-base">
            Work Status
          </TabsTrigger>

          <TabsTrigger value="companyCategory" className="text-base">
            Company Sector
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <Skills />
        </TabsContent>

        <TabsContent value="workAgreement">
          <WorkAgreements />
        </TabsContent>

        <TabsContent value="jobRoles">
          <JobRoles />
        </TabsContent>

        <TabsContent value="remoteOrOnsite">
          <RemoteOrOnsite />
        </TabsContent>

        <TabsContent value="workStatus">
          <WorkStatus />
        </TabsContent>

        <TabsContent value="companyCategory">
          <CompanyCategories />
        </TabsContent>
      </Tabs>
    </Main>
  );
};

export default AddOptionsPage;
