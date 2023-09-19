import Main from "@/components/custom-ui/Main";
import Banner from "@/components/pages/home/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - P for Pro",
};

const HomePage = () => {
  return (
    <Main className="">
      <Banner />

      <div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
      </div>
    </Main>
  );
};

export default HomePage;
