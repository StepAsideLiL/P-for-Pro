import AdminFooter from "@/components/templates/admin-footer/AdminFooter";
import Navbar from "@/components/templates/nav-bar/Navbar";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />

      {children}

      <AdminFooter />
    </section>
  );
};

export default ProfileLayout;
