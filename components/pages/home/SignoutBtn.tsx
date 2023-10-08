"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignoutBtn = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export default SignoutBtn;
