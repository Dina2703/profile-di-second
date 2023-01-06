import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="p-8  text-center sticky bottom-0">
        <div>
          <p className="text-xs flex flex-col gap-y-2 md:flex-row md:gap-1 justify-center">
            <span>Copyright &copy; {year} Dinara Idrissova. </span>
            <span> All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
