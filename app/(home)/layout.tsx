import Footer from "@/components/templates/footer/Footer";
import Navbar from "@/components/templates/nav-bar/Navbar";
import Sidebar from "@/components/templates/side-bar/Sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Sidebar>
        <Navbar />

        {children}

        <Footer />
      </Sidebar>
    </section>
  );
};

export default HomeLayout;
