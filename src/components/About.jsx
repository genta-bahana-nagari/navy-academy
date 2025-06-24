import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  const stats = [
    { number: 70, suffix: "+", label: "Years of glorious service" },
    { number: 300000, suffix: "+", label: "Personnel ready" },
    { number: 150, suffix: "+", label: "Surface and underwater assets" },
    { number: 40, suffix: "+", label: "Battles and operations" },
  ];

  const descriptions = [
    "Since its establishment, the US Navy has played a vital role in maintaining national and global security. Our forces are trained, equipped, and ready for both peace and conflict. Through strong collaboration and cutting-edge innovation, we ensure unmatched readiness and excellence at sea.",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-4 sm:px-6 md:px-16 lg:px-32 py-12 flex flex-col items-center w-full"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        About{" "}
        <span className="underline underline-offset-4 decoration-black font-light">
          Our Service
        </span>
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Providing security, readiness, and freedom for the state and beyond.
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Image */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ea/CVN80-graphic-49211457_o.jpg"
          alt="Aircraft Carrier CVN-80"
          className="w-full md:w-1/2 max-w-2xl rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Stats & Description */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-6 mb-8">
            {stats.map(({ number, suffix, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start"
              >
                <p className="text-3xl sm:text-4xl font-semibold text-blue-600">
                  <CountUp
                    end={number}
                    duration={2}
                    separator=","
                    suffix={suffix}
                  />
                </p>
                <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Descriptions */}
          <div className="space-y-4 text-justify md:text-justify text-base text-gray-700 leading-relaxed mb-8">
            {descriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 text-base sm:text-lg"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
