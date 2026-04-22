import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary">
            <Code2 className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          Acme
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
