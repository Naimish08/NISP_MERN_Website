import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Weekend",
    date: "Feb 15, 2024",
    description: "54-hour weekend event for startup enthusiasts",
    slug: "startup-weekend"
  },
  {
    id: 2,
    title: "Innovation Summit",
    date: "Mar 20, 2024",
    description: "Annual gathering of innovators and industry leaders",
    slug: "innovation-summit"
  },
  {
    id: 3,
    title: "Tech Hackathon",
    date: "Apr 10, 2024",
    description: "24-hour coding challenge for developers",
    slug: "tech-hackathon"
  }
];

export function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us in our upcoming innovation and entrepreneurship events</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-indigo-600 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  to={`/events/${event.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}