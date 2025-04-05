import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto px-6 py-16 md:px-20 lg:px-32 w-full bg-white"
      id="About"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-black font-light">
          Our Service
        </span>
      </h1>
      <p className="text-gray-500 text-center max-w-xl mb-12">
        Providing security, readiness, and freedom for the state and beyond.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 w-full">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ea/CVN80-graphic-49211457_o.jpg"
          alt="Aircraft Carrier"
          className="w-full sm:w-2/3 md:w-1/2 max-w-2xl rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-700 w-full">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full mb-10">
            {[
              { number: 70, suffix: "+", label: "Years of glorious service" },
              { number: 300000, suffix: "+", label: "Personnel ready" },
              { number: 150, suffix: "+", label: "Surface and underwater assets" },
              { number: 40, suffix: "+", label: "Battles and operations" },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-semibold text-blue-600">
                  <CountUp
                    end={item.number}
                    duration={2}
                    separator=","
                    suffix={item.suffix}
                  />
                </p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mb-8 text-base leading-relaxed max-w-2xl text-center md:text-left">
            Since its establishment, the US Navy has played a vital role in
            maintaining national and global security. In times of peace and
            conflict, our forces are trained, equipped, and ready. Through
            strong collaboration and cutting-edge innovation, we ensure
            unmatched readiness and excellence at sea.
          </p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition duration-300"
      >
        Learn More
      </motion.button>
    </div>
  );
};

export default About;