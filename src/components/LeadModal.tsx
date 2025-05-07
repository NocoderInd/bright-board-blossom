
import { useState } from "react";
import { X } from "lucide-react";
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
    phoneNumber: ""
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
    if (!formData.businessName || !formData.fullName || !formData.phoneNumber) {
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
          className="absolute right-4 top-4 text-[#9F9EA1] hover:text-[#8E9196] transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#8E9196]">Get Your Custom Quote</h2>
            <p className="text-[#9F9EA1]">
              Fill out this quick form and we'll create a personalized signage quote for your business.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-[#8E9196] mb-1">
                Business Name
              </label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full border-[#D3E4FD]"
                placeholder="Your Business Name"
              />
            </div>
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#8E9196] mb-1">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-[#D3E4FD]"
                placeholder="Your Full Name"
              />
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#8E9196] mb-1">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-[#D3E4FD]"
                placeholder="Your Phone Number"
                type="tel"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#FDE1D3] hover:bg-[#EDC1B3] text-[#8E9196] py-6"
            >
              Get My Quote
            </Button>
          </form>
          
          <p className="text-xs text-center text-[#9F9EA1] mt-4">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LeadModal;
