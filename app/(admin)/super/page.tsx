import Main from "@/components/custom-ui/Main";
import Overview from "@/components/pages/super/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Home - P for Pro",
};

const AdminHomePage = () => {
  return (
    <Main varient="admin">
      <div>
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Analytics and Overviews</p>
      </div>

      <Overview />
    </Main>
  );
};

export default AdminHomePage;
