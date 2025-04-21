export async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function sanitizeForClassName(name: string): string {
  return name
    .normalize("NFD") // Separate accents from letters
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-') // Replace non-alphanumeric/hyphen with hyphen
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}
