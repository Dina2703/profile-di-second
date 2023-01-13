import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col  justify-between items-center transition-all delay-100 dark:bg-slate-800 text-gray-600 dark:text-gray-100">
      <Navbar />
      <main className="mt-4  h-[calc(100vh-120px)] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
