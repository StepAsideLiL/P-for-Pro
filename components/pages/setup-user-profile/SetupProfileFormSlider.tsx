"use client";

import React, { useState } from "react";
import Name from "./form/Name";
import Photo from "./form/Photo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Bio from "./form/Bio";
import LogoLink from "@/components/custom-ui/LogoLink";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const SetupProfileFormSlider = () => {
  const [formCount, setFormCount] = useState(0);
  const [tuple, setTuple] = useState([null, formCount]); // [previous, corrent]

  if (tuple[1] !== formCount) {
    setTuple([tuple[1], formCount]);
  }

  let prev = tuple[0] ? tuple[0] : 0;
  let direction = formCount > prev ? "+" : "-"; // "+" = "increase", "-" = "decrease"

  const varient = {
    enter: (direction: string) => ({ x: direction === "+" ? 500 : -500 }),
    center: { x: 0 },
    exit: (direction: string) => ({ x: direction === "+" ? -500 : 500 }),
  };

  const formList = [
    {
      id: 1,
      title: "Name",
      description: "Setup Your Real Name",
      formELe: <Name />,
      formSubmit: function () {
        console.log("Title =>", this.title);
      },
      skipBtn: true, // true = "hidden"
    },
    {
      id: 2,
      title: "Profile Picture",
      description: "",
      formELe: <Photo />,
      formSubmit: function () {
        console.log("Title =>", this.title);
      },
      skipBtn: true,
    },
    {
      id: 3,
      title: "Short Bio",
      description: "",
      formELe: <Bio />,
      formSubmit: function () {
        console.log("Title =>", this.title);
      },
      skipBtn: false,
    },
  ];

  const handlePreviousBtn = () => {
    if (formCount > 0) {
      setFormCount((formCount) => formCount - 1);
    }
  };

  const handleNextbtn = () => {
    if (formCount < formList.length - 1) {
      setFormCount((formCount) => formCount + 1);
    }

    formList[formCount].formSubmit();
  };

  return (
    <div className="flex flex-col gap-3 h-96">
      <div className="flex items-center gap-3">
        <LogoLink />

        <div>
          <h1 className="text-xl font-medium">{formList[formCount].title}</h1>
          <p className="text-sm">{formList[formCount].description}</p>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden w-96">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={formCount}
            variants={varient}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: "tween" }}
            className="absolute w-11/12 inset-2"
          >
            {formList[formCount].formELe}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant={"outline"}
          onClick={handlePreviousBtn}
          disabled={formCount === 0 ? true : false}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          <Button
            variant={"ghost"}
            className={cn(
              formList[formCount].skipBtn ? "hidden" : "inline-block"
            )}
          >
            Skip
          </Button>

          <Button onClick={handleNextbtn}>
            {formCount === formList.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupProfileFormSlider;
