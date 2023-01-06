import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="p-8 bg-neutral-50 text-primary-content text-center">
        <div>
          <p>Copyright &copy; {year} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
