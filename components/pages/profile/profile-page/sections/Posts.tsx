import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/virtual-interview.jpg";
import { Heart, Reply } from "lucide-react";

const Posts = () => {
  const posts = [
    {
      id: "1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quos pariatur eveniet, accusantium reprehenderit harum nam atque ex ipsa eius.",
    },
    {
      id: "2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem numquam laudantium beatae deleniti, sed, fugit illo, blanditiis ipsa nemo provident vitae consequatur at voluptatum ratione nobis sit quae optio commodi illum officiis. Adipisci!",
    },
    {
      id: "1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quos pariatur eveniet, accusantium",
    },
  ];

  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard = ({
  post,
}: {
  post: {
    id: string;
    body: string;
  };
}) => {
  const { id, body } = post;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="w-14">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={img}
              alt="Profile Picture"
              className="object-cover w-full h-full rounded-full"
            />
          </AspectRatio>
        </div>

        <div>
          <CardTitle>Md. Abdullah Rifat Khan</CardTitle>
          <CardDescription>StepAsideLiL</CardDescription>
        </div>
      </CardHeader>

      <CardContent>{body}</CardContent>

      <CardFooter className="gap-5">
        <p className="flex items-center gap-1 text-muted-foreground">
          <Heart size={"16px"} /> <span>5</span>
        </p>

        <p className="flex items-center gap-1 text-muted-foreground">
          <Reply size={"16px"} /> <span>5</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Posts;
