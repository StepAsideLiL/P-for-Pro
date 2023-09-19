import { Button } from "@/components/ui/button";
import Link from "next/link";
import bannerImage from "@/assets/images/virtual-interview.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { croissantOne } from "@/lib/config/fonts";

const Banner = () => {
  return (
    <section className="container flex items-start justify-between max-w-5xl mx-auto pt-14">
      <div className="w-[420px] space-y-5">
        <div className="space-y-5">
          <h1 className={cn("text-5xl font-bold", croissantOne.className)}>
            Find The Right Talent For Your Company
          </h1>

          <p className="text-2xl text-gray-700">
            A dating platform for employee and employer. Trust built on the
            skill of talents.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="">Meet New Talent</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="">Get Hire Now</Link>
          </Button>
        </div>
      </div>

      <div className="hidden w-96 md:block">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="object-cover w-full h-full rounded-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default Banner;
