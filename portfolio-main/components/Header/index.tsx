
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20 w-full flex justify-between relative">
        <div className="w-fit h-full flex items-center">
          <div className={`${dynaPuff.className} w-fit text-2xl md:text-3xl text-blueText`}>
            {`                                     `}
          </div>
        </div>
       
        <div className="zeroScreen:hidden h-full w-fit gap-12 navSm:flex items-center justify-between">
          <ul className="flex gap-7 text-grayText">
            <li className="text-lg">
              <Link href={""}>Home</Link>
            </li>
            <li className="text-lg">
              <Link href={""}>Skill</Link>
            </li>
            <li className="text-lg">
              <Link href={""}>Projects</Link>
            </li>
            <li className="text-lg">
              <Link href={""}>Temoignages</Link>
            </li>
            <li className="text-lg">
              <Link href={""}>Contact</Link>
            </li>
            <li className="text-lg">
              <Link href={""}>About</Link>
            </li>
          </ul>
        </div>

        
      </div>
     
      <footer className="fixed bottom-0 left-0 w-full bg-blueBg text-white text-center p-4">
        <div className="flex justify-center items-center gap-4">
          <Link href={"https://github.com/Pxtr12"} target="_blank">
            <Image src={"/githubWhiteIcon.svg"} alt="" width={25} height={25} />
          </Link>
          <Link href={""}>
            <Image src={"/twitterWhiteIcon.svg"} alt="" width={27} height={27} />
          </Link>
          <Link href={"https://www.linkedin.com/in/peter-banywesize"} target="_blank">
            <Image src={"/linkedInWhiteIcon.svg"} alt="" width={26} height={26} />
          </Link>
        </div>
        <p>{`© 2023 Peter. Tous droits réservés.
        Designed and Developed by Peter`}</p>
      </footer>
    </>
  );
};

export default Header;
