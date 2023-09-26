import Main from "@/components/custom-ui/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "User List - P for Pro",
};

const UserListPage = () => {
  return (
    <Main varient="admin">
      <div>
        <h1 className="text-3xl font-semibold">User List</h1>
        <p className="text-muted-foreground">
          User list for searching and statics
        </p>
      </div>
    </Main>
  );
};

export default UserListPage;
