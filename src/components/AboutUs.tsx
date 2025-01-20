import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          ABOUT US
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">NISP</h3>
                <p className="text-gray-600">
                  The 'National Innovation and Start-up Policy 2019 for students and faculty in HEIs was launched by Hon'ble Minister of Education, Shri Ramesh Pokhriyal 'Nishank' on 11th September 2019 at AICTE, New Delhi.This policy intends to guide HEIs for promoting students' driven innovations & start-ups and to engage the students and faculty in innovation and start up activities in campus
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">NISP SPIT</h3>
                <p className="text-gray-600">
                  NISP SPIT aims to create a conducive environment for students to develop their entrepreneurial skills and launch successful startups. NISP Council at SPIT conduct various seminars and events on regular basis to motivate students and to provide them with exposure to the latest trends and best practices in the field of entrepreneurship and innovation
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/images/spit-building.jpg"
              alt="SPIT Building"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}