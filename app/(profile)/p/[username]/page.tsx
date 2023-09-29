import Main from "@/components/custom-ui/Main";
import PostTab from "@/components/pages/profile/profile-page/PostTab";
import ProfileTab from "@/components/pages/profile/profile-page/ProfileTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, CheckSquare, PenLine, UserCircle2 } from "lucide-react";
import React from "react";

const ProfilePage = ({ params }: { params: { username: string } }) => {
  return (
    <Main className="container max-w-full mx-auto">
      {/* <p>Username: {params?.username}</p> */}
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile" className="space-x-2">
            <span>
              <UserCircle2 size={"24px"} />
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

        <TabsContent value="profile">
          <ProfileTab />
        </TabsContent>

        <TabsContent value="posts">
          <PostTab />
        </TabsContent>

        <TabsContent value="jobPost">Job Posts</TabsContent>

        <TabsContent value="appliedJobs">Applied Jobs</TabsContent>
      </Tabs>
    </Main>
  );
};

export default ProfilePage;
