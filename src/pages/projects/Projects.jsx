import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/portfolio");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects");
        setLoading(false);
        console.log(err);
        
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  console.log(projects);

  return (
    <div className="min-h-screen bg-gradient-to-b from-customBg1 to-customBg2 text-gray-100 flex justify-center item-center ml-64">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Header */}
    <div className="text-center mb-12">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Explore my latest work and side projects showcasing my skills and experience.
      </motion.p>
    </div>

    {/* Projects Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {projects.data.map((project, index) => (
        <motion.div
          key={index}
          className="bg-customBg1 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 flex flex-col"
          whileHover={{ scale: 1.03 }}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Project+Image";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold text-gray-100 mb-3 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-customBg_active text-blue-100 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2 bg-customBg_active text-white rounded-lg hover:bg-customBg_active transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Empty State */}
    {projects.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No projects available at the moment.</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Projects;
