import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Hardcoded credentials
      const validEmail = "dashboard@gmail.com";
      const validPassword = "12345";
  
      if (email === validEmail && password === validPassword) {
        // Save authentication state (localStorage or context)
        localStorage.setItem("isAuthenticated", "true");
        navigate("/zdashboard"); // Redirect to dashboard
      } else {
        setError("Invalid email or password");
      }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
};

export default LoginPage;