import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/portfolio/blog");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch blogs.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

    return (
        <div className="min-h-screen bg-customBg2 text-gray-100  ml-64">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>

        {loading ? (
          <div className="text-center text-gray-400">Loading blogs...</div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Blog Titles Section */}
            <div className="md:w-1/3 bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Blog Posts
              </h2>
              <ul className="space-y-2">
                {blogs.data.map((blog) => (
                  <li
                    key={blog._id}
                    className={`cursor-pointer p-2 rounded-lg transition ${
                      selectedBlog?._id === blog._id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => setSelectedBlog(blog)}
                  >
                    {blog.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Details Section */}
            <div className="md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-md">
              {selectedBlog ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Published on {new Date(selectedBlog.createdAt).toLocaleDateString()}
                  </p>
                  <p className="leading-relaxed mb-4">{selectedBlog.description}</p>

                  {selectedBlog.images?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedBlog.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Blog ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <ul className="flex flex-wrap gap-2">
                      {selectedBlog.tech.map((tag, index) => (
                        <li
                          key={index}
                          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">Select a blog to view details.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default Blogs;