import { withAuth } from "next-auth/middleware";

export const config = { matcher: ["/p/:user*", "/super"] };

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});
