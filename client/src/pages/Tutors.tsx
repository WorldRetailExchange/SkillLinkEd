import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Tutor } from "@shared/schema";
import SearchInput from "@/components/SearchInput";
import FilterSidebar from "@/components/FilterSidebar";
import CardGrid from "@/components/CardGrid";
import DetailModal from "@/components/DetailModal";

export default function Tutors() {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: tutors = [], isLoading } = useQuery<Tutor[]>({
    queryKey: ["/api/tutors"],
  });

  const filterGroups = [
    {
      title: "Subjects",
      description: "English, Math, Coding, Arts",
      isOpen: true,
    },
    {
      title: "Online/Offline",
      description: "Online Sessions, In-Person Meetings",
    },
    {
      title: "Experience Level",
      description: "New (0-2 years), Experienced (3-5 years), Expert (6+ years)",
    },
  ];

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleTutorClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-[#60748a]">Loading tutors...</div>
      </div>
    );
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <FilterSidebar filterGroups={filterGroups} />
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3">
          <SearchInput
            placeholder="Search for tutors by subject, level, and location"
            className="min-w-40 h-12 w-full"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Featured Tutors
        </h2>

        {filteredTutors.length === 0 ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No tutors found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search or filters</p>
            </div>
          </div>
        ) : (
          <CardGrid items={filteredTutors} type="tutor" onItemClick={handleTutorClick} />
        )}

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedTutor}
          type="tutor"
        />
      </div>
    </div>
  );
}
