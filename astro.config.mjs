import { defineConfig } from "astro/config";

// Static marketing/docs site. `format: "file"` emits /docs.html, /api.html,
// /download.html (and /404.html) so the existing in-page links — which point at
// `*.html` — keep working unchanged.
export default defineConfig({
  build: { format: "file" },
});
