"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div className={cn("overflow-hidden", show ? "h-full" : "h-40")}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste vel
          quae natus soluta iusto doloremque aliquid eius totam maxime mollitia.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
          perspiciatis adipisci sunt officiis? Magni doloribus autem nisi nobis
          eaque culpa, sunt inventore velit illum possimus fugit voluptates
          quidem, numquam dolore? Maiores cumque repudiandae voluptate quam.
          Expedita nisi ipsum consequuntur? Libero alias sint voluptatum, odit
          aut adipisci vitae earum tempora rem expedita autem, magnam odio
          commodi perspiciatis quas eos animi amet quibusdam. Vel, sed sapiente
          ipsam totam officiis at maiores?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          error, doloribus blanditiis ullam, velit sapiente praesentium dicta
          culpa iusto qui est aut, tempora similique? Dignissimos ex facilis
          repellendus consectetur hic quibusdam natus, quaerat ducimus ipsa quae
          blanditiis perferendis vel ad deleniti ratione. Eius deserunt
          doloribus nam aliquam iure inventore, earum maxime culpa, nobis
          officiis odit praesentium perferendis, minus laudantium quaerat itaque
          eum facilis dignissimos ut cum et. Eos, nesciunt error consectetur
          saepe beatae fugit pariatur est dolore quidem eum, vitae unde labore
          aliquam assumenda. Modi necessitatibus soluta facere excepturi! Esse
          rem mollitia atque, dolorem iusto est quibusdam impedit? Eaque quidem
          quae at ad qui ex ea sit quisquam a hic, eum ipsum repellat illum
          maiores veritatis nemo impedit ipsam illo assumenda! Expedita ullam
          quibusdam quos, unde vel voluptatum vero ipsam.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          iure sint reiciendis quis ex laboriosam error repudiandae praesentium
          blanditiis deleniti quam eum aperiam, illo consequuntur assumenda
          quaerat voluptatibus adipisci. Commodi!
        </p>
      </div>

      <div
        className={cn(
          "flex justify-center w-full py-2",
          show
            ? ""
            : "absolute bottom-0 flex justify-center w-full py-2 bg-gradient-to-b from-white/10 to-black/30"
        )}
      >
        <Button
          variant={"secondary"}
          onClick={() => setShow(!show)}
          className="hover:bg-muted bg-primary-foreground"
        >
          Show {show ? "less" : "more"}
        </Button>
      </div>
    </div>
  );
};

export default About;
