// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages: set site to your repo URL and base to '/repo-name/' if not using a custom domain / user site.
// Example user site (username.github.io): base: '/'
// Example project site: base: '/your-repo-name/'
export default defineConfig({
  site: "https://iyeojin.github.io",
  base: "/",
  trailingSlash: "ignore",
});
