import MainNavigation from "./Main-Navigation.js";
//import Footer from "@/components/layout/footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
