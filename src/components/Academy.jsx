import { motion } from "framer-motion";

const trainings = [
  {
    image: "./card-assets/bootcamp.jpeg",
    title: "Basic Naval Training",
    description:
      "A rigorous bootcamp focusing on physical fitness, mental resilience, seamanship, and naval traditions. Cadets master the fundamentals of discipline, teamwork, and maritime safety.",
  },
  {
    image: "./card-assets/combat.jpg",
    title: "Advanced Combat Operations",
    description:
      "Intensive hands-on training in tactical warfare, surveillance, and modern defense systems. Cadets learn to operate advanced weaponry, coordinate missions, and respond to real-world scenarios.",
  },
  {
    image: "./card-assets/submarine.jpeg",
    title: "Submarine Navigation",
    description:
      "Specialized instruction in deepwater vessel operation, stealth maneuvers, sonar navigation, and underwater communication. Prepares cadets for the unique challenges of submarine service.",
  },
  {
    image: "./card-assets/leadership.jpg",
    title: "Leadership & Command",
    description:
      "Designed for aspiring officers, this program hones leadership, strategic planning, and mission management skills. Cadets engage in simulations and real-life exercises to develop decision-making under pressure.",
  },
];

const Academy = () => {
  return (
    <div
      className="scroll-mt-24 w-full px-6 py-20 md:px-24 lg:px-40 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900"
      id="academy"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Navy Academy{" "}
          <span className="underline underline-offset-8 decoration-4 decoration-blue-500">
            Programs
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mt-4 text-lg">
          Shaping tomorrow’s naval leaders through world-class training,
          discipline, and innovation. Our academy empowers cadets with the
          skills, knowledge, and values essential for excellence at sea and
          beyond.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-10">
        {trainings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3 h-[180px]">
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue-700">{item.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
