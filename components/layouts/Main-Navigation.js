import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
    const companyName = '<OpulenceDeveloper/>'
  return (
    <nav className="h-20 mt-5 px-5 md:px-12">
      <div className="flex justify-between">
      <div><h1 className="truncate text-xl font-bold text-medium lg:text-4xl">{companyName}</h1>
      <p className="text-right text-fs1 pr-5 italic lg:text-sm">God gives the logic, I write the code</p>
      </div>
      <div className="hidden lg:flex space-x-4 text-lg">
        <div className="rounded-md flex items-center px-5"><Link href="#">About</Link></div>
        <div className="border border-primary1 rounded-md flex items-center px-4 py-3"><Link href="#">Resume</Link></div>
      </div>
      <button
          className={`block hamburger lg:hidden focus:outline-none`}
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle "></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default MainNavigation;
