import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/PageLayout';

const events = [
  {
    id: 1,
    title: "Startup Weekend",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    date: "2024-02-15",
    slug: "startup-weekend"
  },
  {
    id: 2,
    title: "Innovation Summit",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1000&q=80",
    date: "2024-03-20",
    slug: "innovation-summit"
  },
  {
    id: 3,
    title: "Tech Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-10",
    slug: "tech-hackathon"
  }
];

export function Events() {
  return (
    <PageLayout 
      title="Our Events" 
      subtitle="Join us in shaping the future of innovation"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link to={`/events/${event.slug}`} key={event.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}