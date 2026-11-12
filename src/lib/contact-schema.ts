import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  projectType: z.string().trim().min(1, "Please choose a project type").max(80),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (at least 10 characters)")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
