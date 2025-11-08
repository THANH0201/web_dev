import { useState, useEffect } from "react";
import { Phone, Clock, MapPin, LogIn, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Check for logged in user
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Listen for storage changes
    const handleStorageChange = () => {
      const user = localStorage.getItem("currentUser");
      setCurrentUser(user ? JSON.parse(user) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    // Also listen for custom event when user logs in
    window.addEventListener("userLogin", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userLogin", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.hash = "#home";
    window.location.reload();
  };

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Vision Street, Medical City</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {currentUser ? (
                <>
                  <a 
                    href={
                      currentUser.role === "doctor" 
                        ? "#doctor-dashboard" 
                        : currentUser.role === "admin" 
                        ? "#admin-dashboard" 
                        : "#account"
                    } 
                    className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Welcome, {currentUser.firstName}</span>
                  </a>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <a href="#login" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <span className="text-blue-900">Vision Clinic</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">
                News
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
              {currentUser?.role === "doctor" || currentUser?.role === "admin" ? (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.hash = currentUser.role === "doctor" ? "#doctor-dashboard" : "#admin-dashboard"}
                >
                  Dashboard
                </Button>
              ) : (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.hash = "#appointment"}
                >
                  Book An Appointment
                </Button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">
              News
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </a>
            {currentUser?.role === "doctor" || currentUser?.role === "admin" ? (
              <Button 
                className="bg-blue-600 hover:bg-blue-700 w-full"
                onClick={() => window.location.hash = currentUser.role === "doctor" ? "#doctor-dashboard" : "#admin-dashboard"}
              >
                Dashboard
              </Button>
            ) : (
              <Button 
                className="bg-blue-600 hover:bg-blue-700 w-full"
                onClick={() => window.location.hash = "#appointment"}
              >
                Book An Appointment
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
