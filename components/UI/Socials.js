const { default: Image } = require("next/image")

const Socials = () => {
    return <div className="px-5 mt-10 mb-40 md:px-12">
    <div className="border border-primary2  flex justify-center items-center space-x-4 flex-wrap py-6">
    
    
    <p className="text-lg ">Find me on</p>
    <Image
          src="/images/icon/linkedin.svg"
          alt="arrow right icon"
          className="h-11 w-11"
          width={43.7}
          height={43.7}
        />
        <Image
          src="/images/icon/twitter.svg"
          alt="arrow right icon"
          className="h-11 w-11"
          width={43.7}
          height={43.7}
        />
        <Image
          src="/images/icon/instagram.svg"
          alt="arrow right icon"
          className="h-11 w-11"
          width={43.7}
          height={43.7}
        />
        <Image
          src="/images/icon/facebook.svg"
          alt="arrow right icon"
          className="h-11 w-11"
          width={43.7}
          height={43.7}
        />
        
        </div></div>
}

export default Socials;