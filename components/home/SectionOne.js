import Image from "next/image";

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
            <p className="leading-relaxed">
              What took you so long to find me? I'm{" "}
              <span className="font-bold text-white">Victor Amobi</span> and I
              am a{" "}
              <span className="font-bold text-white">
                FullStack Software Engineer
              </span>
            </p>
          </span>
        </div>
        <p className="max-w-6xl text-base lg:text-xl">
          I am passionate about improving the lives of others through design and
          constantly looking to learn new things everyday. I also discuss about
          tech and designs on Ticktok.
        </p>
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
    <div class=" py-6 bg-primary1 text-black text-xl">
        <div class="inline-block overflow-hidden">
          <marquee class="my-marquee space-x-8 flex items-center">
            <span>React.js</span>
            <span>Node.js</span> <span>Next.js</span>
            <span>Express.js</span> <span>MongoDB</span> <span>Mongoose</span>
            <span>Graphics</span> <span>Arduino</span>
            <span>IOT</span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
