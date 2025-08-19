import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Course } from "@shared/schema";

import DetailModal from "@/components/DetailModal";

const PopularCoursesImage = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F8743_unnamed%20(5).png?alt=media&token=8f0f28b1-963b-4881-b525-f9fc93102b13",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F3592_sketch-physics_156892-594.avif?alt=media&token=1966c2f8-bd26-41af-b089-91999b5b4def",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4415_ChatGPT%20Image%20Aug%2019%2C%202025%2C%2001_16_46%20PM.png?alt=media&token=0a3e8290-6066-439f-95ea-d5c4dbff6a5a",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F3382_Data%20Science%20Bootcamp%20(1).jpg?alt=media&token=ae6c4a03-c6c6-4264-87a7-fe40bc8a7bc9"
];

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
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filter</h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Education Course</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">Robotics and Coding Programs Advanced Technology Courses</p>
          </details>
          <details className="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Sports Course</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">Robotics and Coding Programs Advanced Technology Courses</p>
          </details>
          <details className="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Creative Arts Course</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">Robotics and Coding Programs Advanced Technology Courses</p>
          </details>
          <details className="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Extra Curriculum Courses</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">Robotics and Coding Programs Advanced Technology Courses</p>
          </details>
          <details className="flex flex-col rounded-lg bg-[#f0f2f5] px-4 py-2 group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Most Popular Trending Courses</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">Robotics and Coding Programs Advanced Technology Courses</p>
          </details>
        </div>
      </div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Courses</p>
            <p className="text-[#60748a] text-sm font-normal leading-normal">Explore a wide range of courses to enhance your skills and knowledge.</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Subject</p>
            <div className="text-[#111418]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Level</p>
            <div className="text-[#111418]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
            <p className="text-[#111418] text-sm font-medium leading-normal">Duration</p>
            <div className="text-[#111418]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </button>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
        
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
                  backgroundImage: `url("${PopularCoursesImage[index % PopularCoursesImage.length]}")`
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