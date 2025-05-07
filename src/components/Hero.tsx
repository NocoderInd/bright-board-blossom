
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Signage that makes a <span className="text-[#FCD34D]">statement</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 md:pr-10">
              We craft high-quality custom signage solutions that elevate your brand and attract customers. From storefront displays to trade show materials, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FCD34D] hover:bg-[#F59E0B] text-[#4B5563] px-8 py-6 text-lg font-medium">
                Get Started
              </Button>
              <Button variant="outline" className="border-[#F9FAFB] text-white hover:bg-white/10 px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="/lovable-uploads/7bc68a5f-7b0d-482e-bd13-9a9adb010b21.png"
                alt="Canteen signage display with Indian text"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover object-center"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#FCD34D] p-4 rounded-lg shadow-md">
                <p className="font-bold text-[#4B5563]">500+</p>
                <p className="text-[#4B5563]">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
