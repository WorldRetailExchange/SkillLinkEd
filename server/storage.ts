import { type Tutor, type Event, type Course, type Workshop, type InsertTutor, type InsertEvent, type InsertCourse, type InsertWorkshop } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Tutors
  getTutors(): Promise<Tutor[]>;
  getTutor(id: string): Promise<Tutor | undefined>;
  createTutor(tutor: InsertTutor): Promise<Tutor>;
  
  // Events
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Workshops
  getWorkshops(): Promise<Workshop[]>;
  getWorkshop(id: string): Promise<Workshop | undefined>;
  createWorkshop(workshop: InsertWorkshop): Promise<Workshop>;
}

export class MemStorage implements IStorage {
  private tutors: Map<string, Tutor>;
  private events: Map<string, Event>;
  private courses: Map<string, Course>;
  private workshops: Map<string, Workshop>;

  constructor() {
    this.tutors = new Map();
    this.events = new Map();
    this.courses = new Map();
    this.workshops = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed tutors
    const sampleTutors: InsertTutor[] = [
      {
        name: "Anurag Singh",
        subject: "Mathematics",
        specialties: ["Algebra", "Calculus", "Statistics", "SAT Math Prep"],
        experience: "5+ years",
        rating: "4.9",
        price: "400₹/hr",
        availability: "Monday-Friday, 3PM-8PM",
        location: "Online and New Delhi",
        description: "Anurag Singh is a highly experienced mathematics tutor specializing in Algebra, Calculus, and Statistics. She has helped over 200 students improve their math skills and achieve their academic goals.",
        image: "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F7972_bigtutor2.webp?alt=media&token=96eef663-5866-4f63-b141-61d74b12c846"
      },
      {
        name: "Abhishek Yadav",
        subject: "Science",
        specialties: ["Physics", "Chemistry", "Biology", "AP Science Prep"],
        experience: "3+ years",
        rating: "4.8",
        price: "500₹/hr",
        availability: "Tuesday-Saturday, 4PM-9PM",
        location: "Online and Mumbai, Maharashtra",
        description: "Abhishek Yadav brings extensive knowledge in Physics, Chemistry, and Biology. His hands-on approach and laboratory experience make complex scientific concepts accessible to students.",
        image: "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9326_indian-teacher-guy-filming-educational-video-lecture-online-blog-standing-near-blackboard-indoors-virtual-tutoring-e-teaching-209297771.jpg?alt=media&token=4980890d-f8e0-4e67-b90f-60dfa0dde4b7"
      },
      {
        name: "Jyoti Suri",
        subject: "English",
        specialties: ["Literature Analysis", "Creative Writing", "Essay Writing", "Reading Comprehension"],
        experience: "7+ years",
        rating: "4.9",
        price: "400₹/hr",
        availability: "Monday-Thursday, 5PM-9PM",
        location: "Online and West Bengal",
        description: "Jyoti Suri is passionate about literature and writing. She helps students develop critical thinking skills and express themselves clearly through written and verbal communication.",
        image: "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F4277_smiling-professional-indian-female-teacher-remote-tutor-looking-webcam-speaking-giving-online-class-video-conference-call-191073519.jpg?alt=media&token=7935ac6a-803a-4f56-bb14-f85901eea07e"
      },
      {
        name: "Priyanka Dhage",
        subject: "History",
        specialties: ["World History", "US History", "Social Studies", "Historical Research"],
        experience: "4+ years",
        rating: "4.7",
        price: "1500₹/hr",
        availability: "Wednesday-Sunday, 2PM-7PM",
        location: "Online and Mumbai, Maharashtra",
        description: "Priyanka Dhage brings history to life with engaging storytelling and helps students understand the connections between past and present events.",
        image: "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F9969_young-indian-female-school-teacher-smiling-warmly-embracing-diversity-and-inspiring-students-classroom-setting-photo.jpg?alt=media&token=abd5f110-f230-4a6a-8853-22abd936bf7e"
      },
      {
        name: "Sarah K.",
        subject: "Computer Science",
        specialties: ["Python", "Java", "Data Structures", "Algorithms"],
        experience: "6+ years",
        rating: "5.0",
        price: "1000₹/hr",
        availability: "Monday-Friday, 6PM-10PM",
        location: "Online only",
        description: "Sarah is a software engineer turned educator with expertise in multiple programming languages and computer science concepts.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Michael T.",
        subject: "Chemistry",
        specialties: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Lab Techniques"],
        experience: "8+ years",
        rating: "4.8",
        price: "$55/hr",
        availability: "Tuesday-Saturday, 3PM-8PM",
        location: "Online and Los Angeles, CA",
        description: "Michael has a PhD in Chemistry and extensive experience in both research and teaching. He makes complex chemical concepts understandable.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      }
    ];

    // Seed events
    const sampleEvents: InsertEvent[] = [
      {
        name: "Science Olympiad",
        date: "March 15, 2024",
        time: "9:00 AM - 4:00 PM",
        location: "Central High School Auditorium",
        category: "Education",
        description: "Science Olympiad: national STEM contest in multiple science fields.",
        eligibility: "Grades 9-12",
        registrationFee: "250₹ per participant",
        registrationDeadline: "Open until March 10, 2024",
        prizes: "Trophies and medals for top 3 teams, scholarships for individual winners",
        image: "https://firebasestorage.googleapis.com/v0/b/posible.in/o/10wrx%2F5577_ChatGPT%20Image%20Aug%2019%2C%202025%2C%2001_02_30%20PM.png?alt=media&token=24fb7116-250d-4879-ad3e-ce889344f708",
        status: "open"
      },
      {
        name: "Debate Championship",
        date: "March 20, 2024",
        time: "10:00 AM - 6:00 PM",
        location: "City Convention Center",
        category: "Education",
        description: "Annual debate on current affairs, policy, and global issues.",
        eligibility: "Grades 10-12",
        registrationFee: "300₹ per team",
        registrationDeadline: "Open until March 15, 2024",
        prizes: "Championship trophy, individual speaker awards, debate scholarships",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        status: "open"
      },
      {
        name: "Math Olympiad",
        date: "March 25, 2024",
        time: "1:00 PM - 5:00 PM",
        location: "University Mathematics Building",
        category: "Education",
        description: "Math contest covering algebra, geometry and combinatorics..",
        eligibility: "Grades 8-12",
        registrationFee: "200₹ per participant",
        registrationDeadline: "Open until March 20, 2024",
        prizes: "Medals for top 10 finishers, mathematical tools and books",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        status: "open"
      },
      {
        name: "Robotics Competition",
        date: "April 5, 2024",
        time: "10:00 AM - 6:00 PM",
        location: "Tech Innovation Center",
        category: "Technology",
        description: "Robotics competition to design, build, program, and compete.",
        eligibility: "Grades 9-12",
        registrationFee: "500₹ per team",
        registrationDeadline: "Registration Closed",
        prizes: "Innovation awards and tech scholarships",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        status: "closed"
      },
      {
        name: "Art Exhibition",
        date: "April 10, 2024",
        time: "2:00 PM - 8:00 PM",
        location: "Community Arts Center",
        category: "Arts",
        description: "Annual student art exhibition showcasing creative talents.",
        eligibility: "All ages",
        registrationFee: "500₹ per submission",
        registrationDeadline: "Open until April 5, 2024",
        prizes: "Best in show awards and art supplies",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        status: "open"
      },
      {
        name: "Music Competition",
        date: "April 15, 2024",
        time: "7:00 PM - 10:00 PM",
        location: "Symphony Hall",
        category: "Arts",
        description: "Annual music competition for solo and ensemble performances.",
        eligibility: "All ages and skill levels",
        registrationFee: "250₹ per performer",
        registrationDeadline: "Open until April 10, 2024",
        prizes: "Performance opportunities and music scholarships",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        status: "open"
      }
    ];

    // Seed courses
    const sampleCourses: InsertCourse[] = [
      {
        name: "Introduction to Programming",
        duration: "12 weeks",
        level: "Beginner",
        price: "299₹",
        subject: "Computer Science",
        instructor: "Dr. Sarah Johnson",
        schedule: "Mondays & Wednesdays, 7:00 PM - 9:00 PM",
        startDate: "April 1, 2024",
        prerequisites: "None - beginner friendly",
        description: "Learn Python basics: variables, loops, functions, OOP, algorithms.",
        outcomes: ["Write basic Python programs", "Understand programming concepts", "Build simple applications", "Prepare for advanced courses"],
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Advanced Physics",
        duration: "16 weeks",
        level: "Advanced",
        price: "599₹",
        subject: "Physics",
        instructor: "Prof. Michael Chen",
        schedule: "Tuesdays & Thursdays, 6:00 PM - 8:30 PM",
        startDate: "April 3, 2024",
        prerequisites: "Calculus I & II, Basic Physics",
        description: "Study quantum mechanics, relativity, and modern physics.",
        outcomes: ["Understand quantum mechanics", "Apply relativity principles", "Conduct physics experiments", "Prepare for graduate studies"],
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Calculus Fundamentals",
        duration: "14 weeks",
        level: "Intermediate",
        price: "399₹",
        subject: "Mathematics",
        instructor: "Dr. Lisa Wang",
        schedule: "Mondays & Fridays, 5:30 PM - 7:30 PM",
        startDate: "April 8, 2024",
        prerequisites: "Pre-calculus or equivalent",
        description: "Master differential and integral calculus with practical applications.",
        outcomes: ["Solve differential equations", "Apply integration techniques", "Understand limits and continuity", "Prepare for advanced mathematics"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Data Science Bootcamp",
        duration: "20 weeks",
        level: "Intermediate",
        price: "899₹",
        subject: "Data Science",
        instructor: "Prof. David Kim",
        schedule: "Saturdays, 9:00 AM - 1:00 PM",
        startDate: "April 13, 2024",
        prerequisites: "Basic programming knowledge",
        description: "Learn data analysis, machine learning, and statistical modeling.",
        outcomes: ["Analyze complex datasets", "Build machine learning models", "Create data visualizations", "Present data insights"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      }
    ];

    // Seed workshops
    const sampleWorkshops: InsertWorkshop[] = [
      {
        name: "Coding Bootcamp for Beginners",
        duration: "5 days",
        level: "Beginner",
        price: "199₹",
        type: "Programming",
        instructor: "Tech Academy Team",
        schedule: "March 18-22, 2024, 9:00 AM - 5:00 PM daily",
        location: "Tech Hub Downtown",
        description: "Learn the basics of coding and build your first website in this intensive bootcamp.",
        included: ["All materials", "Lunch provided", "Certificate of completion", "Post-workshop support"],
        topics: ["HTML/CSS basics", "JavaScript fundamentals", "Basic programming logic", "Simple web projects"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Creative Writing Workshop",
        duration: "3 days",
        level: "Intermediate",
        price: "149₹",
        type: "Writing",
        instructor: "Authors Collective",
        schedule: "March 25-27, 2024, 10:00 AM - 4:00 PM",
        location: "Library Conference Center",
        description: "Explore the art of storytelling and develop your writing skills.",
        included: ["Writing materials", "Published author mentorship", "Feedback sessions", "Publishing guidance"],
        topics: ["Character development", "Plot structure", "Dialogue writing", "Editing techniques"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Robotics Workshop for Teens",
        duration: "4 days",
        level: "Intermediate",
        price: "299₹",
        type: "Engineering",
        instructor: "Robotics Institute",
        schedule: "April 1-4, 2024, 1:00 PM - 6:00 PM",
        location: "Engineering Lab",
        description: "Build and program robots using Arduino and Raspberry Pi.",
        included: ["All electronic components", "Programming software", "Robot kit to take home", "Certificate"],
        topics: ["Arduino programming", "Sensor integration", "Motor control", "Basic AI concepts"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      },
      {
        name: "Digital Art Bootcamp",
        duration: "6 days",
        level: "Beginner",
        price: "249₹",
        type: "Art",
        instructor: "Digital Arts Studio",
        schedule: "April 8-13, 2024, 2:00 PM - 6:00 PM",
        location: "Art Studio",
        description: "Master digital painting techniques and create stunning artwork.",
        included: ["Digital drawing tablet", "Software licenses", "Art supplies", "Portfolio creation"],
        topics: ["Digital painting basics", "Color theory", "Character design", "Digital illustration"],
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240"
      }
    ];

    // Add to storage
    sampleTutors.forEach(tutor => this.createTutor(tutor));
    sampleEvents.forEach(event => this.createEvent(event));
    sampleCourses.forEach(course => this.createCourse(course));
    sampleWorkshops.forEach(workshop => this.createWorkshop(workshop));
  }

  // Tutor methods
  async getTutors(): Promise<Tutor[]> {
    return Array.from(this.tutors.values());
  }

  async getTutor(id: string): Promise<Tutor | undefined> {
    return this.tutors.get(id);
  }

  async createTutor(insertTutor: InsertTutor): Promise<Tutor> {
    const id = randomUUID();
    const tutor: Tutor = { ...insertTutor, id };
    this.tutors.set(id, tutor);
    return tutor;
  }

  // Event methods
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id, status: insertEvent.status || 'Active' };
    this.events.set(id, event);
    return event;
  }

  // Course methods
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }

  // Workshop methods
  async getWorkshops(): Promise<Workshop[]> {
    return Array.from(this.workshops.values());
  }

  async getWorkshop(id: string): Promise<Workshop | undefined> {
    return this.workshops.get(id);
  }

  async createWorkshop(insertWorkshop: InsertWorkshop): Promise<Workshop> {
    const id = randomUUID();
    const workshop: Workshop = { ...insertWorkshop, id };
    this.workshops.set(id, workshop);
    return workshop;
  }
}

export const storage = new MemStorage();
