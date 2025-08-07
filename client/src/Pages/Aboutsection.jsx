import React from "react";
import { BookOpen, Globe, GraduationCap, Building } from "lucide-react";
import Logo from "@/assets/img/logo.png";
import Bg from "@/assets/img/about-bg.jpg";
import Alagappa from "@/assets/img/Alagappa.png";
import bharathidasan from "@/assets/img/bharathidasan.png";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-[#1b2945] font-sans text-white">
      <header
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row lg:space-x-12 max-w-7xl mx-auto">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={Logo}
                alt="Pravishraj Memorial Academy"
                className="w-16 h-16"
              />
              <div className="text-xl font-bold text-[#f5f5f5] leading-tight">
                <span className="block text-xl">Pravishraj</span>
                <span className="block text-xl">Memorial Academy</span>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-[#51be78] mb-4 lg:mb-0">
              About Our University
            </h1>
          </div>

          <div className="lg:w-2/3">
            <p className="text-base font-medium md:text-lg mb-4 leading-relaxed max-w-3xl">
              We are one of the largest, most diverse universities in the USA
              with over 90,000 students in USA, and a further 30,000 studying
              across 180 countries for Kingster University.
            </p>
            <p className="text-base font-medium md:text-lg mb-8 leading-relaxed max-w-3xl">
              Kingster University was established by John Smith in 1920 for the
              public benefit and it is recognized globally. Throughout our great
              history, Kingster has offered access to a wide range of academic
              opportunities. As a world leader in higher education, the
              University has pioneered change in the sector.
            </p>
            <a
              href="#"
              className="group flex items-center text-green-400 font-semibold text-lg transition-colors duration-300 hover:text-green-300"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

     <section className="bg-gradient-to-br from-[#1b2945] to-[#2c3e50] py-20 px-8 md:px-16 lg:px-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-pattern opacity-10"></div>
   <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[white]">
          University Tie-ups
        </h2>
      </div>
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
    {/* Alagappa University Card */}
    <div className="bg-[#253248] border-amber-100 border rounded-xl shadow-2xl p-8 transform transition-all  hover:shadow-3xl">
      <div className="flex items-center mb-6">
        <img
          src={Alagappa}
          alt="Alagappa University Logo"
          className="w-24 h-24 object-contain mr-6 rounded-lg"
        />
        <h3 className="text-3xl font-bold text-green-400">
          Alagappa University
        </h3>
      </div>
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          A state university with prestigious{" "}
          <strong className="text-white font-bold">"A++" Grade by NAAC</strong>, 
          recognized by UGC for its exceptional academic standards and comprehensive 
          distance education programs.
        </p>
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-3">
            Academic Offerings
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Undergraduate & Postgraduate Degrees
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Specialized Diploma & Certificate Courses
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bharathidasan University Card */}
    <div className="bg-[#253248] border-amber-100 border rounded-xl shadow-2xl p-8 transform transition-all  hover:shadow-3xl">
      <div className="flex items-center  mb-6">
        <img
          src={bharathidasan}
          alt="Bharathidasan University Logo"
          className="w-24 h-24 object-contain mr-6 rounded-lg"
        />
        <h3 className="text-3xl font-bold text-green-400">
          Bharathidasan University
        </h3>
      </div>
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          A leading academic institution with{" "}
          <strong className="text-white font-bold">NAAC A++ Accreditation</strong>, 
          delivering innovative and learner-centric distance education with 
          comprehensive support and modern learning approaches.
        </p>
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-3">
            Academic Domains
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Undergraduate & Postgraduate in Humanities
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Science & Arts Programs
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Aboutus;
