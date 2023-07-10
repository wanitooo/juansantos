import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Hind } from "next/font/google";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Footer = () => {
  return (
    <div
      id="footer"
      className={`bg-black w-full h-32 text-white p-5 relative overflow-hidden lg:px-32`}
    >
      <div className="absolute p-4 lg:bottom-0">
        © 2023 Juan Santos • All Rights Reserved.
      </div>
      <div className="absolute p-4 bottom-0 lg:right-16 ">
        <div className="flex flex-row gap-2">
          <Link
            href={"https://www.github.com/SinampalukanEnthusiast"}
            target="_blank"
          >
            <AiFillGithub size={"30px"} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/juan-francisco-santos/"}
            target="_blank"
          >
            <AiFillLinkedin size={"30px"} />
          </Link>
          <Link
            href={"mailto:juansantos2kplus2@gmail.com"}
            target="_blank"
            alt="Email Address"
          >
            <MdOutlineAlternateEmail size={"30px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
