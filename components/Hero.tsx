import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import Link from 'next/link'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};


function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Rati Ziraqashvili", "Developer"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover "
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className='z-20'>
        <h2 className=" animate-pulse text-small uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>

        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
          <button className="heroButton animate-pulse">About</button>
          </Link>
          <Link href="#experience">
          <button className="heroButton animate-pulse">Experience</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton animate-pulse">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton animate-pulse">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
