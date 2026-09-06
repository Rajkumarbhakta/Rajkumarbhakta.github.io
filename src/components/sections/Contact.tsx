"use client";

import { useState } from "react";
import { Button, Card, Icon, Reveal, RevealGroup, SectionHeader } from "@/components/ui";
import { TextArea, TextField } from "@/components/ui/TextField";
import { contactDetails, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const TONE_CLASSES = {
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
} as const;

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    // Static export — no backend. Hand off to the visitor's mail client.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app…");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.id]: e.target.value });

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          supporting="Have a project in mind? Let's build something worth shipping."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Contact rows are one connected vertical run. */}
          <RevealGroup className="run-y h-fit">
            {contactDetails.map(({ label, value, href, icon, tone }) => (
              <Reveal asChild key={label}>
                <a
                  href={href}
                  className="state-layer flex items-center gap-4 bg-surface-container p-5"
                >
                  <span
                    className={cn(
                      "grid size-12 shrink-0 place-items-center rounded-fab",
                      TONE_CLASSES[tone],
                    )}
                  >
                    <Icon name={icon} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-label-sm uppercase tracking-[1.2px] text-on-surface-variant">
                      {label}
                    </span>
                    <span className="block truncate text-body-lg text-on-surface">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal>
            <Card variant="outlined" className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextField
                    id="name"
                    label="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <TextField
                  id="subject"
                  label="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextArea
                  id="message"
                  label="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  supporting="Tell me a little about what you're building."
                />

                <Button type="submit" variant="filled" size="lg" className="self-start">
                  Send message
                  <Icon name="send" size={20} />
                </Button>

                <p aria-live="polite" className="text-body-md text-on-surface-variant">
                  {status}
                </p>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
