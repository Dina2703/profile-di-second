import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="p-2 md:p-3 text-center  w-screen fixed bottom-0 left-0 right-0 bg-neutral-100">
        <p className="text-[12px] flex justify-center text-slate-800 ">
          <span>Copyright &copy; {year} Dinara Idrissova. </span>
          {"  "}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
