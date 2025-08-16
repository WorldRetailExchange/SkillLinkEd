import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";




import DetailModal from "@/components/DetailModal";

const FeaturedEventImage = [
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4583_unnamed%20(1).png?alt=media&token=a38009f9-98f4-4e85-a6ea-bff91ec32777",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F8639_unnamed%20(15).png?alt=media&token=469cba93-5ac3-415d-a862-45ec11a14103",  
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F2634_unnamed%20(7).png?alt=media&token=8cfa85e6-d037-4b29-bb0b-b6053bd85d1e",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F7910_unnamed%20(16).png?alt=media&token=41887db0-31a3-4429-b245-baa36488270f",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F8077_unnamed%20(18).png?alt=media&token=d7a5c35a-f84b-4774-95d0-8712f50d7f57",
  "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F3074_unnamed%20(17).png?alt=media&token=0a93a364-dffe-4f74-968f-c50c323ff4f9"
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  


  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

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
      <div className="layout-content-container flex flex-col w-80">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filter</h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Education Events</p>
              <div className="text-[#111418] group-open:rotate-180">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">
              Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Sports Events</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">
              Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Arts Events</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">
              Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">School Level Events</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">
              Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111418] text-sm font-medium leading-normal">Inter-School Events</p>
              <div className="text-[#111418] group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#60748a] text-sm font-normal leading-normal pb-2">
              Science Olympiad Foundation (SOF) Olympiad, International Science Olympiads (Government Supported), and TCS InQuizitive
            </p>
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
                placeholder="Search for events, courses, tutors"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-events"
              />
            </div>
          </label>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Events</h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Category</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Date</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-4">
            <p className="text-[#111418] text-sm font-medium leading-normal">Location</p>
          </div>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="flex flex-col gap-3 pb-3 cursor-pointer hover:transform hover:scale-105 transition-transform"
              onClick={() => handleEventClick(event)}
              data-testid={`card-event-${event.id}`}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("${FeaturedEventImage[index % FeaturedEventImage.length]}")`
                }}
              ></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">{event.name}</p>
                <p className="text-[#60748a] text-sm font-normal leading-normal">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-[#60748a] text-lg">No events found</p>
              <p className="text-[#60748a] text-sm">Try adjusting your search</p>
            </div>
          </div>
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