import React from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#05252C66] bg-opacity-[40%] border border-[#197686] shadow-md text-white rounded-2xl md:rounded-3xl z-50"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo and Title */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Link href="/" aria-label="Go to home page">
            <Image
              src="/ticket-logo.svg"
              alt="Ticket Logo"
              width={24}
              height={24}
              className="h-8 w-auto"
              aria-hidden="true"
            />
          </Link>
          <div id="nav-title" className="text-lg font-semibold">
            <Image
              src="/ticket-title.svg"
              alt="Conference Ticket"
              width={44}
              height={23}
              className="h-8 w-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6" role="menu">
          <li role="none">
            <Link
              href="/"
              className="text-lg font-normal text-[#B3B3B3] hover:text-white focus:text-white font-[JejuMyeongjo]"
              role="menuitem"
            >
              Events
            </Link>
          </li>
          <li role="none">
            <Link
              href="/attendee-display"
              className="text-lg font-normal text-[#B3B3B3] hover:text-white focus:text-white font-[JejuMyeongjo]"
              role="menuitem"
            >
              My Tickets
            </Link>
          </li>
          <li role="none">
            <Link
              href="/attendee-form"
              className="text-lg font-normal text-[#B3B3B3] hover:text-white focus:text-white font-[JejuMyeongjo]"
              role="menuitem"
            >
              About Project
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Link
          href="/attendee-display"
          className="flex items-center justify-center gap-2 px-4 py-3 md:px-4 md:py-2 bg-white text-[#0A0C11] text-sm md:text-lg font-normal rounded-xl shadow-md transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#197686] font-[JejuMyeongjo]"
          role="button"
        >
          MY TICKETS
          <span aria-hidden="true">
            <Image
              src="/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
