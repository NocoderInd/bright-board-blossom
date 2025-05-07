
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#8E9196]">SignCraft</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300">
              Services
            </a>
            <a href="#testimonials" className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300">
              Testimonials
            </a>
            <a href="#gallery" className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-[#D3E4FD] hover:bg-[#C3D4ED] text-[#8E9196]">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#9F9EA1]"
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
                className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#gallery" 
                className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#contact" 
                className="text-[#9F9EA1] hover:text-[#8E9196] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-[#D3E4FD] hover:bg-[#C3D4ED] text-[#8E9196] w-full">
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
