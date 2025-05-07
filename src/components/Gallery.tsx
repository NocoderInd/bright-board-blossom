
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projectCategories = ["All", "Exterior", "Interior", "Dimensional", "Vehicle", "Digital"];

const projectData = [
  {
    id: 1,
    title: "US Pizza & Tandy's Fried Chicken",
    category: "Exterior",
    image: "/lovable-uploads/e7ee662b-fda6-44bd-98eb-99e5624f345f.png"
  },
  {
    id: 2,
    title: "Style Up Fashion Store",
    category: "Exterior",
    image: "/lovable-uploads/475ca62a-a89b-42b1-9d1f-95c3a47bfc41.png"
  },
  {
    id: 3,
    title: "Jio BP Petrol Pump",
    category: "Dimensional",
    image: "/lovable-uploads/feaa5a7c-bbbf-4363-bfa8-f8f47693b488.png"
  },
  {
    id: 4,
    title: "PNR Prime & ML Grand",
    category: "Exterior",
    image: "/lovable-uploads/30217d6b-fea1-497d-9072-13d9d0967b69.png"
  },
  {
    id: 5,
    title: "Food Court Signage",
    category: "Interior",
    image: "/lovable-uploads/4e51d974-c0b2-45a7-a31a-584117b2d4a2.png"
  },
  {
    id: 6,
    title: "US Pizza Restaurant",
    category: "Exterior",
    image: "/lovable-uploads/d9e5662f-04fc-4941-b7ff-6a343c88d21d.png"
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
