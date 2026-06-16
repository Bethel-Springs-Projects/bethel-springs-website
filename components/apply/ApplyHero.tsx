import React from "react";

const ApplyHero = () => {
  return (
    <section className="padding-x padding-y bg-primary/10">
      <div className="flex flex-col items-center">
        <h1 className=" mt-2 md:mt-4 text-3xl md:text-[48px] lg:text-[56px] leading-10 md:leading-tight font-medium max-w-[580px]">
          Apply for Support
        </h1>
        <p className="mt-4 md:mt-6 text-base leading-relaxed md:leading-7 text-foreground/70 max-w-[450px] md:max-w-[520px] text-center">
          Follow the steps below to complete your application and get started
          with our support services.
        </p>
      </div>
    </section>
  );
};

export default ApplyHero;
