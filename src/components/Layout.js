import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between items-center ">
      <Navbar />
      <main className="overflow-y-auto flex ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
