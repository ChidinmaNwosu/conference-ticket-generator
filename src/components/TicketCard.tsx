"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function TicketCard() {
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<number>(1);

  //Allows me store my selections in local storage
  useEffect(() => {
    localStorage.setItem("ticketType", selectedTicket);
    localStorage.setItem("ticketCount", ticketCount.toString());
  }, [selectedTicket, ticketCount]);

  const ticketOptions = [
    { title: "REGULAR ACCESS", price: "Free" },
    { title: "VIP ACCESS", price: "$50" },
    { title: "VVIP ACCESS", price: "$150" },
  ];

  return (
    <section className="md:mx-auto md:w-[604px] md:h-[726px] md:border md:border-[#0E464F] md:rounded-3xl  md:bg-[#08252B] mb-5">
      <section
        className="card-1 mx-4 border border-[#07373F] shadow-[0px_2px_2px_2px_rgba(0,0,0,0.2)] rounded-3xl md:w-[556px] md:h-[200px] mt-6 px-4 py-4 md:py-0 md:px-20"
        style={{
          background: `linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), 
                 radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)`,
        }}
      >
        <h2 className="font-normal text-3xl md:text-6xl leading-[100%] text-[#FAFAFA] text-center mt-5 font-roadRage">
          Techember Fest &rdquo;25
        </h2>
        <p className="text-[#FFFFFF] font-roboto text-sm md:text-base text-center">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <section className="flex flex-col md:flex-row justify-center items-center mt-3 text-base font-normal">
          <div className="flex items-center">
            <Image
              src="/lollipop.svg"
              alt="Lollipop Icon"
              width={24}
              height={24}
            />
            <p className="text-[#FAFAFA] pr-2">[Event Location]</p>
          </div>
          <p className="hidden md:block text-[#FAFAFA] px-2">| |</p>
          <p className="text-[#FAFAFA] px-2">March 15th 2025 | 7:00 PM</p>
        </section>
      </section>

      {/* Ticket Prices */}
      <section className="mt-5 border-t-4 border-[#07373F] mx-4">
        <h3 className="font-normal text-base text-[#FAFAFA] mt-5 font-roboto">
          Select Ticket Type:
        </h3>
        <section className="w-[287px] md:w-[556px] grid grid-cols-1 md:grid-cols-3 mt-4 border border-[#07373F] rounded-3xl bg-[#052228]">
          {ticketOptions.map(({ title, price }, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedTicket(title)}
              className={`md:w-[158px] md:h-[110px] flex flex-col-reverse border rounded-xl bg-[#052228] text-left px-3 py-2 my-3 mx-3 hover:bg-[#197686] focus:outline-none focus:ring-2 focus:ring-[#197686] ${
                selectedTicket === title ? "bg-[#197686]" : ""
              }`}
              aria-pressed={selectedTicket === title}
            >
              <div className="flex flex-col">
                <p className="text-[#FFFFFF] text-[14px] font-normal font-roboto">
                  {title}
                </p>
                <p className="text-[#FFFFFF] text-[16px] font-normal font-roboto">
                  20/52
                </p>
              </div>
              <p className="text-[#FFFFFF] font-semibold text-[24px] mb-3 font-roboto">
                {price}
              </p>
            </button>
          ))}
        </section>
      </section>

      {/* Number of Tickets */}
      <section className="mt-8 mx-4">
        <h3 className="font-normal text-base text-[#FAFAFA] mt-5">
          Number of Tickets:
        </h3>
        <div className="relative w-full max-w-[556px] mt-2">
          <div className="flex items-center w-[287px] md:w-[556px] border border-[#07373F] bg-[#07373F] text-white py-2 px-4 rounded-lg focus-within:ring-2 focus-within:ring-[#197686]">
            <input
              type="number"
              min="1"
              max="10"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              className="w-full bg-transparent text-left focus:outline-none appearance-none"
              aria-label="Number of Tickets"
            />
            <Image
              src="/dropdown.svg"
              alt="Dropdown Icon"
              width={14}
              height={14}
              className="ml-2 w-4 h-4"
            />
          </div>
        </div>
      </section>

      {/* Checkout Buttons */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:w-[556px] md:h-[48px] mx-4">
        <button
          type="button"
          className="w-full md:w-[50%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-[#FFFFFF] rounded-lg font-normal text-base font-jejuMyeongjo"
        >
          Cancel
        </button>
        <button
          type="button"
          className="w-full md:w-[50%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-[#FFFFFF] rounded-lg font-normal text-base font-jejuMyeongjo"
        >
          <Link href="/attendee-form" aria-label="Go to Attendee Form">
            Next
          </Link>
        </button>
      </section>
    </section>
  );
}

export default TicketCard;
