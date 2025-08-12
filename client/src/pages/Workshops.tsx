import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Workshop } from "@shared/schema";
import SearchInput from "@/components/SearchInput";
import FilterSidebar from "@/components/FilterSidebar";
import CardGrid from "@/components/CardGrid";
import DetailModal from "@/components/DetailModal";

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: workshops = [], isLoading } = useQuery<Workshop[]>({
    queryKey: ["/api/workshops"],
  });

  const filterGroups = [
    {
      title: "Education Workshops & Bootcamps",
      description: "STEM & Coding Workshop Olympiad & Quiz Workshops Multiple Intelligence & Study Skills",
      isOpen: true,
    },
    {
      title: "Type",
      description: "Programming, Design, Leadership, Art, Engineering",
    },
    {
      title: "Duration",
      description: "1-2 days, 3-5 days, 1 week, 2+ weeks",
    },
  ];

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
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <FilterSidebar filterGroups={filterGroups} />
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Workshops & Bootcamps
          </p>
        </div>
        <div className="px-4 pb-3">
          <SearchInput
            placeholder="Search for workshops by type, level, and topic"
            className="min-w-40 h-12 w-full"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        {filteredWorkshops.length === 0 ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No workshops found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search or filters</p>
            </div>
          </div>
        ) : (
          <CardGrid items={filteredWorkshops} type="workshop" onItemClick={handleWorkshopClick} />
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
