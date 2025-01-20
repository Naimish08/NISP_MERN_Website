import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

export function TeamMember({ name, position, image }: TeamMemberProps) {
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
            href="naimish.shah.23@spit.ac.in"
            className="rounded-full bg-white p-2 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}