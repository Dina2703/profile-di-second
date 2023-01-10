import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col  justify-between items-center  ">
      <Navbar />
      <main className="mt-4 md:mt-8 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
