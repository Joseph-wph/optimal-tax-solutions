export default function Hero() {
  const phoneNumber = "6281807597477";

  const message =
    "Hello Optimal Tax Solutions, I would like to ask about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
  return (
    <section
  id="home"
  className="w-full bg-primary py-16 lg:py-24"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

      {/* Left */}
      <div className="flex flex-col gap-8 text-white">

        <h1 className="font-heading font-bold text-4xl md:text-5xl xl:text-6xl leading-tight max-w-2xl">
          Optimizing Tax,
          <br />
          Enhancing Your Business
        </h1>

        <p className="text-base md:text-lg text-white/90 leading-8 max-w-xl">
          Helping your business grow with strategic tax solutions,
          professional guidance, and measurable results.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors duration-300 hover:bg-blue-500 hover:text-white"
        >
          Contact Us
        </a>

      </div>

      {/* Right */}
      <div className="flex justify-center">

        <div className="grid w-full max-w-xl grid-cols-2 gap-5">

          <img
            src="/assets/image/hero1.jpg"
            alt="Business Meeting"
            className="h-56 w-full rounded-2xl object-cover"
          />

          <img
            src="/assets/image/hero2.jpg"
            alt="Business Consulting"
            className="h-56 w-full rounded-2xl object-cover"
          />

          <img
            src="/assets/image/hero3.jpg"
            alt="Office Discussion"
            className="col-span-2 h-72 w-full rounded-2xl object-cover object-center"
          />

        </div>

      </div>

    </div>

  </div>
</section>
  );
}
