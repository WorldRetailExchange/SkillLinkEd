import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Tutor } from "@shared/schema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DetailModal from "@/components/DetailModal";

export default function Tutors() {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: tutors = [], isLoading } = useQuery<Tutor[]>({
    queryKey: ["/api/tutors"],
  });

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleTutorClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const featuredTutors = filteredTutors.slice(0, 5);
  const allTutors = filteredTutors.slice(0, 3);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-[#60748a]">Loading tutors...</div>
      </div>
    );
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filter</h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Subjects</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">English, Math, Coding, Arts</p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Online/Offline</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">English, Math, Coding, Arts</p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Distance</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">English, Math, Coding, Arts</p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Amount</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">English, Math, Coding, Arts</p>
          </details>
        </div>
      </div>
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
                placeholder="Search for tutors by subject, level, and location"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-tutors"
              />
            </div>
          </label>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Tutors</h2>
        
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {featuredTutors.map((tutor, index) => (
              <div 
                key={tutor.id} 
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => handleTutorClick(tutor)}
                data-testid={`card-featured-tutor-${tutor.id}`}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-${1500000000000 + index}?w=200&h=200&fit=crop&crop=face")`
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{tutor.name}</p>
                  <p className="text-[#60748a] text-sm font-normal leading-normal">{tutor.subject} Tutor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          All Tutors
        </h2>
        
        {allTutors.map((tutor, index) => (
          <div key={tutor.id} className="p-4">
            <div 
              className="flex items-stretch justify-between gap-4 rounded-lg cursor-pointer hover:bg-[#f8f9fa] transition-colors p-2 -m-2"
              onClick={() => handleTutorClick(tutor)}
              data-testid={`card-tutor-${tutor.id}`}
            >
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">{tutor.name}</p>
                  <p className="text-[#60748a] text-sm font-normal leading-normal">{tutor.subject} Tutor</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit"
                  data-testid={`button-view-profile-${tutor.id}`}
                >
                  <span className="truncate">View Profile</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-${1500000000000 + index + 100}?w=300&h=169&fit=crop&crop=face")`
                }}
              ></div>
            </div>
          </div>
        ))}
        
        <div className="flex items-center justify-center p-4">
          <a href="#" className="flex size-10 items-center justify-center">
            <ChevronLeft size={18} className="text-[#111418]" />
          </a>
          <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f5]" href="#">1</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">2</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">3</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">4</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">5</a>
          <a href="#" className="flex size-10 items-center justify-center">
            <ChevronRight size={18} className="text-[#111418]" />
          </a>
        </div>

        {filteredTutors.length === 0 && (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No tutors found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search</p>
            </div>
          </div>
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