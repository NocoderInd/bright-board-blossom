
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">NBCSignboards</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-yellow-200 transition-colors duration-300">
              Services
            </a>
            <a href="#testimonials" className="text-white hover:text-yellow-200 transition-colors duration-300">
              Testimonials
            </a>
            <a href="#gallery" className="text-white hover:text-yellow-200 transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="text-white hover:text-yellow-200 transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-[#FCD34D] hover:bg-[#F59E0B] text-[#4B5563] font-medium">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="text-white hover:text-yellow-200 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-yellow-200 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#gallery" 
                className="text-white hover:text-yellow-200 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-yellow-200 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-[#FCD34D] hover:bg-[#F59E0B] text-[#4B5563] font-medium w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
