import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

import { type Tutor, type Event, type Course, type Workshop } from "@shared/schema";
import DetailModal from "@/components/DetailModal";

// const unsplashIds = [
//   "1507003211169-0a1dd7228f2d",
//   "1500648767791-00dcc994a43e",
//   "1522202176988-66273c2fd55f",
//   "1503023345310-bd7c1de61c7d",
//   "1506794778202-cad84cf45f1d"
// ];

const tutorImages = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F7972_bigtutor2.webp?alt=media&token=96eef663-5866-4f63-b141-61d74b12c846",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9326_indian-teacher-guy-filming-educational-video-lecture-online-blog-standing-near-blackboard-indoors-virtual-tutoring-e-teaching-209297771.jpg?alt=media&token=4980890d-f8e0-4e67-b90f-60dfa0dde4b7",  
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4277_smiling-professional-indian-female-teacher-remote-tutor-looking-webcam-speaking-giving-online-class-video-conference-call-191073519.jpg?alt=media&token=7935ac6a-803a-4f56-bb14-f85901eea07e",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9969_young-indian-female-school-teacher-smiling-warmly-embracing-diversity-and-inspiring-students-classroom-setting-photo.jpg?alt=media&token=abd5f110-f230-4a6a-8853-22abd936bf7e",
];

const FeaturedEventImage = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4583_unnamed%20(1).png?alt=media&token=a38009f9-98f4-4e85-a6ea-bff91ec32777",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9158_unnamed%20(2).png?alt=media&token=1b27daf9-5be3-4799-bf96-dbf241d8d7e5",  
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F2443_unnamed%20(3).png?alt=media&token=92f29b7e-3f0b-41b6-b572-ecf76e4d52ff",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9437_unnamed%20(4).png?alt=media&token=9ec273fa-bbef-4201-a625-f1875b8578dd",
];

const PopularCoursesImage = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F8743_unnamed%20(5).png?alt=media&token=8f0f28b1-963b-4881-b525-f9fc93102b13",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F5155_unnamed%20(6).png?alt=media&token=059400cf-70ed-4e16-b502-5874d6edcc2b",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F2634_unnamed%20(7).png?alt=media&token=8cfa85e6-d037-4b29-bb0b-b6053bd85d1e",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9580_unnamed%20(8).png?alt=media&token=05225f80-b1a1-43e1-859b-05cf55b2aeb9"
];

const workShopImages = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4564_unnamed%20(9).png?alt=media&token=c281ad32-0fa3-415c-8f74-2d7ec23173ce",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9091_unnamed%20(10).png?alt=media&token=79fb7e65-d4d4-4269-ab26-8a1eb51bc536",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F3853_unnamed%20(11).png?alt=media&token=082c6957-fc0b-41c6-b65f-68e8ceaab24e",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4322_unnamed%20(12).png?alt=media&token=9365172b-00ca-4a0a-b7a7-6bd2b094d8ad"
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("tutors");

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

  const handleItemClick = (item: any, type: string) => {
    setSelectedItem(item);
    setSelectedType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#60748a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search for events, courses, workshops, or tutors"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-home"
              />
            </div>
          </label>
        </div>
        
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-80"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F8122_ChatGPT%20Image%20Aug%2013%2C%202025%2C%2007_06_25%20PM.png?alt=media&token=65ada9eb-8403-41ad-bc96-3aa79ad85d47")'
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
        
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            <button 
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === "tutors" ? "border-b-[#111418] text-[#111418]" : "border-b-transparent text-[#60748a]"
              }`}
              onClick={() => setActiveTab("tutors")}
              data-testid="tab-tutors"
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === "tutors" ? "text-[#111418]" : "text-[#60748a]"
              }`}>Tutors</p>
            </button>
            <button 
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === "events" ? "border-b-[#111418] text-[#111418]" : "border-b-transparent text-[#60748a]"
              }`}
              onClick={() => setActiveTab("events")}
              data-testid="tab-events"
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === "events" ? "text-[#111418]" : "text-[#60748a]"
              }`}>Events</p>
            </button>
            <button 
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === "courses" ? "border-b-[#111418] text-[#111418]" : "border-b-transparent text-[#60748a]"
              }`}
              onClick={() => setActiveTab("courses")}
              data-testid="tab-courses"
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === "courses" ? "text-[#111418]" : "text-[#60748a]"
              }`}>Courses</p>
            </button>
            <button 
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === "workshops" ? "border-b-[#111418] text-[#111418]" : "border-b-transparent text-[#60748a]"
              }`}
              onClick={() => setActiveTab("workshops")}
              data-testid="tab-workshops"
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === "workshops" ? "text-[#111418]" : "text-[#60748a]"
              }`}>Workshops & Bootcamps</p>
            </button>
          </div>
        </div>

              {/*url("https://images.unsplash.com/photo-${1500000000000 + index}?w=200&h=200&fit=crop&crop=face") */}
        {/* Tab Content */}
        {activeTab === "tutors" && (
          <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Find a Tutor
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-8">
                {tutors.slice(0, 4).map((tutor, index) => (
                  <div 
                    key={tutor.id} 
                    className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-52 pt-4 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(tutor, "tutor")}
                    data-testid={`card-featured-tutor-${tutor.id}`}
                  >
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                      style={{
                        backgroundImage: `url("${tutorImages[index % tutorImages.length]}")`


                      }}
                    ></div>
                    
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">{tutor.name}</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{tutor.subject} Tutor</p>
                      <p className="text-[#60748a] text-sm font-normal leading-normal">{tutor.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "events" && (
          <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Events
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {events.slice(0, 4).map((event, index) => (
                  
                  <div 
                    key={event.id} 
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(event, "event")}
                    data-testid={`card-featured-event-${event.id}`}
                  >
                    <div
                      className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg flex flex-col"
                      style={{
                        backgroundImage: `url("${FeaturedEventImage[index % FeaturedEventImage.length]}")`
                      }}
                    ></div>
                    <p className="text-[#111418] text-base font-medium leading-normal">{event.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "courses" && (
          <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular Courses
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {courses.slice(0, 4).map((course, index) => (
                  <div 
                    key={course.id} 
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(course, "course")}
                    data-testid={`card-featured-course-${course.id}`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                      style={{
                        backgroundImage: `url("${PopularCoursesImage[index % PopularCoursesImage.length]}")`
                      }}
                    ></div>
                    <p className="text-[#111418] text-base font-medium leading-normal">{course.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "workshops" && (
          <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Upcoming Workshops
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {workshops.slice(0, 4).map((workshop, index) => (
                  <div 
                    key={workshop.id} 
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => handleItemClick(workshop, "workshop")}
                    data-testid={`card-featured-workshop-${workshop.id}`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                      style={{
                        backgroundImage: `url("${workShopImages[index % workShopImages.length]}")`
                      }}
                    ></div>
                    <p className="text-[#111418] text-base font-medium leading-normal">{workshop.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Always Show Featured Sections */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Featured Events
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {events.slice(0, 4).map((event, index) => (
              <div 
                key={event.id} 
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => handleItemClick(event, "event")}
                data-testid={`card-featured-event-${event.id}`}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage: `url("${FeaturedEventImage[index % FeaturedEventImage.length]}")`
                  }}
                ></div>
                <p className="text-[#111418] text-base font-medium leading-normal">{event.name}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Popular Courses
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {courses.slice(0, 4).map((course, index) => (
              <div 
                key={course.id} 
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => handleItemClick(course, "course")}
                data-testid={`card-featured-course-${course.id}`}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage: `url("${PopularCoursesImage[index % PopularCoursesImage.length]}")`
                  }}
                ></div>
                <p className="text-[#111418] text-base font-medium leading-normal">{course.name}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Upcoming Workshops
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {workshops.slice(0, 4).map((workshop, index) => (
              <div 
                key={workshop.id} 
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => handleItemClick(workshop, "workshop")}
                data-testid={`card-featured-workshop-${workshop.id}`}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage: `url("${workShopImages[index % workShopImages.length]}")`
                  }}
                ></div>
                <p className="text-[#111418] text-base font-medium leading-normal">{workshop.name}</p>
              </div>
            ))}
          </div>
        </div>

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          type={selectedType as "tutor" | "event" | "course" | "workshop"}
        />
      </div>
    </div>
  );
}