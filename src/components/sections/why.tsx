import { UsersRound, ShieldCheck, ScrollText, Zap } from "lucide-react";

const why = [
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of experts with extensive experience in legal and business matters.",
    icon: UsersRound,
  },
  {
    title: "Confidential & Reliable",
    description:
      "Your business & information are always protected with the highest confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description:
      "We ensure clarity in every step so you always know the progress of your case.",
    icon: ScrollText,
  },
  {
    title: "Efficient Solutions",
    description:
      "We value your time & provide quick, accurate, & effective solutions.",
    icon: Zap,
  },
];

export default function Why() {
  return (
    <section className="w-full py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div className="flex flex-col gap-4 text-center xl:text-left">
              <p className="text-base font-semibold text-secondary">
                Why Choose Us
              </p>

              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-primary leading-tight max-w-xl mx-auto xl:mx-0">
                Your Trusted Partner
                <br />
                for Business Success
              </h2>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {why.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[350px] md:h-[450px] xl:h-[620px] overflow-visible">
            {/* Gradient */}
            <div className="absolute inset-y-0 left-0 w-44 lg:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />

            {/* Image */}
            <img
              src="/assets/image/image4.jpg"
              alt="Office Room"
              className="
            w-full
            h-full
            object-cover
            object-center
            rounded-2xl
            xl:absolute
            xl:right-[-70px]
            xl:top-0
            xl:w-[115%]
          "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
