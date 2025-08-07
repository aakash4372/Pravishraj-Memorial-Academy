import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/assets/img/logo.png";

const Footer = () => {
  const menuLinks = [
    { title: "Menu", links: ["Home", "About", "Courses"] },
    {
      title: "University Tie-ups",
      links: ["Alagappa University", "Bharathidasan University"],
    },
    {
      title: "Alagappa University",
      links: [
        {
          programs: [
            "UG Programs",
            "PG Programs",
            "M.B.A Groups",
            "Diploma Programs",
            "Certificate Programs",
          ],
        },
      ],
    },
    {
      title: "Bharathidasan University",
      links: [
        {
          programs: [
            "UG Programs",
            "PG Programs",
            "M.B.A Groups",
            "Diploma Programs",
            "Certificate Programs",
          ],
        },
      ],
    },
  ];

  return (
    <section className="bg-[#22324a] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left sm:text-left">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-32 h-14" />
              </div>
              <div className="text-xl font-bold text-left text-white leading-tight">
                <span className="block text-md">Pravishraj</span>
                <span className="block text-md">Memorial Academy</span>
              </div>
            </div>
            <div className="mt-4 max-w-sm">
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering developers with intuitive tools and resources to
                create stunning, user-friendly web experiences effortlessly.
              </p>
            </div>

            {/* Updated Connect With Us */}
            <h5 className="mt-8 lg:mt-10 mb-3 text-lg font-semibold tracking-wide">
              Connect With Us
            </h5>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="text-[#48b06c]" size={18} />
                <a href="tel:+919876543210" className="hover:text-[#48b06c]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-[#48b06c]" size={18} />
                <a href="mailto:info@pma.in" className="hover:text-[#48b06c]">
                  info@pma.in
                </a>
              </li>
              <li className="flex gap-3 items-start">
  <MapPin className="text-[#48b06c] min-w-[20px] mt-1" size={18} />
  <span className="text-sm md:text-base leading-relaxed">
    No. 27, 1st Cross, 1st Floor, Bharkath Nagar, M.G. Road,
    (Kaitheye Millath Arch Opp), Villupuram District,<br className="hidden md:block" />
    Tamil Nadu – 605104
  </span>
</li>

            </ul>
          </div>

          {/* Menu Columns */}
          {menuLinks.map((menu, index) => (
            <div key={index} className="lg:col-span-2">
              <h5 className="mb-3 text-lg font-semibold tracking-wide">
                {menu.title}
              </h5>
              <ul className="flex flex-col gap-2">
                {menu.links.map((link, linkIndex) => (
                  <React.Fragment key={`${index}-${linkIndex}`}>
                    {typeof link === "string" ? (
                      <li>
                        <a
                          href="#!"
                          className="text-gray-300 text-sm hover:text-[#48b06c] transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ) : (
                      link.programs?.map((program, progIndex) => (
                        <li key={`${index}-${linkIndex}-${progIndex}`}>
                          <span className="text-gray-300 text-sm">
                            {program}
                          </span>
                        </li>
                      ))
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-600" />

        {/* Footer Bottom */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://bmtechx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48b06c] font-semibold"
            >
              BMTechx.in
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
