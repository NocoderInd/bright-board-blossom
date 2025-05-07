
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8E9196] mb-4">
              Signage that makes a <span className="text-[#D3E4FD]">statement</span>
            </h1>
            <p className="text-lg text-[#9F9EA1] mb-8 md:pr-10">
              We craft high-quality custom signage solutions that elevate your brand and attract customers. From storefront displays to trade show materials, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FDE1D3] hover:bg-[#EDC1B3] text-[#8E9196] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-[#D3E4FD] text-[#8E9196] px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
                alt="Elegant signage display"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#E5DEFF] p-4 rounded-lg shadow-md">
                <p className="font-bold text-[#8E9196]">100+</p>
                <p className="text-[#9F9EA1]">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
