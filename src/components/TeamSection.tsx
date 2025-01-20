import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';

export function TeamSection() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80"
              alt="Our Team"
              className="w-full h-[500px] object-cover rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TeamMember
              name="Sarah Johnson"
              position="CEO"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember
              name="Michael Chen"
              position="CTO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember
              name="Emily Williams"
              position="Design Director"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember
              name="David Kim"
              position="Lead Developer"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
}