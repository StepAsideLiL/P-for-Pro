import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Facebook />,
      link: "#",
    },
    {
      icon: <Twitter />,
      link: "#",
    },
    {
      icon: <Instagram />,
      link: "#",
    },
    {
      icon: <Youtube />,
      link: "#",
    },
  ];

  return (
    <section className="flex items-center gap-3">
      <h1 className="font-bold">Follow Us</h1>

      <nav>
        <ul className="flex items-center gap-2">
          {socialLinks.map((list, index) => (
            <SocialLink key={index} href={list.link}>
              {list.icon}
            </SocialLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

const SocialLink = ({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="inline-block p-1 border-2 border-white rounded-full hover:bg-gray-700"
      >
        {children}
      </Link>
    </li>
  );
};

export default SocialLinks;
