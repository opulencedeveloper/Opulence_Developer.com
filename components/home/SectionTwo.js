import Image from "next/image";
import { useRef } from "react";

const SectionTwo = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();

  const scrollToFirstSection = () => {
    console.log("clicked");
    section1Ref.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start'  });
  };
  const scrollToLastSection = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
  };

  const videoIds = [
    { id: "UqOb7JOXNWc", myref: section1Ref },
    { id: "OFjW-Sjc_VQ", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: undefined },
    { id: "OFjW-Sjc_VQ", myref: section2Ref },
  ];

  const pageContent = [
    {
      name: "Trade Hub",
      type: "Crypto Website",
      imageUrl: "/images/tradehub.png",
    },
    {
      name: "Story Reading App",
      type: "E-book",
      imageUrl: "/images/story-book-app.png",
    },
    {
      name: "Finance App",
      type: "Fintech",
      imageUrl: "/images/finance-app.png",
    },
  ];

  return (
    <>
      <div className="px-5 mt-32 md:px-12">
        <p className="text-xl">Featured Projects</p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 items-center space-x-auto flex-wrap md:justify-evenly 2xl:justify-start space-x-2">
          {pageContent.map((content) => (
            <div key={content.imageUrl} className="w-96 my-10">
              <div className="relative bg-primary1 flex justify-center rounded-tr-md rounded-tl-md">
                <Image
                  src={content.imageUrl}
                  alt="call a doctor logo"
                  className="h-320 w-piw1 -mb-6 z-0 rounded"
                  width={540}
                  height={388}
                />
              </div>
              <div className="p-5 space-y-2 mt-2 bg-primary2">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{content.name}</p>
                    <p className="text-primary1 text-sm">{content.type}</p>
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
        <p className="text-xl">My API's</p>
        <hr className="border-t-2 opacity-50 my-5 " />
      </div>
      <div className="flex space-x-8 overflow-x-hidden pl-5 md:pl-12">
        {videoIds.map((video) => (
          <div key={video.id}>
            <iframe
              ref={video.myref}
              src={`https://www.youtube.com/embed/${video.id}`}
              width="400"
              height="300"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex px-5 justify-between md:px-12">
        <button
          className="flex items-center px-5 py-3 text-white rounded-md"
          onClick={scrollToFirstSection}
        >
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 mr-2 rotate-180"
            width={16}
            height={16}
          />
          Previous
        </button>

        <button
          className="flex items-center px-5 py-3 text-white rounded-md"
          onClick={scrollToLastSection}
        >
          Next
          <Image
            src="/images/icon/arrow-right.svg"
            alt="arrow right icon"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </>
  );
};

export default SectionTwo;
