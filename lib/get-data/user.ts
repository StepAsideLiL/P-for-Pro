import { getServerSession } from "next-auth";
import { api } from "@/lib/axios-api";

export const getLoggedinUser = async () => {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (!email) {
    return null;
  }

  const res = await api.get(`/v1/loggedin-user/${email}`);
  const user = res.data;
  return user;
};
