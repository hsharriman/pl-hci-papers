import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

export const BaseContent = () => {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center flex-row content-start flex-wrap">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
