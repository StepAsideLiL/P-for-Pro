import Main from "@/components/custom-ui/Main";
import React from "react";

const ProfilePage = ({ params }: { params: { username: string } }) => {
  return (
    <Main>
      <p>Username: {params?.username}</p>
    </Main>
  );
};

export default ProfilePage;
