import Main from "@/components/custom-ui/Main";
import Banner from "@/components/pages/home/Banner";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import SignoutBtn from "@/components/pages/home/SignoutBtn";
import { api } from "@/lib/axios-api";
import TestReactQuery from "@/components/pages/home/TestReactQuery";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home - P for Pro",
};

const HomePage = async () => {
  const res = await api.get("/test");
  const users = await res.data;

  const session = await getServerSession();

  return (
    <Main className="">
      <Banner />

      <Button asChild>
        <Link href={"/setup-user-profile"}>Setup User Profile</Link>
      </Button>

      <TestReactQuery users={users} />

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
