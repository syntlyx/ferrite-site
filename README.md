# ferrite-site

The website for [ferrite](https://github.com/syntlyx/ferrite-server) —
self-hosted DNS that blocks ads & trackers and routes any device through a
tunnel. Landing page, docs, API reference, and download instructions.

Related repos: [ferrite-server](https://github.com/syntlyx/ferrite-server)
(the server) · [ferrite-web](https://github.com/syntlyx/ferrite-web)
(the web panel).

## Stack

- [Astro](https://astro.build) static build, no client framework. Page shells
  live in `src/pages/*.astro`; the actual markup is plain HTML in
  `src/content/*.html` pulled in with `?raw` (plus small vanilla-JS snippets
  next to it).
- One shared stylesheet: `src/styles/ferrite.css`.
- `build.format: "file"` emits `/docs.html`, `/api.html`, … so in-page links
  can point at `*.html` directly.
- Static assets in `public/` are copied to the site root as-is — including
  `ferrite-grafana-dashboard.json`, the importable Grafana dashboard linked
  from the API page's Monitoring section.

## Develop

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # static build into dist/
pnpm preview   # serve the built dist/
```

## Deploy

Served as [Cloudflare Workers static
assets](https://developers.cloudflare.com/workers/static-assets/) — see
`wrangler.jsonc` (`dist/` is the asset directory, 404s fall back to the 404
page).

```sh
pnpm build
npx wrangler deploy
```

## License

[MIT](LICENSE)
