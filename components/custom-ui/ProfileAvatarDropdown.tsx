"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Briefcase, CheckSquare, PenLine, User } from "lucide-react";

const ProfileAvatarDropdown = ({
  user,
}: {
  user?: { id: string; username: string; email: string; role: string };
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://images2.imgbox.com/17/34/njSaBSSj_o.jpg"
            alt="@hello"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href={`/p/${user?.username}?tab=profile`}>
            <DropdownMenuItem className="gap-2">
              <User size={"16px"} /> <span>Profile</span>
            </DropdownMenuItem>
          </Link>

          <Link href={`/p/${user?.username}?tab=posts`}>
            <DropdownMenuItem className="gap-2">
              <PenLine size={"16px"} /> <span>Post</span>
            </DropdownMenuItem>
          </Link>

          <Link href={`/p/${user?.username}?tab=jobPost`}>
            <DropdownMenuItem className="gap-2">
              <Briefcase size={"16px"} /> <span>Job Post</span>
            </DropdownMenuItem>
          </Link>

          <Link href={`/p/${user?.username}?tab=appliedJobs`}>
            <DropdownMenuItem className="gap-2">
              <CheckSquare size={"16px"} /> <span>Applied Jobs</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatarDropdown;
