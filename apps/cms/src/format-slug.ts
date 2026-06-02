import { sum } from "@demo/utils";

export function formatSlug(title: string): string {
  sum(1, 2);
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
