
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    company: "Café Botanica",
    quote: "The storefront sign SignCraft designed for us has completely transformed our street presence. We've had countless new customers mention they came in because our sign caught their eye!",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Michael Rodriguez",
    company: "Apex Fitness",
    quote: "Working with SignCraft was effortless from concept to installation. Their team understood our brand aesthetic perfectly and delivered a gym sign that perfectly represents our energy.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Chen",
    company: "Modern Interiors",
    quote: "The dimensional lettering SignCraft created for our showroom has received endless compliments. The quality of craftsmanship and attention to detail is exactly what our design firm needed.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8E9196] mb-4">What Our Clients Say</h2>
          <p className="text-[#9F9EA1] max-w-2xl mx-auto">
            Hear from businesses who have transformed their brand presence with our signage solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-[#F6F6F7] border-none shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="md:w-3/4">
                <p className="text-[#8E9196] italic text-lg mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <p className="font-bold text-[#8E9196]">{testimonials[activeIndex].name}</p>
                  <p className="text-[#9F9EA1]">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-[#D3E4FD] transition-colors duration-300"
              >
                <ArrowLeft className="text-[#8E9196]" size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-[#D3E4FD] transition-colors duration-300"
              >
                <ArrowRight className="text-[#8E9196]" size={20} />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
