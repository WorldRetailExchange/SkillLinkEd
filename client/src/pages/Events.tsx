import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";
import SearchInput from "@/components/SearchInput";
import FilterSidebar from "@/components/FilterSidebar";
import CardGrid from "@/components/CardGrid";
import DetailModal from "@/components/DetailModal";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const filterGroups = [
    {
      title: "Education Events",
      description: "Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive",
      isOpen: true,
    },
    {
      title: "Sports Events",
      description: "Athletic competitions, inter-school tournaments, and fitness challenges",
    },
    {
      title: "Arts Events",
      description: "Music competitions, art exhibitions, and drama performances",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-[#60748a]">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <FilterSidebar filterGroups={filterGroups} />
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3">
          <SearchInput
            placeholder="Search for events, courses, tutors"
            className="min-w-40 h-12 w-full"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Events
        </h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4 cursor-pointer hover:bg-gray-200 transition-colors" data-testid="filter-category">
            <p className="text-[#111418] text-sm font-medium leading-normal">Category</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4 cursor-pointer hover:bg-gray-200 transition-colors" data-testid="filter-date">
            <p className="text-[#111418] text-sm font-medium leading-normal">Date</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4 cursor-pointer hover:bg-gray-200 transition-colors" data-testid="filter-location">
            <p className="text-[#111418] text-sm font-medium leading-normal">Location</p>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No events found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search or filters</p>
            </div>
          </div>
        ) : (
          <CardGrid items={filteredEvents} type="event" onItemClick={handleEventClick} />
        )}

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedEvent}
          type="event"
        />
      </div>
    </div>
  );
}
