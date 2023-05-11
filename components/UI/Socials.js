const { default: Image } = require("next/image");

const pageContent = [
  { imageUrl: "/images/icon/linkedin.svg", link: "" },
  { imageUrl: "/images/icon/twitter.svg", link: "" },
  { imageUrl: "/images/icon/instagram.svg", link: "" },
  { imageUrl: "/images/icon/facebook.svg", link: "" },
];

const Socials = () => {
  return (
    <div className="mt-10 mb-40">
      <div className="border border-primary2  flex justify-center items-center space-x-4 flex-wrap py-6">
        <p className="text-lg ">Find me on:</p>
        {pageContent.map((content) => {
          return (
            <Image
              key={content.imageUrl}
              src={content.imageUrl}
              alt="arrow right icon"
              className="h-11 w-11"
              width={43.7}
              height={43.7}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
