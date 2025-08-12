import { X } from "lucide-react";
import { type Tutor, type Event, type Course, type Workshop } from "@shared/schema";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Tutor | Event | Course | Workshop | null;
  type: "tutor" | "event" | "course" | "workshop";
}

export default function DetailModal({ isOpen, onClose, item, type }: DetailModalProps) {
  if (!isOpen || !item) return null;

  const renderTutorDetails = (tutor: Tutor) => (
    <div className="space-y-4">
      <img src={tutor.image} alt={tutor.name} className="w-full h-64 object-cover rounded-lg" />
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-[#111418] mb-2">{tutor.subject} Tutor</h3>
          <p className="text-[#60748a]">{tutor.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#111418]">Experience</h4>
            <p className="text-[#60748a]">{tutor.experience}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Rating</h4>
            <p className="text-[#60748a]">★★★★★ {tutor.rating}/5.0</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Price</h4>
            <p className="text-[#0d78f2] font-bold">{tutor.price}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Location</h4>
            <p className="text-[#60748a]">{tutor.location}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418] mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {tutor.specialties.map((specialty, index) => (
              <span key={index} className="bg-[#f0f2f5] text-[#111418] px-3 py-1 rounded-full text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Availability</h4>
          <p className="text-[#60748a]">{tutor.availability}</p>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-[#0d78f2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c6bd9] transition-colors" data-testid="button-contact">
            Contact Tutor
          </button>
          <button className="flex-1 bg-[#f0f2f5] text-[#111418] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8ecf0] transition-colors" data-testid="button-trial">
            Schedule Trial
          </button>
        </div>
      </div>
    </div>
  );

  const renderEventDetails = (event: Event) => (
    <div className="space-y-4">
      <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-lg" />
      <div className="space-y-4">
        <div>
          <p className="text-[#60748a] text-lg">{event.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#111418]">Date & Time</h4>
            <p className="text-[#60748a]">{event.date}</p>
            <p className="text-[#60748a]">{event.time}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Location</h4>
            <p className="text-[#60748a]">{event.location}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Eligibility</h4>
            <p className="text-[#60748a]">{event.eligibility}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Registration Fee</h4>
            <p className="text-[#0d78f2] font-bold">{event.registrationFee}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Registration</h4>
          <p className="text-[#60748a]">{event.registrationDeadline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Prizes</h4>
          <p className="text-[#60748a]">{event.prizes}</p>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-[#0d78f2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c6bd9] transition-colors" data-testid="button-register">
            Register Now
          </button>
          <button className="flex-1 bg-[#f0f2f5] text-[#111418] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8ecf0] transition-colors" data-testid="button-learn-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  const renderCourseDetails = (course: Course) => (
    <div className="space-y-4">
      <img src={course.image} alt={course.name} className="w-full h-64 object-cover rounded-lg" />
      <div className="space-y-4">
        <div>
          <p className="text-[#60748a] text-lg">{course.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#111418]">Duration</h4>
            <p className="text-[#60748a]">{course.duration}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Level</h4>
            <p className="text-[#60748a]">{course.level}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Instructor</h4>
            <p className="text-[#60748a]">{course.instructor}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Price</h4>
            <p className="text-[#0d78f2] font-bold">{course.price}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Schedule</h4>
          <p className="text-[#60748a]">{course.schedule}</p>
          <p className="text-[#60748a]">Starts: {course.startDate}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Prerequisites</h4>
          <p className="text-[#60748a]">{course.prerequisites}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418] mb-2">Learning Outcomes</h4>
          <ul className="list-disc list-inside space-y-1">
            {course.outcomes.map((outcome, index) => (
              <li key={index} className="text-[#60748a]">{outcome}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-[#0d78f2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c6bd9] transition-colors" data-testid="button-enroll">
            Enroll Now
          </button>
          <button className="flex-1 bg-[#f0f2f5] text-[#111418] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8ecf0] transition-colors" data-testid="button-syllabus">
            View Syllabus
          </button>
        </div>
      </div>
    </div>
  );

  const renderWorkshopDetails = (workshop: Workshop) => (
    <div className="space-y-4">
      <img src={workshop.image} alt={workshop.name} className="w-full h-64 object-cover rounded-lg" />
      <div className="space-y-4">
        <div>
          <p className="text-[#60748a] text-lg">{workshop.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#111418]">Duration</h4>
            <p className="text-[#60748a]">{workshop.duration}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Level</h4>
            <p className="text-[#60748a]">{workshop.level}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Instructor</h4>
            <p className="text-[#60748a]">{workshop.instructor}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111418]">Price</h4>
            <p className="text-[#0d78f2] font-bold">{workshop.price}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418]">Schedule & Location</h4>
          <p className="text-[#60748a]">{workshop.schedule}</p>
          <p className="text-[#60748a]">{workshop.location}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418] mb-2">What's Included</h4>
          <ul className="list-disc list-inside space-y-1">
            {workshop.included.map((item, index) => (
              <li key={index} className="text-[#60748a]">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#111418] mb-2">Topics Covered</h4>
          <div className="flex flex-wrap gap-2">
            {workshop.topics.map((topic, index) => (
              <span key={index} className="bg-[#f0f2f5] text-[#111418] px-3 py-1 rounded-full text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-[#0d78f2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c6bd9] transition-colors" data-testid="button-register-workshop">
            Register
          </button>
          <button className="flex-1 bg-[#f0f2f5] text-[#111418] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8ecf0] transition-colors" data-testid="button-workshop-info">
            More Info
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case "tutor":
        return renderTutorDetails(item as Tutor);
      case "event":
        return renderEventDetails(item as Event);
      case "course":
        return renderCourseDetails(item as Course);
      case "workshop":
        return renderWorkshopDetails(item as Workshop);
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-[#111418]" data-testid="text-modal-title">
              {"name" in item ? item.name : ""}
            </h2>
            <button
              onClick={onClose}
              className="text-[#60748a] hover:text-[#111418] text-2xl"
              data-testid="button-close-modal"
            >
              <X size={24} />
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
