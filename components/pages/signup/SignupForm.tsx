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
import { api } from "@/lib/axios-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  email: z.string().min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const SignupForm = () => {
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
      username: "",
      email: "",
      password: "",
    },
  });

  const formSubmission = (value: z.infer<typeof formSchema>) => {
    setDisable(true);

    api
      .post("/register", value)
      .then((res) => {
        console.log(res);
        if (res.data.username !== "") {
          route.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Signup Failed!");
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    placeholder="example"
                    {...field}
                    autoComplete="false"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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
                    autoComplete="false"
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
                  <Input
                    type="password"
                    placeholder="password"
                    {...field}
                    autoComplete="false"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={disable}>
            Create an account
          </Button>
        </form>
      </Form>
    </CardContent>
  );
};

export default SignupForm;
