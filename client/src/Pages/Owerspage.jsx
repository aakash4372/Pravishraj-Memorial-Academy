import React, { useState, useEffect } from "react";
import { GraduationCap, Landmark, Dumbbell, Network, Users, Award, AlertCircle } from "lucide-react";
import CountUp from "react-countup";

const counterFeatures = [
  {
    icon: <Users size={32} className="text-black" />,
    number: 4000,
    title: "Students Enrolled",
    prefix: "+",
  },
  {
    icon: <Award size={32} className="text-black" />,
    number: 3500,
    title: "Graduated",
    prefix: "+",
  },
];

const carouselContent = [
  {
    title: "Meet Our Founder",
    subtitle: "M Natarajan, M.A., CAIIB.,",
    description:
      "With over 30 years of administrative experience and 15+ years academic experience, Mr. M Natarjan envisioned an institution that provides accessible and flexible education to underserved learners. His passion for community upliftment and student success has been the driving force behind Pravishraj Memorial Academy Trust's continued growth and credibility.",
    buttonText: null,
    leftImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Meet Our Co-Founder",
    subtitle: "A. Thiyagarajan, MBA (HR)",
    description:
      "A passionate educator and academic coordinator with over 10 years of experience in distance education management. She plays a key role in academic delivery and student support services.",
    buttonText: null,
    leftImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

const AdmissionSection = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentContent = carouselContent[currentContentIndex];

  return (
    <div className="max-w-7xl mb-30 mx-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] bg-[#efefef] overflow-hidden">

      {/* Number Counters Section */}
      <div className="flex justify-between items-center py-6 border-b border-gray-200 flex-wrap bg-gray-50">
        {counterFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center flex-1 p-4 min-w-[120px]"
          >
            {feature.icon && feature.icon}

            {feature.number ? (
              <h3 className="font-bold text-3xl text-blue-900 mt-2">
                <CountUp end={feature.number} duration={2.75} enableScrollSpy={true} suffix={feature.prefix} />
              </h3>
            ) : feature.highlight ? (
              <h3 className="font-bold text-xl text-green-700 mt-2">
                {feature.title}
              </h3>
            ) : null}

            {feature.number && (
              <p className="text-sm text-gray-500">{feature.title}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-[#234159] text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <AlertCircle size={20} className="text-yellow-400 mr-2" />
          <span className="text-white font-semibold">
            Working across Pondicherry and Tamilnadu in private and government jobs
          </span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={currentContent.leftImage}
            alt="Profile"
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1673971700988-346588461fa7?q=80&w=1171&auto=format&fit=crop"
            alt={currentContent.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-[#234159] opacity-80"></div>
          <div className="relative p-10 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">{currentContent.title}</h2>
            <p className="text-green-400 font-semibold mb-4">{currentContent.subtitle}</p>
            <p className="mb-6 leading-relaxed max-w-md">{currentContent.description}</p>
            {currentContent.buttonText && (
              <button className="bg-green-600 hover:bg-green-700 transition duration-300 font-semibold py-2 px-6 rounded-lg w-fit">
                {currentContent.buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
