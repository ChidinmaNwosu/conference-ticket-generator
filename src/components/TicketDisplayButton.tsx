"use client";
import React from "react";
import Link from "next/link";

function TicketDisplayButton() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-2 mt-4 md:mt-10 mx-4">
      <button
        onClick={() => alert("Your ticket is being downloaded! 🎟️")}
        type="submit"
        className="w-full md:w-[50%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-[#FFFFFF] rounded-lg font-normal text-base font-jejuMyengjo"
      >
        Download Ticket
      </button>
      <button
        type="button"
        className="w-full md:w-[50%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-[#FFFFFF] rounded-lg font-normal text-base font-jejuMyengjo"
      >
        <Link href="/attendee-form">Book Another Ticket</Link>
      </button>
    </section>
  );
}

export default TicketDisplayButton;
