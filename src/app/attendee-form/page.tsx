import React from "react";
import AttendeeFormHeader from "@/components/AttendeeFormHeader";
import AttendeeFormCard from "@/components/AttendeeFormCard";

function AttendeeForm() {
  return (
    <section
      className="flex items-center justify-center mx-auto min-h-screen"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      {/* Header */}
      <main
        className="mt-24 h-full md:h-[1020px] w-[335px] md:w-[700px] border border-[#0E464F] bg-[#08252B] bg-opacity-[40%] rounded-3xl"
        role="main"
      >
        <section className="">
          <AttendeeFormHeader step={2} />
        </section>
        <section className="className">
          <AttendeeFormCard />
        </section>
      </main>
    </section>
  );
}

export default AttendeeForm;
