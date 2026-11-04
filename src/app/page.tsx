import { siteConfig } from "@/config/site";

// Placeholder until the UI design is implemented.
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6">
      <h1 className="font-display text-heading">{siteConfig.name}</h1>
      <p className="text-muted">{siteConfig.description}</p>
    </main>
  );
}
