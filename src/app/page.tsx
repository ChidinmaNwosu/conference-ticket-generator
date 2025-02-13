import TicketCard from "@/components/TicketCard";
import TicketSelectHeader from "@/components/TicketSelectHeader";
import React from "react";

function Events() {
  return (
    <section
      className="flex items-center justify-center mx-auto min-h-screen"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
      aria-labelledby="events-heading"
    >
      <main
        className="mt-24 h-full md:h-[902px] w-[335px] md:w-[700px] border border-[#0E464F] bg-[#08252B] bg-opacity-[40%] rounded-3xl"
        role="main"
      >
        <h1 id="events-heading" className="sr-only">
          Ticket Selection Events
        </h1>
        <TicketSelectHeader step={1} />
        <TicketCard />
      </main>
    </section>
  );
}

export default Events;
