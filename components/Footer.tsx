import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-tertiary">
          &copy; {year} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/boredcreator124/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-baddoo-687573310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-text-primary"
            aria-label="X / Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="mailto:yupthatsme004@gmail.com"
            className="text-text-tertiary transition-colors hover:text-text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
