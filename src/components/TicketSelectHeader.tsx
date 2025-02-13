import React from "react";

function TicketSelectHeader({ step }: { step: number }) {
  return (
    <header className="w-full px-4 md:px-8 py-4 md:py-8">
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0">
        <h1 className="leading-[24px] md:leading-[32px] text-[24px] md:text-[32px] font-normal font-jejuMyeongjo  text-white text-left">
          Ticket Selection
        </h1>
        <nav
          aria-label="Progress"
          className="text-gray-300 text-base text-roboto"
        >
          <span aria-current="step">Step {step} / 3</span>
        </nav>
      </div>
      <div
        className="w-full h-1 bg-gray-700 rounded-lg overflow-hidden mt-4"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={3}
      >
        <div
          className="h-full bg-[#197686] transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>
    </header>
  );
}

export default TicketSelectHeader;
