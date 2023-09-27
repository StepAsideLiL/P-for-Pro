import Footer from "@/components/templates/footer/Footer";
import Navbar from "@/components/templates/nav-bar/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />

      {children}

      <Footer />
    </section>
  );
};

export default HomeLayout;
