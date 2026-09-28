import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p className="flex items-center gap-2 font-bold text-foreground">
          <span aria-hidden>🐾</span>
          {siteConfig.name}
        </p>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Feito com amor pelos pets.
        </p>
      </div>
    </footer>
  );
}
