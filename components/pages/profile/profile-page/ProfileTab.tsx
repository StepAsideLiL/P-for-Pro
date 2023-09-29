import React from "react";
import ProfileCard from "./sections/ProfileCard";
import FeaturePosts from "./sections/FeaturePosts";
import { Button } from "@/components/ui/button";
import { FileEdit } from "lucide-react";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import CourseAndCertification from "./sections/CourseAndCertification";

const ProfileTab = () => {
  return (
    <section className="container grid grid-cols-4 gap-5 py-2 mx-auto max-w-7xl">
      <section className="w-full col-span-1 space-y-3">
        <ProfileCard />
      </section>

      <section className="col-span-3 space-y-10">
        {/* Feature Posts Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Features</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <FeaturePosts />
        </section>

        {/* About Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">About</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <About />
        </section>

        {/* Skills Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Skills</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <Skills />
        </section>

        {/* Experience Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Experience</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <Experience />
        </section>

        {/* Education Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Education</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <Education />
        </section>

        {/* Education Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Projects</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <Projects />
        </section>

        {/* Course and Certification Section */}
        <section className="p-2 space-y-3 rounded shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Course and Certification</h1>

            <Button variant={"ghost"}>
              <FileEdit size={""} />
            </Button>
          </div>

          <CourseAndCertification />
        </section>
      </section>
    </section>
  );
};

export default ProfileTab;
