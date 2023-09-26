import AdminFooter from "@/components/templates/admin-footer/AdminFooter";
import AdminNavbar from "@/components/templates/admin-nav-bar/AdminNavbar";
import AdminSidebar from "@/components/templates/admin-side-bar/AdminSidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="container flex flex-col items-start w-full max-w-full mx-auto md:flex-row">
        <AdminSidebar className="w-72" />

        {children}
      </div>

      <AdminFooter />
    </section>
  );
};

export default AdminLayout;
