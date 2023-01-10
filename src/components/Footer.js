import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="p-5  text-center ">
        <p className="text-xs flex flex-col gap-y-2 md:flex-row md:gap-1 justify-center text-slate-800">
          <span>Copyright &copy; {year} Dinara Idrissova. </span>
          <span> All rights reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
