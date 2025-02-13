"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface TicketData {
  fullName: string;
  email: string;
  avatar: string;
  aboutProject?: string;
}

function TicketDisplay() {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [ticketType, setTicketType] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<string>("1");

  useEffect(() => {
    const storedData = localStorage.getItem("attendeeData");
    if (storedData) {
      setTicketData(JSON.parse(storedData));
    }
    const storedTicketType = localStorage.getItem("ticketType") || "";
    setTicketType(storedTicketType);
    const storedTicketCount = localStorage.getItem("ticketCount") || "1";
    setTicketCount(storedTicketCount);
  }, []);

  return (
    <section className="relative flex items-center justify-center mx-auto w-[300px] h-[600px]">
      {/* Background Image */}
      <Image
        src="/ticket-bg.svg"
        alt="Ticket Background"
        layout="fill"
        objectFit="cover"
        className="rounded-3xl mt-1"
      />
      {/* Ticket Info Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center p-4">
        <h2 className="text-[#FFFFFF] text-center font-roadRage text-3xl font-normal mt-3 leading-[100%]">
          Techember Fest &rdquo;25
        </h2>
        <section className="flex items-center gap-2 mt-1">
          <Image
            src="/lollipop.svg"
            alt="Lollipop Icon"
            width={24}
            height={24}
          />
          <p className="text-white font-roboto text-sm">
            O4 Rumens road, Ikoyi, Lagos
          </p>
        </section>
        <section className="flex items-center gap-2 mt-1">
          <Image src="/time.svg" alt="Time Icon" width={24} height={24} />
          <p className="text-white font-roboto text-sm">
            March 15th, 2025 | 7:00 PM
          </p>
        </section>
        {/* User Avatar */}
        <section className="image-container border-4 border-[#24A0B5] w-[140px] h-[140px] rounded-3xl flex items-center justify-center mt-3">
          {ticketData?.avatar ? (
            <Image
              src={ticketData.avatar}
              alt="User Avatar"
              width={100}
              height={100}
              className="rounded-3xl object-cover "
            />
          ) : (
            <p className="text-white">No Image</p>
          )}
        </section>
        {/* Ticket Details */}
        <section className="ticket-details grid grid-cols-2 gap-0 border border-[#08343C] p-1 w-full mt-4 rounded-xl shadow shadow-[#000000] mb-3">
          <div className="flex flex-col border border-[#08343C] p-1">
            <span className="text-gray-600 text-sm font-roboto">
              Enter Name Here
            </span>
            <span className="text-white text-sm font-roboto font-normal">
              {ticketData?.fullName || "N/A"}
            </span>
          </div>
          <div className="flex flex-col border border-[#08343C] p-1">
            <span className="text-gray-600 text-sm font-roboto">
              Enter Email Here*
            </span>
            <span className="text-white text-sm font-roboto font-normal break-words">
              {ticketData?.email || "N/A"}
            </span>
          </div>
          <div className="flex flex-col border border-[#12464E] p-1">
            <span className="text-gray-600 text-sm font-roboto">
              Ticket Type:
            </span>
            <span className="text-white text-sm font-roboto font-medium">
              {ticketType || "N/A"}
            </span>
          </div>
          <div className="flex flex-col border border-[#12464E] p-1">
            <span className="text-gray-600 text-sm font-roboto">
              Tickets for:
            </span>
            <span className="text-white text-sm font-roboto font-medium">
              {ticketCount}
            </span>
          </div>
          <div className="flex flex-col p-1 border border-[#12464E] col-span-2">
            <span className="text-gray-600 text-sm font-roboto">
              About Project:
            </span>
            <span className="text-white text-sm font-roboto font-medium">
              {ticketData?.aboutProject || "N/A"}
            </span>
          </div>
        </section>
      </div>
      {/* Barcode */}
      <Image
        src="/bar-code.svg"
        alt="Bar Code"
        width={236}
        height={68}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mt-4"
      />
    </section>
  );
}

export default TicketDisplay;
