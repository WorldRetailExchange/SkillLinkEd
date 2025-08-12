import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Workshop } from "@shared/schema";
import { Search, ChevronDown } from "lucide-react";
import DetailModal from "@/components/DetailModal";

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: workshops = [], isLoading } = useQuery<Workshop[]>({
    queryKey: ["/api/workshops"],
  });

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWorkshopClick = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-[#60748a]">Loading workshops...</div>
      </div>
    );
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Workshops &amp; Bootcamps
          </p>
        </div>
        
        <div className="px-4 pb-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#60748a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Search size={24} />
              </div>
              <input
                placeholder="Search for workshops by type, level, and topic"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-workshops"
              />
            </div>
          </label>
        </div>
        
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Type</p>
            <ChevronDown size={20} className="text-[#111418]" />
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Duration</p>
            <ChevronDown size={20} className="text-[#111418]" />
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Age Group</p>
            <ChevronDown size={20} className="text-[#111418]" />
          </button>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {filteredWorkshops.map((workshop, index) => (
            <div 
              key={workshop.id} 
              className="flex flex-col gap-3 pb-3 cursor-pointer hover:transform hover:scale-105 transition-transform"
              onClick={() => handleWorkshopClick(workshop)}
              data-testid={`card-workshop-${workshop.id}`}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-${1800000000000 + index}?w=400&h=225&fit=crop")`
                }}
              ></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">{workshop.name}</p>
                <p className="text-[#60748a] text-sm font-normal leading-normal">{workshop.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No workshops found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search or filters</p>
            </div>
          </div>
        )}

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedWorkshop}
          type="workshop"
        />
      </div>
    </div>
  );
}