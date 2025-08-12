import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Tutor, type Event, type Course, type Workshop } from "@shared/schema";
import SearchInput from "@/components/SearchInput";
import DetailModal from "@/components/DetailModal";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"tutors" | "events" | "courses" | "workshops">("tutors");
  const [selectedItem, setSelectedItem] = useState<Tutor | Event | Course | Workshop | null>(null);
  const [modalType, setModalType] = useState<"tutor" | "event" | "course" | "workshop">("tutor");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: tutors = [] } = useQuery<Tutor[]>({
    queryKey: ["/api/tutors"],
  });

  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const { data: courses = [] } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const { data: workshops = [] } = useQuery<Workshop[]>({
    queryKey: ["/api/workshops"],
  });

  const handleItemClick = (item: Tutor | Event | Course | Workshop, type: "tutor" | "event" | "course" | "workshop") => {
    setSelectedItem(item);
    setModalType(type);
    setIsModalOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tutors":
        return (
          <div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Find a Tutor
            </h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-8">
                {tutors.slice(0, 4).map((tutor) => (
                  <div
                    key={tutor.id}
                    className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-52 pt-4 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(tutor, "tutor")}
                    data-testid={`card-featured-tutor-${tutor.id}`}
                  >
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                      style={{ backgroundImage: `url("${tutor.image}")` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">{tutor.name}</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{tutor.subject} Tutor</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "events":
        return (
          <div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Events
            </h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(event, "event")}
                    data-testid={`card-featured-event-${event.id}`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{ backgroundImage: `url("${event.image}")` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">{event.name}</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "courses":
        return (
          <div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular Courses
            </h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {courses.slice(0, 2).map((course) => (
                  <div
                    key={course.id}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(course, "course")}
                    data-testid={`card-featured-course-${course.id}`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{ backgroundImage: `url("${course.image}")` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">{course.name}</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{course.duration} • {course.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "workshops":
        return (
          <div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Upcoming Workshops
            </h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {workshops.slice(0, 2).map((workshop) => (
                  <div
                    key={workshop.id}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(workshop, "workshop")}
                    data-testid={`card-featured-workshop-${workshop.id}`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{ backgroundImage: `url("${workshop.image}")` }}
                    />
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">{workshop.name}</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{workshop.duration} • {workshop.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Search */}
        <div className="px-4 py-3">
          <SearchInput
            placeholder="Search for events, courses, workshops, or tutors"
            className="min-w-40 h-12 w-full"
          />
        </div>

        {/* Hero Banner */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-80"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600")`,
              }}
            >
              <div className="flex justify-center gap-2 p-5">
                <div className="size-1.5 rounded-full bg-white"></div>
                <div className="size-1.5 rounded-full bg-white opacity-50"></div>
                <div className="size-1.5 rounded-full bg-white opacity-50"></div>
                <div className="size-1.5 rounded-full bg-white opacity-50"></div>
                <div className="size-1.5 rounded-full bg-white opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            {[
              { key: "tutors", label: "Tutors" },
              { key: "events", label: "Events" },
              { key: "courses", label: "Courses" },
              { key: "workshops", label: "Workshops & Bootcamps" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 cursor-pointer transition-colors ${
                  activeTab === tab.key
                    ? "border-b-[#111418] text-[#111418]"
                    : "border-b-transparent text-[#60748a] hover:text-[#111418]"
                }`}
                onClick={() => setActiveTab(tab.key as any)}
                data-testid={`tab-${tab.key}`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          type={modalType}
        />
      </div>
    </div>
  );
}
