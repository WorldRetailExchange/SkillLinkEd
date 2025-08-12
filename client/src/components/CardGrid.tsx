import { type Tutor, type Event, type Course, type Workshop } from "@shared/schema";

interface CardGridProps {
  items: (Tutor | Event | Course | Workshop)[];
  type: "tutor" | "event" | "course" | "workshop";
  onItemClick: (item: Tutor | Event | Course | Workshop) => void;
}

export default function CardGrid({ items, type, onItemClick }: CardGridProps) {
  const renderTutorCard = (tutor: Tutor) => (
    <div
      className="bg-white border border-[#dbe0e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onItemClick(tutor)}
      data-testid={`card-tutor-${tutor.id}`}
    >
      <img src={tutor.image} alt={tutor.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-[#111418] text-lg font-semibold mb-2">{tutor.name}</h3>
        <p className="text-[#60748a] text-sm mb-3">{tutor.subject} - {tutor.specialties.slice(0, 2).join(", ")}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#111418] text-sm font-medium">{tutor.experience} experience</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-[#60748a] text-sm ml-1">({tutor.rating})</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#0d78f2] text-lg font-bold">{tutor.price}</span>
          <button className="bg-[#0d78f2] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0c6bd9] transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  const renderEventCard = (event: Event) => (
    <div
      className="bg-white border border-[#dbe0e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onItemClick(event)}
      data-testid={`card-event-${event.id}`}
    >
      <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-[#111418] text-lg font-semibold mb-2">{event.name}</h3>
        <p className="text-[#60748a] text-sm mb-3">{event.description.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#111418] text-sm font-medium">{event.date}</span>
          <span className="text-[#60748a] text-sm">{event.category}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#0d78f2] text-sm font-bold">{event.registrationFee}</span>
          <span className={`px-3 py-1 rounded-full text-xs ${
            event.status === "open" 
              ? "bg-[#0d78f2] text-white" 
              : "bg-gray-500 text-white"
          }`}>
            {event.status === "open" ? "Registration Open" : "Registration Closed"}
          </span>
        </div>
      </div>
    </div>
  );

  const renderCourseCard = (course: Course) => (
    <div
      className="bg-white border border-[#dbe0e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onItemClick(course)}
      data-testid={`card-course-${course.id}`}
    >
      <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-[#111418] text-lg font-semibold mb-2">{course.name}</h3>
        <p className="text-[#60748a] text-sm mb-3">{course.description.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#111418] text-sm font-medium">{course.duration}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            course.level === "Beginner" 
              ? "bg-green-100 text-green-800" 
              : course.level === "Intermediate"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}>
            {course.level}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#0d78f2] text-lg font-bold">{course.price}</span>
          <button className="bg-[#0d78f2] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0c6bd9] transition-colors">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );

  const renderWorkshopCard = (workshop: Workshop) => (
    <div
      className="bg-white border border-[#dbe0e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onItemClick(workshop)}
      data-testid={`card-workshop-${workshop.id}`}
    >
      <img src={workshop.image} alt={workshop.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-[#111418] text-lg font-semibold mb-2">{workshop.name}</h3>
        <p className="text-[#60748a] text-sm mb-3">{workshop.description.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#111418] text-sm font-medium">{workshop.duration}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            workshop.level === "Beginner" 
              ? "bg-green-100 text-green-800" 
              : workshop.level === "Intermediate"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}>
            {workshop.level}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#0d78f2] text-lg font-bold">{workshop.price}</span>
          <button className="bg-[#0d78f2] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0c6bd9] transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );

  const renderCard = (item: Tutor | Event | Course | Workshop) => {
    switch (type) {
      case "tutor":
        return renderTutorCard(item as Tutor);
      case "event":
        return renderEventCard(item as Event);
      case "course":
        return renderCourseCard(item as Course);
      case "workshop":
        return renderWorkshopCard(item as Workshop);
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id}>
          {renderCard(item)}
        </div>
      ))}
    </div>
  );
}
