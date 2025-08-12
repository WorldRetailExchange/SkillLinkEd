import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Tutors routes
  app.get("/api/tutors", async (req, res) => {
    try {
      const tutors = await storage.getTutors();
      res.json(tutors);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tutors" });
    }
  });

  app.get("/api/tutors/:id", async (req, res) => {
    try {
      const tutor = await storage.getTutor(req.params.id);
      if (!tutor) {
        return res.status(404).json({ message: "Tutor not found" });
      }
      res.json(tutor);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tutor" });
    }
  });

  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  // Courses routes
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourse(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // Workshops routes
  app.get("/api/workshops", async (req, res) => {
    try {
      const workshops = await storage.getWorkshops();
      res.json(workshops);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch workshops" });
    }
  });

  app.get("/api/workshops/:id", async (req, res) => {
    try {
      const workshop = await storage.getWorkshop(req.params.id);
      if (!workshop) {
        return res.status(404).json({ message: "Workshop not found" });
      }
      res.json(workshop);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch workshop" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
