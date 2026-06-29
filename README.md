# VeltrixAPI

A full-stack API management and monetization platform — manage API keys, monitor traffic, publish APIs to a marketplace, set up webhooks, and control subscription plans.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/veltrix run dev` — run the frontend (port assigned by workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind v4, TanStack Query, Wouter, Recharts
- API: Express 5 (port 8080, mounted under `/api`)
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec → `lib/api-spec/openapi.yaml`)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — OpenAPI source of truth
- `lib/api-client-react/src/generated/api.ts` — generated TanStack Query hooks
- `lib/api-zod/src/generated/` — generated Zod schemas
- `lib/db/src/schema/` — Drizzle DB schema (users, api-keys, managed-apis, endpoints, plans, logs, webhooks)
- `artifacts/api-server/src/routes/` — Express route handlers
- `artifacts/veltrix/src/pages/` — React pages (dashboard, api-keys, apis, logs, analytics, marketplace, webhooks, plans, settings)
- `artifacts/veltrix/src/index.css` — Tailwind v4 theme (dark futuristic violet/cyan)

## Architecture decisions

- Contract-first: OpenAPI spec drives both server Zod schemas and client React Query hooks via Orval codegen
- Auth: simple base64 token (`userId:timestamp:veltrix`) with SHA-256+salt password hashing; stored in localStorage
- Drizzle `inArray()` must be used instead of raw `sql\`ANY()\`` for array membership queries — Drizzle's `ANY()` parameterization is broken
- API server mounts all routes under `/api` prefix via `app.use("/api", router)` — routes in router files do NOT include `/api`
- Frontend uses `Redirect` from wouter (not `setLocation`) for protected route redirects to avoid render-time state updates

## Product

- **Dashboard**: real-time metrics (requests, success rate, latency, uptime), traffic charts, top APIs, status breakdown
- **API Keys**: create, rotate, revoke, delete keys with per-key rate limits and request counts
- **Managed APIs**: register and publish APIs with versioning, endpoints, uptime tracking
- **Request Logs**: paginated log viewer with status filtering (success/error/rate-limited)
- **Analytics**: time-series charts (1h/24h/7d/30d), top APIs by volume, status distribution
- **Marketplace**: browse and discover public APIs with ratings and review counts
- **Webhooks**: configure event-driven HTTP callbacks with test delivery
- **Plans**: manage subscription tiers with request limits, rate limits, feature lists
- **Settings**: account profile, security, notification preferences

## Gotchas

- Drizzle `inArray()` for array membership — do NOT use raw `sql\`= ANY()\`` (generates invalid SQL)
- After any change to API server code, the workflow rebuilds (takes ~30s) — always rebuild before testing
- Tailwind v4: `dark` is a variant, not a utility — cannot use `@apply dark` in CSS; add `.dark` class to HTML element instead
- Run `pnpm --filter @workspace/api-spec run codegen` after any OpenAPI spec change before editing routes/pages

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
