import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Star, Users, Lightbulb, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { useState, useEffect } from 'react';

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Director, Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    topic: "Future of AI in Innovation"
  },
  {
    name: "Michael Chen",
    role: "Chief Innovation Officer, Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    topic: "Digital Transformation in 2024"
  },
  {
    name: "Dr. Emily Williams",
    role: "Founder & CEO, TechVentures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
    topic: "Startup Ecosystem Development"
  }
];

function EventCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="relative w-full max-w-lg mx-auto"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10"
      >
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <div className="text-purple-400 text-sm">Date</div>
              <div className="font-semibold">March 15-16, 2024</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-purple-400 text-sm">Time</div>
              <div className="font-semibold">9:00 AM - 5:00 PM</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <div className="text-purple-400 text-sm">Venue</div>
              <div className="font-semibold">SPIT Campus</div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
      </motion.div>
    </motion.div>
  );
}

export function ApexSymposium() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0F] via-transparent to-[#0A0B0F] z-10" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
          </motion.div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-8xl font-bold mb-6 leading-tight">
              Apex
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {" "}Symposium
              </span>
            </h1>
            <p className="text-2xl text-gray-400 mb-12">
              Where Innovation Meets Future Technology
            </p>

            <EventCard />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Link
                to="/register"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl text-xl font-semibold overflow-hidden"
              >
                <span className="relative z-10">Register Now</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Glowing orb effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
      </section>

      {/* Keynote Speakers Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Keynote Speakers</h2>
            <p className="text-xl text-gray-400">Learn from industry leaders and innovators</p>
          </motion.div>

          <div className="relative h-[600px]">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentSpeaker === index ? 1 : 0,
                  scale: currentSpeaker === index ? 1 : 0.8,
                  x: currentSpeaker === index ? 0 : (index < currentSpeaker ? -100 : 100)
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${currentSpeaker === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold mb-2">{speaker.name}</h3>
                      <p className="text-xl text-purple-400 mb-4">{speaker.role}</p>
                      <p className="text-gray-400 text-lg">Speaking on: {speaker.topic}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpeaker(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSpeaker === index
                    ? 'bg-purple-500'
                    : 'bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful and Extensive</h2>
            <p className="text-xl text-gray-400">Experience the future of technology and innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Feature {item}</h3>
                  <p className="text-gray-400">
                    Experience cutting-edge technology and innovation with our comprehensive platform.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
            <p className="text-xl text-gray-400">Journey through our two-day innovation summit</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[1, 2].map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-blue-500/5" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-8">Day {day}</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative pl-8 border-l-2 border-purple-500/30"
                      >
                        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-sm text-purple-400">9:00 AM</span>
                        <h4 className="text-lg font-semibold mb-2">Session {item}</h4>
                        <p className="text-gray-400">
                          Discover the latest innovations and technologies shaping our future.
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}