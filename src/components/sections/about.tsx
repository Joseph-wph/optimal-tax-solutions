export default function About() {
  return (
    <section
      id="about"
      className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        {/* Text */}
        <div className="flex flex-col justify-center items-center gap-5 px-5">
          <p className="text-[16px] font-semibold text-secondary">Who We Are</p>
          <h1 className="font-heading font-bold text-3xl text-primary">
            About Us
          </h1>
          <p className="leading-loose lg:w-4xl text-center">
            OPTIMAL TAX SOLUTIONS is a tax consulting services brand focused on
            helping businesses and individuals optimize their tax management in
            a professional, strategic, and reliable manner. This brand offers a
            modern, professional approach, and is oriented towards client
            business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
