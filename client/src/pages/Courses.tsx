import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Course } from "@shared/schema";
import { Search } from "lucide-react";
import DetailModal from "@/components/DetailModal";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.level.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#60748a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Search size={24} />
              </div>
              <input
                placeholder="Search for events, courses, tutors"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-courses"
              />
            </div>
          </label>
        </div>
        
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Courses
        </h2>
        
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Category</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Level</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Duration</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Price</p>
          </div>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="flex flex-col gap-3 pb-3 cursor-pointer hover:transform hover:scale-105 transition-transform"
              onClick={() => handleCourseClick(course)}
              data-testid={`card-course-${course.id}`}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-${1700000000000 + index}?w=400&h=225&fit=crop")`
                }}
              ></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">{course.name}</p>
                <p className="text-[#60748a] text-sm font-normal leading-normal">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No courses found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search</p>
            </div>
          </div>
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