import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: "Jiya Gudhka",
    position: "Chairperson",
    image: "src/resc/Core_Pics/jiya.jpg"
  },
  {
    name: "Shaurya Singh",
    position: "Vice-Chairperson",
    image: "src/resc/Core_Pics/shaurya.jpg"
  },
  {
    name: "Siddharth Potdar",
    position: "Vice-Chairperson",
    image: "src/resc/Core_Pics/siddharth.jpg"
  },
  {
    name: "Tejas Soni",
    position: "Events Executive",
    image: "src/resc/Core_Pics/tejas.HEIC"
  },
  {
    name: "Anjali Bobade",
    position: "Finance Head",
    image: "src/resc/Core_Pics/anjali.jpg"
  },
  {
    name: "Naimish Shah",
    position: "Technical Head",
    image: "src/resc/Core_Pics/naimish.jpg"
  },
  {
    name: "Gunjan Daiya",
    position: "Creatives Head",
    image: "src/resc/Core_Pics/gunjan.png"
  },
  {
    name: "Nethra Nayak",
    position: "Operation Head",
    image: "src/resc/Core_Pics/nethra.jpeg"
  },
  {
    name: "Debjit Ghosal",
    position: "Marketing Head",
    image: "src/resc/Core_Pics/debjit.jpg"
  },
  {
    name: "Mansi Khatri",
    position: "Marketing Head",
    image: "src/resc/Core_Pics/mansi.jpg"
  },
  {
    name: "Sophie Martin",
    position: "Marketing Head",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Tisha Parmer",
    position: "Social Media Head",
    image: "src/resc/Core_Pics/tisha.jpg"
  },
  {
    name: "Kalhan Bhatt",
    position: "Pr Head",
    image: "src/resc/Core_Pics/kalhan.jpg"
  },
  {
    name: "Kshitij Agarwal",
    position: "Pr Head",
    image: "src/resc/Core_Pics/kshitij.jpg"
  }
];

export function TeamGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing together the brightest minds in technology to transform your ideas into reality
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}