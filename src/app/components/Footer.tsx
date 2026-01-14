"use client"
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t py-6 mt-16 flex items-center justify-center">
      <div className="w-full mx-4 sm:mx-6 flex text-[#9fe0c3] r justify-center">
        <p className="text-sm sm:text-base  ">
          &copy; {new Date().getFullYear()} Ebenezer Nwikina. All rights reserved.
        </p>

       
      </div>
    </footer>
  );
};

export default Footer;
