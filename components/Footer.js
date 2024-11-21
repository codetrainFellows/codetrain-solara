"use client";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

import Image from "next/image";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: [
        {
          name: "blog",
          href: "https://codetrain.medium.com/",
        },
        {
          name: "contact admissions - 0545792397",
          href: "",
        },
      ],
    },
    {
      title: "Follow Us",
      items: [
        {
          name: "facebook",
          href: "https://www.facebook.com/codetraingh/?_rdc=2&_rdr",
        },
        {
          name: "linkedIn",
          href: "https://www.linkedin.com/school/codetrain/",
        },
        {
          name: "twitter",
          href: "https://x.com/codetraingh?lang=en",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/codetrainafrica/",
        },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white p-4 md:p-20">
      <div className="flex flex-row items-start flex-wrap gap-y-6 gap-x-4 bg-white sm:justify-around">
        <Image
          src="/codetrain-logo.png"
          alt="logo-ct"
          width={120}
          height={120}
        />
        <div className="flex justify-between gap-4 w-2/5">
          {links.map(({ title, items }) => (
            <ul key={title} className="w-full">
              <li className="mb-3 font-bold text-sm md:text-lg text-textColor">
                {title}
              </li>
              <ul className="list-disc">
                {items.map((item) => (
                  <li key={item.name} className="ml-6">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="py-1.5 font-semibold text-sm md:text-lg underline transition-colors text-textColor"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-semibold md:text-lg text-textColor">
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </div>
      <hr className="my-8 border-textColor" />
      <Typography variant="" className="text-center text-violet">
        &copy; {new Date().getFullYear()} Codetrain - All Right Reserved
      </Typography>
    </footer>
  );
};

export default Footer;
