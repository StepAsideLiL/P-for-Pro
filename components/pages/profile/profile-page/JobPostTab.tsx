import React from "react";
import ProfileCard from "./sections/ProfileCard";
import JobPosts from "./sections/JobPosts";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";

const JobPostTab = () => {
  return (
    <section className="container grid grid-cols-4 gap-5 py-2 mx-auto max-w-7xl">
      <section className="w-full col-span-1 space-y-3">
        <ProfileCard />
      </section>

      <section className="col-span-3 space-y-10">
        {/* Job Posts Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Job Posts</h1>

            <Button variant={"ghost"}>
              <PlusSquare />
            </Button>
          </div>

          <JobPosts />
        </section>
      </section>
    </section>
  );
};

export default JobPostTab;
