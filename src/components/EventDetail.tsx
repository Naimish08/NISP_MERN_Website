import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const eventDetails = {
  'startup-weekend': {
    title: "Startup Weekend",
    date: "2024-02-15",
    description: "A 54-hour weekend event where developers, designers, marketers, product managers, and startup enthusiasts come together to share ideas, form teams, build products, and launch startups!",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=1000&q=80"
    ],
    schedule: [
      { time: "Day 1", activity: "Team Formation & Ideation" },
      { time: "Day 2", activity: "Building & Mentoring" },
      { time: "Day 3", activity: "Presentation & Awards" }
    ]
  },
  // Add more event details as needed
};

export function EventDetail() {
  const { slug } = useParams();
  const event = eventDetails[slug as keyof typeof eventDetails];

  if (!event) return <div>Event not found</div>;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{new Date(event.date).toLocaleDateString()}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {event.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="aspect-video rounded-lg overflow-hidden"
              >
                <img src={image} alt={`${event.title} ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
            <p className="text-gray-700 mb-8">{event.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              {event.schedule.map((item, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-semibold">{item.time}</h3>
                  <p className="text-gray-600">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}