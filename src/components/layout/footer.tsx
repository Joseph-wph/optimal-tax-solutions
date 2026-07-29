import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-full bg-primary text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <img
              src="/assets/logo/otsWhite.png"
              alt="Optimal Tax Solutions"
              className="w-52 lg:w-64"
            />

            <p className="max-w-sm text-sm leading-7 text-white/80">
              Professional legal and business consulting services for local and
              international companies.
            </p>
          </div>

          {/* Center */}
          <div className="flex md:justify-center lg:justify-center">
            <nav>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 font-semibold">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#testimonial"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 lg:justify-self-end">
            <h2 className="text-lg font-bold">Contact Us</h2>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 shrink-0 mt-1" />

              <p className="text-sm leading-6 break-all">
                cs.optimaltax@gmail.com
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 shrink-0 mt-1" />

              <p className="text-sm leading-6">
                Komplek Duta Harapan Indah Blok NN/6,
                <br />
                Penjaringan, Jakarta Utara
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-xs text-white/70">
            © 2026 Optimal Tax Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
