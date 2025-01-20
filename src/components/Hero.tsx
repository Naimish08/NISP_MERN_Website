import { motion } from 'framer-motion';
// @ts-expect-error
import GradientText from './GradientText/GradientText.jsx'
export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl font-bold mb-6 text-white leading-tight">

              <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class blur-0"
                  style={{ y: 0 }}
              >
                National Innovation Startup Policy
              </GradientText>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                {" "}SPIT
              </span>
            </h1>
            <p className="text-2xl text-gray-300">
              Promoting the culture of Innovation and Startup
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}