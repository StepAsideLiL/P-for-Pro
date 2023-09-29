import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/virtual-interview.jpg";

const FeaturePosts = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
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

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
          eligendi beatae consectetur cumque repudiandae voluptatum dicta,
          quibusdam neque, dolores veritatis tempora deserunt! Eum eos nostrum.
        </CardContent>
      </Card>

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

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
          eligendi beatae consectetur cumque repudiandae voluptatum dicta,
          quibusdam neque, dolores veritatis tempora deserunt! Eum eos nostrum
          delectus consectetur voluptatum fugit? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Assumenda, impedit. Perspiciatis,
          reprehenderit.
        </CardContent>
      </Card>

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

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
          eligendi beatae consectetur cumque repudiandae voluptatum dicta,
          quibusdam neque, dolores veritatis tempora deserunt! Eum eos nostrum
          delectus consectetur voluptatum fugit?
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturePosts;
