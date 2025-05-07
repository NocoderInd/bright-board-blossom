
import { Card } from "@/components/ui/card";

const servicesData = [
  {
    title: "Exterior Signage",
    description: "Durable outdoor signs that withstand the elements while showcasing your brand with clarity and style.",
    icon: "🏢"
  },
  {
    title: "Interior Displays",
    description: "Eye-catching indoor signage that enhances your space and guides customers throughout your business.",
    icon: "🏪"
  },
  {
    title: "Dimensional Letters",
    description: "Custom 3D lettering and logos that add depth and professionalism to your storefront or office.",
    icon: "🔤"
  },
  {
    title: "Digital Signage",
    description: "Dynamic digital displays that allow you to update content and engage customers with animation and video.",
    icon: "📺"
  },
  {
    title: "Vehicle Graphics",
    description: "Transform your company vehicles into moving advertisements with high-quality vehicle wraps and graphics.",
    icon: "🚗"
  },
  {
    title: "Trade Show Displays",
    description: "Portable, high-impact signage solutions designed to make your brand stand out at events and trade shows.",
    icon: "🎪"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#F1F1F1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8E9196] mb-4">Our Signage Services</h2>
          <p className="text-[#9F9EA1] max-w-2xl mx-auto">
            We offer a comprehensive range of signage solutions to meet your business needs and help you make a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 border-none">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#8E9196] mb-3">{service.title}</h3>
              <p className="text-[#9F9EA1]">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
