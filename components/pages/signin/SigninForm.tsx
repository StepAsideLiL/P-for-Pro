"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const SigninForm = () => {
  const [disable, setDisable] = useState(false);
  const route = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      route.push("/");
    }
    console.log(session);
  }, [route, session, session?.status]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmission = (value: z.infer<typeof formSchema>) => {
    setDisable(true);

    signIn("credentials", { ...value, redirect: false })
      .then((res) => {
        if (res?.ok === false) {
          toast.error("Invalid credentials!");
        }
        if (res?.ok === true) {
          route.push("/");
        }
      })
      .finally(() => {
        setDisable(false);
      });
  };

  return (
    <CardContent>
      <Form {...form}>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(formSubmission)}
          className="space-y-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={disable}>
            Sign In
          </Button>
        </form>
      </Form>
    </CardContent>
  );
};

export default SigninForm;
