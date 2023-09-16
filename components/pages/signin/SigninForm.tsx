"use client";

import React from "react";
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

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmission = (value: z.infer<typeof formSchema>) => {
    console.log(value);
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

          <Button type="submit">Sign In</Button>
        </form>
      </Form>
    </CardContent>
  );
};

export default SigninForm;
