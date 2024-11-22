import { useState } from "react";
import { Home, Projector, Book, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import profile from '../../assets/picture1.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { icon: Home, label: "Home", key: "home", path: "/" },
    { icon: Projector, label: "Projects", key: "projects", path: "/projects" },
    // { icon: User, label: "About", key: "about",path:'/about' },
    { icon: Book, label: "Blog", key: "blog",path:'/blog' },
    { icon: Book, label: "resume", key: "resume",path:'/resume' },
  ];
  return (
    <div className="relative">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden text-white bg-gray-800 p-2 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Responsive Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 
          bg-customBg1 text-white 
          transition-transform duration-300 ease-in-out
          transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          z-40
          shadow-lg
        `}
      >
        {/* Profile Section */}
        <div className="p-6 text-center">
          <div className="mx-auto w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gray-600">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">Mohammad Zajbe</h2>
          <p className="text-gray-400">Full Stack Web Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.key}>
              <button
                // key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  setIsOpen(false); // Close sidebar on mobile after selection
                }}
                className={`
                w-full flex items-center p-4 hover:bg-customBg_active transition
                ${
                  activeSection === item.key
                    ? "bg-customBg_active text-white"
                    : "text-gray-300"
                }
              `}
              >
                <item.icon className="mr-4" />
                {item.label}
              </button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
