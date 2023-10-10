import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, CheckSquare, PenLine, User } from "lucide-react";

const TabLists = () => {
  return (
    <TabsList>
      <TabsTrigger value="profile" className="space-x-2">
        <span>
          <User size={"24px"} />
        </span>
        <span>Profile</span>
      </TabsTrigger>

      <TabsTrigger value="posts" className="space-x-2">
        <span>
          <PenLine size={"24px"} />
        </span>
        <span>Posts</span>
      </TabsTrigger>

      <TabsTrigger value="jobPost" className="space-x-2">
        <span>
          <Briefcase size={"24px"} />
        </span>
        <span>Job Posts</span>
      </TabsTrigger>

      <TabsTrigger value="appliedJobs" className="space-x-2">
        <span>
          <CheckSquare size={"24px"} />
        </span>
        <span>Applied Jobs</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default TabLists;
