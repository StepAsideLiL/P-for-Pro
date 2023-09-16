import LogoLink from "@/components/custom-ui/LogoLink";
import Main from "@/components/custom-ui/Main";
import SigninForm from "@/components/pages/signin/SigninForm";
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

const SigninPage = () => {
  return (
    <Main className="flex items-center justify-center">
      <div>
        <div className="pb-5 text-center">
          <LogoLink />
        </div>

        <Card className="w-96">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>

            <CardDescription>Sign in to P for Pro</CardDescription>
          </CardHeader>

          <SigninForm />

          <CardFooter className="flex flex-col">
            <div className="flex items-center w-full gap-3">
              <Separator className="flex-1 h-1 rounded-3xl" />
              <span className="">OR</span>
              <Separator className="flex-1 h-1 rounded-3xl" />
            </div>

            <Button variant="link" asChild className="pt-5">
              <Link href="/signup">Create an account</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Main>
  );
};

export default SigninPage;
