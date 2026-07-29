import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

const why = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your needs & understand your business goals.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We analyze your situation & provide the best solution for you.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We handle the process with professionalism & efficiency.",
  },
  {
    number: "04",
    title: "Completion",
    description:
      "We ensure everything is completed & ready to support your business.",
  },
];

export default function Work() {
  return (
    <section className="w-full bg-tertiary py-12 lg:py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    {/* Heading */}
    <div className="flex flex-col items-center text-center gap-4 mb-12">
      <p className="text-base font-semibold text-secondary">
        How We Work
      </p>

      <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary max-w-2xl">
        Simple Process, Clear Results
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

      {why.map((item, index) => (
        <div key={index} className="relative">

          {/* Chevron Desktop */}
          {index !== why.length - 1 && (
            <div className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="text-secondary w-7 h-7" />
            </div>
          )}

          {/* Card */}
          <div className="bg-[#F4E9DF] rounded-2xl shadow-lg p-6 h-full min-h-[180px] flex gap-5">

            {/* Number */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-secondary text-secondary font-semibold shrink-0">
              {item.number}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}
