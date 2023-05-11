import Image from "next/image";
import Socials from "../UI/Socials";


const SectionTwo = () => {
  const contents = [
    {
      content1: "SpeedKash",
    },
    {
      content1: "SpeedKash",
    },{
      content1: "SpeedKash",
    },
    {
      content1: "SpeedKash",
    },
  ];

 
  return (
    <>
      <div className="px-5 mt-32 md:px-12">
        <p className="text-xl">Featured Projects</p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 items-center space-x-auto flex-wrap md:justify-evenly 2xl:justify-start space-x-2">
          {contents.map((content) => (
            <div className="w-96 py-2 space-y-2">
                <Image
                  src="/images/image 4.svg"
                  alt="call a doctor logo"
                  className="h-320 w-piw1"
                  width={540}
                  height={388}
                />
                    <p className="font-light text-xl text-center">IOS vs Android</p>
                   
                 
                <p className="text-center text-sm leading-tight">
                Here I clearly distinguished between IOS and Android Design guidelines. There are serval interactive components and variants contained in this file.
                </p>
                <button className="flex justify-center border-primary1 border-b-2 border-opacity-50 mx-32 pb-0.5">
                    <p className="text-sm">Open in GitHub</p>{" "}
                    <div className="ml-1">
                      <Image
                        src="/images/icon/arrow-right.svg"
                        alt="arrow right icon"
                        className="h-4 w-4 transform -rotate-45"
                        width={16}
                        height={16}
                      />
                    </div>
                  </button>
                  
            </div>
          ))}
        </div>
      </div>




      <div className="px-5 mt-40 mb-28 md:px-12">
        <p className="text-lg">Some brands I've worked with</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <div className="space-x-auto flex items-start">
          {contents.map((content) => (
            <div className="w-40">
                <Image
                  src="/images/call-a-doc.svg"
                  alt="call a doctor logo"
                  className="h-14 w-32"
                  width={128}
                  height={64}
                />
                  
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-10 space-y-5 md:px-12">
        <p className="text-lg">Let's build margic together</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <p>I really love my work and can't wait to work with you. I am also avialable for code debugging and open to full-time, part-time and contract roles
All you need to do is to send an email or reach me on any of my social media handles and we can get started. I would love to hear about your project.</p>
<button className="flex items-center bg-black px-5 py-3 text-white rounded-sm">
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

     



      <div className="px-5 md:px-12"> <Socials /></div>
     
    </>
  );
};

export default SectionTwo;
