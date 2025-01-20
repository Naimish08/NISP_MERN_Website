import { motion } from 'framer-motion';
import { Link2, Target, Atom } from 'lucide-react';

const infoCards = [
  {
    title: "Aim",
    description: "NISP aims to create an environment that nurtures innovation and entrepreneurship in the country, with the goal of driving economic growth and development",
    icon: <Link2 className="w-8 h-8" />
  },
  {
    title: "Mission",
    description: "The National Innovation and Startup Policy in India aims to create an ecosystem for startups to thrive, driving economic growth and job creation",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Overview",
    description: "India's National Innovation and Startup Policy fosters entrepreneurship, innovation, and economic growth, promoting India as a global hub for startups",
    icon: <Atom className="w-8 h-8" />
  }
];

export function NISPInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          NISP SPIT
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-white rounded-full p-4 text-indigo-600">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}