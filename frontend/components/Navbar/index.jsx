import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="flex justify-between px-10 sm:px-20 lg:px-60 py-6 w-full font-semibold bg-white mb-10">
      <div className="flex justify-center items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z"
            fill="#0166FF"
          />
        </svg>
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex justify-center gap-6 items-center">
        <Link href="">
          <button className="btn btn-sm bg-blue-600 text-white font-light">
            +Record
          </button>
        </Link>
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 overflow-hidden">
          <Image src="/avatar.avif" width={200} height={200} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
