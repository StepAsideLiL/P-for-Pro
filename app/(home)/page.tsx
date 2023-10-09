import Main from "@/components/custom-ui/Main";
import Banner from "@/components/pages/home/Banner";
// import TestReactQuery from "@/components/pages/home/TestReactQuery";
// import { api } from "@/lib/axios-api";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import SignoutBtn from "@/components/pages/home/SignoutBtn";

export const metadata: Metadata = {
  title: "Home - P for Pro",
};

const HomePage = async () => {
  // const res = await api.get("test");
  // const users = await res.data;

  const session = await getServerSession();

  return (
    <Main className="">
      <Banner />

      {/* <TestReactQuery users={users} /> */}

      <div>
        <pre>{JSON.stringify(session)}</pre>
        <div>{session?.expires}</div>
      </div>

      <SignoutBtn />

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
