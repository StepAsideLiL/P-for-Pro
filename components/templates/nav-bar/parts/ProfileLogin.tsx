import ProfileAvatarDropdown from "@/components/custom-ui/ProfileAvatarDropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getLoggedinUser } from "@/lib/get-data/user";

const ProfileLogin = async () => {
  const user = await getLoggedinUser();

  if (user) {
    return (
      <div>
        <ProfileAvatarDropdown user={user} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" asChild className="hidden lg:inline-block">
        <Link href="/signin">Sign in</Link>
      </Button>

      <Button asChild>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  );
};

export default ProfileLogin;
