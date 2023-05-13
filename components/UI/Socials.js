const { default: Image } = require("next/image");

const pageContent = [
  {
    imageUrl: "/images/icon/github.svg",
    link: "https://github.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageUrl: "/images/icon/twitter.svg",
    link: "https://twitter.com/KudosLucky",
    value: "KudosLucky",
  },
  {
    imageUrl: "/images/icon/linkedin.svg",
    link: "https://www.linkedin.com/in/amobi-victor-232724198",
    value: "amobi-victor-232724198",
  },
  {
    imageUrl: "/images/icon/facebook.svg",
    link: "https://facebook.com/opulencedeveloper",
    value: "opulencedeveloper",
  },
  {
    imageUrl: "/images/icon/facebook.svg",
    link: "https://facebook.com/victor.opulence",
    value: "Victor Lucky Opulence",
  },
];

const Socials = () => {
  return (
    <div className="mt-10 mb-40">
      <div className="border border-primary2  flex flex-col justify-center items-center space-y-4 p-6 md:space-x-5 xl:flex-row xl:space-y-0">
        <p className="text-lg ">Find me on:</p>
        {pageContent.map((content) => {
          return (
            <a
              key={content.link}
              href={content.link}
              target="_blank"
              className="flex items-center"
            >
              <div>
                <Image
                  src={content.imageUrl}
                  alt="arrow right icon"
                  className="h-8 w-8"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              <p className="font-extralight">{content.value}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
