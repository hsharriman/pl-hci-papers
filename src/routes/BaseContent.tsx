import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

export const BaseContent = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div className="max-w-4xl bg-slate-200 ">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
