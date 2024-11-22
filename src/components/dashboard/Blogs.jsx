import { useState } from "react";


const Blogs = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tech: [],
      });
      const [currentTag, setCurrentTag] = useState("");
      const [images, setImages] = useState([]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleAddTag = () => {
        if (currentTag.trim() && !formData.tech.includes(currentTag)) {
          setFormData((prev) => ({
            ...prev,
            tech: [...prev.tech, currentTag],
          }));
          setCurrentTag("");
        }
      };
    
      const handleRemoveTag = (tagToRemove) => {
        setFormData((prev) => ({
          ...prev,
          tech: prev.tech.filter((tag) => tag !== tagToRemove),
        }));
      };
    
      const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages((prev) => [...prev, ...files]);
      };
    
      const handleRemoveImage = (indexToRemove) => {
        setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
    
        // Add text fields
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formData.tech.forEach((tag) => formDataToSend.append("tech", tag));
    
        // Add images
        images.forEach((image) => formDataToSend.append("images", image));
    
        try {
          const response = await fetch("http://localhost:5000/api/portfolio/post", {
            method: "POST",
            body: formDataToSend,
          });
    
          if (response.ok) {
            alert("Blog posted successfully!");
            // Reset form
            setFormData({ title: "", description: "", tech: [] });
            setImages([]);
          } else {
            alert("Failed to post the blog.");
          }
        } catch (error) {
          console.error("Error posting blog:", error);
          alert("An error occurred while posting the blog.");
        }
      };
    
    return (
        <div>
        <h2 className="text-xl font-semibold mb-4">Add New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter blog title"
            />
          </div>
  
          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border rounded"
              placeholder="Write your blog content..."
            />
          </div>
  
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Tech Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">Tech Stack</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
                placeholder="Add a technology"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tech.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post Blog
          </button>
        </form>
      </div>
    );
};

export default Blogs;