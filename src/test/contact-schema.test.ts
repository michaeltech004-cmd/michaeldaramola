import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { name: "Jane", email: "jane@store.com", projectType: "Store redesign", message: "I need a redesign of my store." };

describe("contact form rules", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("requires a name", () => {
    expect(contactSchema.safeParse({ ...valid, name: "  " }).success).toBe(false);
  });
  it("requires a valid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("requires a project type", () => {
    expect(contactSchema.safeParse({ ...valid, projectType: "" }).success).toBe(false);
  });
  it("rejects messages over 2000 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(2001) }).success).toBe(false);
  });
});
