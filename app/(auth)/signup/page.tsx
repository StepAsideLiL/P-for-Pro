import LogoLink from "@/components/custom-ui/LogoLink";
import Main from "@/components/custom-ui/Main";
import SignupForm from "@/components/pages/signup/SignupForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignupPage = () => {
  return (
    <Main className="flex items-center justify-center">
      <div>
        <div className="pb-5 text-center">
          <LogoLink />
        </div>

        <Card className="w-96">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>

            <CardDescription>Create an account in P for Pro</CardDescription>
          </CardHeader>

          <SignupForm />

          <CardFooter className="flex flex-col">
            <div className="flex items-center w-full gap-3">
              <Separator className="flex-1 h-1 rounded-3xl" />
              <span className="">OR</span>
              <Separator className="flex-1 h-1 rounded-3xl" />
            </div>

            <Button variant="link" asChild className="pt-5">
              <Link href="/signin">Sign in to your account</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Main>
  );
};

export default SignupPage;
