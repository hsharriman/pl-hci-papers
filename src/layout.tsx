import Footer from "./footer";
import Header from "./header";
type Props = {
  preview?: boolean;
  subpage?: string;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
    <div className="min-h-screen flex justify-center">
      <div className="max-w-4xl bg-slate-200 ">
      <Header />
      <div>
          <main>{children}</main>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
