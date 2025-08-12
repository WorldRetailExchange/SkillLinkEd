import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Course } from "@shared/schema";
import SearchInput from "@/components/SearchInput";
import FilterSidebar from "@/components/FilterSidebar";
import CardGrid from "@/components/CardGrid";
import DetailModal from "@/components/DetailModal";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const filterGroups = [
    {
      title: "Subject",
      description: "Mathematics, Science, Programming, Arts, Languages",
      isOpen: true,
    },
    {
      title: "Level",
      description: "Beginner, Intermediate, Advanced",
    },
    {
      title: "Duration",
      description: "Short term (1-8 weeks), Medium term (9-16 weeks), Long term (17+ weeks)",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-[#60748a]">Loading courses...</div>
      </div>
    );
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <FilterSidebar filterGroups={filterGroups} />
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3">
          <SearchInput
            placeholder="Search for courses by subject, level, and instructor"
            className="min-w-40 h-12 w-full"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Courses
        </h2>

        {filteredCourses.length === 0 ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No courses found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search or filters</p>
            </div>
          </div>
        ) : (
          <CardGrid items={filteredCourses} type="course" onItemClick={handleCourseClick} />
        )}

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedCourse}
          type="course"
        />
      </div>
    </div>
  );
}
