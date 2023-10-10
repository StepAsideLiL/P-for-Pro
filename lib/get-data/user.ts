import { api } from "../axios-api";

export const getLoggedinUser = async (email: string | null | undefined) => {
  if (!email) {
    return null;
  }

  const res = await api.get(`/v1/loggedin-user/${email}`);
  const user = res.data;
  return user;
};
