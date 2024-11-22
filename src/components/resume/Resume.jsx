import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
    const resumeLink = "https://drive.google.com/file/d/1r4S2JfDX8xJY6AVaTObLd4WuS5LsK5SS/view?usp=sharing";
    return (
        <section className="py-12 bg-customBg1 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Download My Resume
        </motion.h2>
        

        {/* Resume Button */}
        <motion.a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-customBg_active text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <Download className="h-5 w-5 mr-2" />
          Download Resume
        </motion.a>
      </div>
    </section>
    );
};

export default Resume;