
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projectCategories = ["All", "Exterior", "Interior", "Dimensional", "Vehicle", "Digital"];

const projectData = [
  {
    id: 1,
    title: "Downtown Café Sign",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Law Office Reception",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Tech Company Logo Wall",
    category: "Dimensional",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Delivery Fleet Branding",
    category: "Vehicle",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Shopping Mall Directory",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Boutique Store Signage",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectData 
    : projectData.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#F1F1F1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8E9196] mb-4">Our Recent Work</h2>
          <p className="text-[#9F9EA1] max-w-2xl mx-auto">
            Browse our portfolio of signage projects that have helped businesses stand out and make their mark.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-[#D3E4FD] hover:bg-[#C3D4ED] text-[#8E9196] border-none"
                  : "border-[#D3E4FD] text-[#9F9EA1]"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
