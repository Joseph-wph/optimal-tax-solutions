import { Landmark, Scale, FileText, ShieldCheck, Globe } from "lucide-react";

const services = [
  {
    title: "Company Establishment",
    icon: Landmark,
  },
  {
    title: "Legal Consulting",
    icon: Scale,
  },
  {
    title: "Tax Consulting",
    icon: FileText,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center bg-tertiary"
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[16px] font-semibold text-secondary">What We Do</p>
          <h1 className="font-heading font-bold text-3xl text-primary">
            Our Services
          </h1>
        </div>

        {/* Services */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center gap-5 px-5 bg-primary rounded-xl shadow-xl w-60 h-50"
              >
                <Icon className="w-15 h-15 text-white" />

                <h3 className="font-semibold text-xl font-heading text-white text-center">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
