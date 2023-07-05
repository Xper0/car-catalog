import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={""}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          {/* <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p> */}
        </div>
        <div className="footer_links flex gap-5">
          {footerLinks.map((link) => (
            <div className="footer_link" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 "
                >
                  <div className="flex flex-col ">{item.title}</div>
                </Link>
              ))}
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <div className="footer_copyrights-link">
            <p>@2023 CarHub. All Rights Reserved</p>
            <Link href={"/"} className="text-gray-500 ">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-gray-500 ">
              Terms of Use
            </Link>
          </div>
        </div>
    </footer>
  );
};
