import React from "react";
import { motion } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";

const features = [
  {
    icon: TbTargetArrow,
    title: "Our Mission",
    description:
      "To make quality higher education accessible, flexible, and affordable to learners from all walks of life through recognized distance learning programs.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: FaRegLightbulb,
    title: "Our Vision",
    description:
      "To be a trusted center of academic excellence, fostering personal growth and professional success through inclusive and innovative learning platforms.",
    color: "from-blue-400 to-blue-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const MissionVision = () => {
  return (
    <section className="bg-[#efefef] py-20 px-4 md:px-10">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b245c] whitespace-nowrap">
            Mission & Vision
          </h2>
          <div className="flex-1 h-[2px] bg-gray-300 ml-4" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`bg-gradient-to-br ${feature.color} text-white p-3 rounded-full shadow-md`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MissionVision;
