import { Card } from './Card';
import { Rocket, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Innovation"
            description="Pushing boundaries with cutting-edge solutions and advanced technologies"
            icon={<Rocket className="w-6 h-6 text-indigo-600" />}
          />
          <Card
            title="Strategy"
            description="Data-driven approaches for optimal results and sustainable growth"
            icon={<Target className="w-6 h-6 text-indigo-600" />}
          />
          <Card
            title="Execution"
            description="Flawless delivery of your vision with precision and excellence"
            icon={<Zap className="w-6 h-6 text-indigo-600" />}
          />
        </div>
      </div>
    </section>
  );
}