import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      console.error("Contact form: backend env missing");
      return { ok: false as const, error: "The form is temporarily unavailable. Please email or WhatsApp me." };
    }
    const client = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await client.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      project_type: data.projectType,
      message: data.message,
    });
    if (error) {
      console.error("Contact insert failed", error.message);
      return { ok: false as const, error: "Something went wrong sending your message. Please try again." };
    }
    return { ok: true as const };
  });
