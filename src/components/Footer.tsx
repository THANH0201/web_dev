import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900">
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
              <span>Vision Clinic</span>
            </a>
            <p className="text-blue-100 text-sm">
              Providing exceptional eye care services to the community for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#news" className="text-blue-100 hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Eye Examinations</li>
              <li>Eyeglasses & Frames</li>
              <li>Contact Lenses</li>
              <li>LASIK Surgery</li>
              <li>Disease Management</li>
              <li>Pediatric Eye Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>123 Vision Street</li>
              <li>Medical City, MC 12345</li>
              <li className="pt-2">(555) 123-4567</li>
              <li>info@visionclinic.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-100">
          <p>&copy; 2025 Vision Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
