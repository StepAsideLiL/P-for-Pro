import React from "react";
import ProfileCard from "./sections/ProfileCard";
import { Button } from "@/components/ui/button";
import Posts from "./sections/Posts";
import { PlusSquare } from "lucide-react";

const PostTab = () => {
  return (
    <section className="container grid grid-cols-4 gap-5 py-2 mx-auto max-w-7xl">
      <section className="w-full col-span-1 space-y-3">
        <ProfileCard />
      </section>

      <section className="col-span-3 space-y-10">
        {/* Posts Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Posts</h1>

            <Button variant={"ghost"}>
              <PlusSquare />
            </Button>
          </div>

          <Posts />
        </section>
      </section>
    </section>
  );
};

export default PostTab;
