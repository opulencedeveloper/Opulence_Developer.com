import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <>
      <div className="text-center flex flex-col items-center space-y-8 my-20 text-primary1 px-5 md:px-12 lg:my-40">
        <div className="max-w-6xl">
          <div className="flex justify-center">
            <p className="text-3xl">Welcome </p>
            <Image
              src="/images/logo/wave.svg"
              alt="call a doctor logo"
              className="h-10 w-10"
              width={40}
              height={40}
            />
          </div>
          <span className="text-3xl lg:text-5xl">
            <p className="leading-tight">
              What took you so long to find me? I'm{" "}
              <span className="font-bold text-white">Victor Amobi</span> and I
              am a{" "}
              <span className="font-bold text-white">
                FullStack Software Engineer
              </span>
            </p>
          </span>
        </div>
        <div className="max-w-7xl">
          {" "}
          <Typewriter
          
            onInit={(typewriter) => {
              typewriter
                .pauseFor(100)
                .deleteAll().typeString(
                  "<span class=\"text-base lg:text-xl\">It's great to finally connect with you.</span>"
                ).pauseFor(100)
                .deleteAll().typeString(
                  "<span class=\"text-base lg:text-xl\">I can't help but wonder what amazing things we can achieve together now that we've found each other.</span>"
                )
                .pauseFor(100)
                .deleteAll()
                .typeString(
                  '<span class="text-base lg:text-xl">I am passionate about using technology to solve problems and build innovative solutions. With experience in both frontend and backend development, I am skilled in a variety of programming languages and frameworks. I take pride in delivering high-quality, performant code that meets the needs of my clients and users. Browse my portfolio to see some of my recent projects and get in touch to learn more about how I can help bring your ideas to life.</span>'
                )
                .start();
            }}
            options={{
              typeSpeed: 10,
              cursor: '<span class="text-xl">|</span>',
              html: false,
            }}
          />
        </div>

        <button className="flex items-center bg-black px-5 py-3 text-white rounded-md">
          Send Message
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={`overflow-hidden py-6 bg-primary1 text-black text-xl ${styles.container}`}>
      <div className={`inline-block space-x-8 whitespace-nowrap ${styles.textWrapper}`}>
      <span>React.js</span>
            <span>Node.js</span> <span>Next.js</span>
            <span>Express.js</span> <span>MongoDB</span> <span>Mongoose</span>
            <span>Graphics</span> <span>Arduino</span>
            <span>IOT</span>
      </div>
    </div>
      {/* <div className=" py-6 bg-primary1 text-black text-xl">
        <div className="inline-block overflow-hidden">
          <marquee className="my-marquee space-x-8 flex items-center">
            <span>React.js</span>
            <span>Node.js</span> <span>Next.js</span>
            <span>Express.js</span> <span>MongoDB</span> <span>Mongoose</span>
            <span>Graphics</span> <span>Arduino</span>
            <span>IOT</span>
          </marquee>
        </div>
      </div> */}
    </>
  );
};

export default SectionOne;
