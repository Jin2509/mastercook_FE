import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Without this, tailwind-merge reads `text-display` as a colour and drops it next to `text-muted`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "heading", "title"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
