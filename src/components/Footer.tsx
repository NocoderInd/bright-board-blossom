
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-[#8E9196] mb-4">SignCraft</h3>
            <p className="text-[#9F9EA1] mb-6">
              Creating impactful signage solutions that help businesses shine and attract customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#9F9EA1] hover:text-[#8E9196]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-[#9F9EA1] hover:text-[#8E9196]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-[#9F9EA1] hover:text-[#8E9196]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#8E9196] mb-4">Contact Us</h3>
            <div className="flex items-center mb-3">
              <Mail className="text-[#D3E4FD] mr-3" size={20} />
              <span className="text-[#9F9EA1]">hello@signcraft.com</span>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="text-[#D3E4FD] mr-3" size={20} />
              <span className="text-[#9F9EA1]">(555) 123-4567</span>
            </div>
            <p className="text-[#9F9EA1]">
              123 Sign Street, <br />
              Design District, <br />
              Creativeville, CV 98765
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#8E9196] mb-4">Newsletter</h3>
            <p className="text-[#9F9EA1] mb-4">
              Subscribe to our newsletter for the latest industry trends and company updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="border-[#D3E4FD]" 
              />
              <Button className="bg-[#FDE1D3] hover:bg-[#EDC1B3] text-[#8E9196]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#F1F1F1] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#9F9EA1] text-sm mb-4 md:mb-0">
              © 2025 SignCraft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[#9F9EA1] hover:text-[#8E9196]">Privacy Policy</a>
              <a href="#" className="text-sm text-[#9F9EA1] hover:text-[#8E9196]">Terms of Service</a>
              <a href="#" className="text-sm text-[#9F9EA1] hover:text-[#8E9196]">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
