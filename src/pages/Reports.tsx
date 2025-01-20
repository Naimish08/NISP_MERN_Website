import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

const reports = [
  {
    title: "Annual Innovation Report 2023",
    description: "Comprehensive overview of innovation initiatives and outcomes",
    url: "/reports/annual-2023.pdf"
  },
  {
    title: "Startup Impact Analysis Q4 2023",
    description: "Quarterly analysis of startup growth and metrics",
    url: "/reports/q4-2023.pdf"
  },
  {
    title: "Innovation Metrics Dashboard",
    description: "Key performance indicators and success metrics",
    url: "/reports/metrics-2023.pdf"
  }
];

export function Reports() {
  return (
    <PageLayout 
      title="Reports & Documents" 
      subtitle="Insights and analysis from our innovation ecosystem"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p className="text-gray-600">{report.description}</p>
                </div>
                <a
                  href={report.url}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  download
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}