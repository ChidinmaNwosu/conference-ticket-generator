import TicketDisplay from "@/components/TicketDisplay";
import TicketDisplayHeader from "@/components/TicketDisplayHeader";
import TicketDisplayButton from "@/components/TicketDisplayButton";
import React from "react";

function Display() {
  return (
    <section
      className="flex items-center justify-center mx-auto min-h-screen"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <main
        className="mt-24 h-full md:h-[950px] w-[375px] md:w-[700px] border border-[#0E464F] bg-[#08252B] bg-opacity-40 rounded-3xl"
        role="main"
      >
        <TicketDisplayHeader step={3} />
        <section className="px-4 py-2">
          <h1 className="text-[#FFFFFF] text-center font-alatsi text-xl md:text-4xl font-normal">
            Your Ticket is Booked!
          </h1>
          <p className="text-[#FFFFFF] text-center font-roboto text-sm md:text-base font-normal">
            Check your email for a copy or you can <strong>download</strong>.
          </p>
        </section>
        <TicketDisplay />

        {/* Ticket Display Buttons */}
        <TicketDisplayButton />
      </main>
    </section>
  );
}

export default Display;
