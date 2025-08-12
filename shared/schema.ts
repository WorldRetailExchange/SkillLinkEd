import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tutors = pgTable("tutors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  specialties: text("specialties").array().notNull(),
  experience: text("experience").notNull(),
  rating: text("rating").notNull(),
  price: text("price").notNull(),
  availability: text("availability").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  eligibility: text("eligibility").notNull(),
  registrationFee: text("registration_fee").notNull(),
  registrationDeadline: text("registration_deadline").notNull(),
  prizes: text("prizes").notNull(),
  image: text("image").notNull(),
  status: text("status").notNull().default("open"),
});

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  duration: text("duration").notNull(),
  level: text("level").notNull(),
  price: text("price").notNull(),
  subject: text("subject").notNull(),
  instructor: text("instructor").notNull(),
  schedule: text("schedule").notNull(),
  startDate: text("start_date").notNull(),
  prerequisites: text("prerequisites").notNull(),
  description: text("description").notNull(),
  outcomes: text("outcomes").array().notNull(),
  image: text("image").notNull(),
});

export const workshops = pgTable("workshops", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  duration: text("duration").notNull(),
  level: text("level").notNull(),
  price: text("price").notNull(),
  type: text("type").notNull(),
  instructor: text("instructor").notNull(),
  schedule: text("schedule").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  included: text("included").array().notNull(),
  topics: text("topics").array().notNull(),
  image: text("image").notNull(),
});

export const insertTutorSchema = createInsertSchema(tutors).omit({
  id: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
});

export const insertWorkshopSchema = createInsertSchema(workshops).omit({
  id: true,
});

export type InsertTutor = z.infer<typeof insertTutorSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertWorkshop = z.infer<typeof insertWorkshopSchema>;

export type Tutor = typeof tutors.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Workshop = typeof workshops.$inferSelect;
