import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  const handleClick = () => {
    window.open("https://www.google.com/maps?q=alpharetta, GA", "_blank");
  };
  return (
    <div className="overflow-x-hidden py-4 max-w-3xl px-4 2xl:mt-16  ">
      <div className="flex flex-col gap-3 justify-center items-start">
        <h2 className="font-semibold">Get in Touch</h2>
        <p className="flex gap-1 items-center hover:underline">
          <FaRegEnvelope color="rgb(249 115 22)" />:{" "}
          <a href="mailto:dina.b.idrissova@gmail.com">
            dina.b.idrissova@gmail.com
          </a>
        </p>
        <p className="flex gap-1 items-center hover:underline ">
          <BsTelephone color="rgb(249 115 22)" className="font-bold" />:{" "}
          <a href="tel:+14042457101">(404) 245-7101</a>
        </p>
        <p className="flex gap-1 items-center hover:underline cursor-pointer">
          <MdOutlineLocationOn
            onClick={handleClick}
            color="rgb(249 115 22)"
            className="font-bold text-lg"
          />
          : Atlanta, Georgia, USA
        </p>
        <p>
          <span className="font-semibold">
            Thank you for visiting my website!{" "}
          </span>{" "}
          <br />
          If you have any questions, comments or just want to say hi, don't
          hesitate to reach out. <br /> I'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
