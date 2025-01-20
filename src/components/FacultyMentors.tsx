import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const facultyMembers = [
  {
    name: "Dr. Bhalchandra Chaudhari",
    position: "Head of Institute",
    image: "/faculty/bhalchandra.jpg"
  },
  {
    name: "Dr. Kiran Talele",
    position: "Dean of Student Affairs",
    image: "/faculty/kiran.jpg"
  },
  {
    name: "Dr. Aarti Karande",
    position: "Faculty Chair/Mentor",
    image: "/faculty/aarti.jpg"
  }
];

function FacultyMember({ name, position, image }: { name: string; position: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="rounded-full bg-white p-2 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="rounded-full bg-white p-2 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export function FacultyMentors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Faculty Mentors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished faculty members guiding the next generation of innovators
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FacultyMember {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}