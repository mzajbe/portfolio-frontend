import { useState } from "react";
import { PlusCircle, X, Upload } from "lucide-react";
import Blogs from "../../components/dashboard/Blogs";

const ZDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projectTags, setProjectTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveDemoUrl: "",
    githubUrl: "",
  });
  const [images, setImages] = useState([]);

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !projectTags.includes(currentTag)) {
      setProjectTags([...projectTags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setProjectTags(projectTags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Handle file upload (add preview, upload to server, etc.)
      console.log("File selected:", file);
      setImages([...images, file]); // Store the file object
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append text fields
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("liveDemoUrl", formData.liveDemoUrl);
    formDataToSend.append("githubUrl", formData.githubUrl);

  
    // Append tags as a comma-separated string or multiple entries
    projectTags.forEach((tag) => formDataToSend.append("tech", tag));
    images.forEach((image) => {
      formDataToSend.append("itemImages", image);
    });
    try {
      const response = await fetch(
        "http://localhost:5000/api/portfolio/create",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        alert("Project added successfully!");
        // Reset form
        setFormData({
          title: "",
          description: "",
          liveDemoUrl: "",
          githubUrl: "",
        });
        setProjectTags([]);
        setImages([]);
      } else {
        alert("Failed to add project.");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("An error occurred while submitting the project.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Portfolio Dashboard
          </h1>
          
        </div>

        {/* Tab Navigation - Scrollable on mobile */}
        <div className="flex justify-center mb-6 border-b border-gray-200 overflow-x-auto">
          <div className="flex space-x-4">
            {["projects", "blogs", "skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Centered with responsive width */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
            {/* Projects Form */}
            {activeTab === "projects" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 text-center sm:text-left">
                  Add New Project
                </h2>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Image
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" // Keep this to make the input visible
                      // id="file-input"
                    />
                    <div className="flex flex-col items-center justify-center h-full">
                      <Upload className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter project title"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your project"
                  ></textarea>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tech Stack
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {projectTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 hover:text-blue-900"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add tech stack (e.g., React)"
                    />
                    <button
                      onClick={handleAddTag}
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 sm:w-auto"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Project Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Live Demo URL
                    </label>
                    <input
                      type="url"
                      name="liveDemoUrl"
                      value={formData.liveDemoUrl}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto"
                >
                  <PlusCircle className="h-5 w-5" />
                  Add Project
                </button>
              </form>
            )}

            {/* 2 */}
            {activeTab === "blogs" && <Blogs />}
            {/* 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZDashboard;
