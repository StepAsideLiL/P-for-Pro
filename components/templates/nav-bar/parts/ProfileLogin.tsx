import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProfileLogin = () => {
  if (true) {
    return (
      <div>
        <Avatar>
          <AvatarImage
            src="https://images2.imgbox.com/17/34/njSaBSSj_o.jpg"
            alt="@hello"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" asChild>
        <Link href="/signin">Sign in</Link>
      </Button>

      <Button asChild>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  );
};

export default ProfileLogin;
