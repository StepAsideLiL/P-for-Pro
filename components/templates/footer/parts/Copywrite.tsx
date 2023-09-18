import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const date = new Date();

const Copywrite = () => {
  const year = date.getFullYear();

  return (
    <section>
      <p className="text-sm">
        &copy; {year} - Made by{" "}
        <Link
          href="http://stepasidelil.web.app/"
          className="font-semibold hover:underline"
        >
          Rifat Khan
          <ArrowUpRight className="inline-block" size="16px" />
        </Link>
      </p>
    </section>
  );
};

export default Copywrite;
