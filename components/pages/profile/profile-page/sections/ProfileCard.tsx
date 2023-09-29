import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/virtual-interview.jpg";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Github,
  Puzzle,
  Target,
  Twitter,
  Users2,
} from "lucide-react";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <>
      <AspectRatio ratio={1 / 1}>
        <Image
          src={img}
          alt={`Profile Picture`}
          className="object-cover w-full h-full rounded-full"
        />
      </AspectRatio>

      <div>
        <h1 className="text-2xl font-semibold">Md. Abdullah Rifat Khan</h1>
        <p className="text-muted-foreground">StepAsideLiL</p>
        <p className="flex items-center gap-1">
          <Target size={"16px"} className="text-muted-foreground" />{" "}
          <span>Open-To-Work</span>
        </p>
      </div>

      <div className="flex items-center w-full gap-1">
        <Button className="w-full">Follow Back</Button>

        <Button variant={"outline"} className="w-full">
          Message
        </Button>
      </div>

      <p>Hello, This is Md. Abdullah Rifat Khan speaking.</p>
      <p className="flex items-center gap-1">
        <Puzzle size={"16px"} className="text-muted-foreground" />{" "}
        <span>INTJ</span>
      </p>

      <p className="flex items-center gap-1">
        <Users2 size={"16px"} className="text-muted-foreground" />
        <span>
          {12} <span className="text-muted-foreground">Followers</span> &bull;{" "}
          {10} <span className="text-muted-foreground">Following</span>
        </span>
      </p>

      <p>Gazipur, Bangladesh</p>

      <div className="flex items-center gap-3">
        <Link href={"#"} className="text-muted-foreground hover:text-primary">
          <Facebook />
        </Link>

        <Link href={"#"} className="text-muted-foreground hover:text-primary">
          <Twitter />
        </Link>

        <Link href={"#"} className="text-muted-foreground hover:text-primary">
          <Github />
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
