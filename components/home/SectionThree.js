import Image from "next/image";
import { useRef } from "react";
import YouTube from 'react-youtube';

const videoId = "zNv1Jq6IqDQ";
  const options = {
    width: 400,
    height: 300,
  };

const SectionTwo = () => {
  const section2Ref = useRef(null);
  const section1Ref = useRef(null);

  const contents = [
    {
      content1: "SpeedKash",
      myref: section1Ref,
    },
    {
      content1: "SpeedKash",
      myref: null,
    },{
      content1: "SpeedKash",
      myref: null,
    },
    {
      content1: "SpeedKash",
      myref: section2Ref,
    },
  ];

  const scrollToFirstSection = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLastSection = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

 
  return (
    <>
      <div className="px-5 mt-32 md:px-12">
        <p className="text-xl">Featured Projects</p>
        <div className="border-primary1 border-t-2 flex justify-center mt-5 items-center space-x-auto flex-wrap md:justify-evenly 2xl:justify-start space-x-2">
          {contents.map((content) => (
            <div className="w-96 my-10">
              <div className="relative bg-primary1 flex justify-center rounded-tr-md rounded-tl-md">
                <Image
                  src="/images/image 4.svg"
                  alt="call a doctor logo"
                  className="h-320 w-piw1 -mb-6 z-0"
                  width={540}
                  height={388}
                />
              </div>
              <div className="p-5 space-y-2 bg-primary2">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <p className="font-bold text-xl">SpeedKash</p>
                    <p className="text-primary1 text-sm">FinTech Web App</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm">Live Project</p>{" "}
                    <div className="ml-1">
                      <Image
                        src="/images/icon/arrow-right.svg"
                        alt="arrow right icon"
                        className="h-4 w-4 transform -rotate-45"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Enabling users save, take loan and shop for products and
                  services
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default SectionTwo;
