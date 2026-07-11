/** Prefix a public asset path with Astro `base` (GitHub Pages project sites). */
export function withBase(path: string): string {
  if (!path || /^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

/** Pathname relative to site base, always starting with `/`. */
export function pathFromBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = pathname.replace(/\/$/, "") || "/";
  if (!base) return clean || "/";
  if (clean === base) return "/";
  if (clean.startsWith(`${base}/`)) return clean.slice(base.length) || "/";
  return clean || "/";
}
