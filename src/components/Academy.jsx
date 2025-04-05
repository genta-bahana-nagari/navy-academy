import React from 'react'
import { motion } from 'framer-motion'

const trainings = [
  {
    image: "Basic Naval Training",
    title: "Basic Naval Training",
    description:
      "Introductory bootcamp for physical, mental, and strategic preparedness.",
  },
  {
    image: "Basic Naval Training",
    title: "Advanced Combat Operations",
    description:
      "Hands-on experience with tactical warfare, surveillance, and defense systems.",
  },
  {
    image: "Basic Naval Training",
    title: "Submarine Navigation",
    description:
      "Deepwater vessel operation, stealth strategy, and sonar-based coordination.",
  },
  {
    image: "Basic Naval Training",
    title: "Leadership & Command",
    description:
      "Designed for future officers to hone leadership and mission management skills.",
  },
];

const Academy = () => {
  return (
    <div
      className="w-full px-6 py-16 md:px-20 lg:px-32 bg-gray-100 text-gray-800"
      id="Academy"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Academy{" "}
          <span className="underline underline-offset-4 decoration-blue-500">
            Program
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-2">
          Building future leaders of naval strength through discipline,
          excellence, and innovation.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {trainings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-xl font-semibold text-blue-600 mb-2">
              {item.image}
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Academy