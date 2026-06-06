"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/boredcreator124/",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-baddoo-687573310",
    icon: Linkedin,
  },
  {
    name: "X / Twitter",
    href: "https://x.com/username",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:yupthatsme004@gmail.com",
    icon: Mail,
  },
];

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Name is required";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateForm(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);

    try {
      // Google Form submission endpoint
      const formId = "1FAIpQLSeX2F8RL98FchfVJbCm207ul2DcBsUIdM5gKop9e3Gy0ynw2A";
      const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

      const formData = new FormData();
      formData.append("entry.202502118", form.name); // Name
      formData.append("entry.824027626", form.email); // Email
      formData.append("entry.1826149747", form.subject); // Subject
      formData.append("entry.979661988", form.message); // Message

      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Google Forms doesn't return a response in no-cors mode, so we assume success
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setErrors({ email: "Network error. Please try again." });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or just want to say hi?"
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-5">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm text-text-secondary"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-primary-secondary px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-text-primary/30"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-primary-secondary px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-text-primary/30"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm text-text-secondary"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-primary-secondary px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-text-primary/30"
                  placeholder="What is this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-border bg-primary-secondary px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-text-primary/30"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : submitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Sent!
                  </motion.span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right" className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-primary-secondary p-6">
              <h3 className="mb-4 font-semibold text-text-primary">
                Connect with me
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-tertiary">
                Whether you want to collaborate on a project, discuss game
                development, or just chat about tech, feel free to reach out
                through any of these channels.
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-border bg-primary-tertiary px-4 py-2.5 text-sm text-text-secondary transition-all hover:border-text-primary/20 hover:text-text-primary"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
