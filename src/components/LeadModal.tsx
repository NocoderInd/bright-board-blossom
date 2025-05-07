
import { useState } from "react";
import { X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface LeadModalProps {
  onClose: () => void;
}

const LeadModal = ({ onClose }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    phoneNumber: "",
    location: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.businessName || !formData.fullName || !formData.phoneNumber || !formData.location) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to get your quote.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form (in a real app, this would send data to a backend)
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Thank you!",
      description: "We'll be in touch with your custom quote shortly.",
    });
    
    // Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#4338CA]">Get Your Custom Quote</h2>
            <p className="text-[#4B5563]">
              Fill out this quick form and we'll create a personalized signage quote for your business.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-[#4B5563] mb-1">
                Business Name
              </label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full border-[#6366F1] focus:ring-[#6366F1]"
                placeholder="Your Business Name"
              />
            </div>
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#4B5563] mb-1">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-[#6366F1] focus:ring-[#6366F1]"
                placeholder="Your Full Name"
              />
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#4B5563] mb-1">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-[#6366F1] focus:ring-[#6366F1]"
                placeholder="Your Phone Number"
                type="tel"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#4B5563] mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-10 border-[#6366F1] focus:ring-[#6366F1]"
                  placeholder="Your Business Location"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#FCD34D] hover:bg-[#F59E0B] text-[#4B5563] py-6 font-medium"
            >
              Get My Quote
            </Button>
          </form>
          
          <p className="text-xs text-center text-[#6B7280] mt-4">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LeadModal;
