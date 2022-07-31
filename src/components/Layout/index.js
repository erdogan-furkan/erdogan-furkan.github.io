import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router";

function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen font-mono text-center bg-purple-50 transition duration-500 select-none dark:bg-neutral-800">
      <div className="container min-h-screen">
        <Navbar />

        <div className="pt-14 min-h-screen relative dark:text-white">
          <Outlet />
          {pathname !== "/" && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default Layout;
