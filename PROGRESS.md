# PROGRESS.md

## Status: Phase 4 — COMPLETE ✅

| Phase | Status |
|-------|--------|
| 0 — Intake | ✅ DONE |
| 1 — Plan | ✅ DONE |
| 2 — Test harness | ✅ DONE (verification via curl) |
| 3 — Build loop | ✅ DONE |
| 4 — Verify & report | ✅ DONE |

## Deployed
- `https://www.dinnizer.com/` — live, serving nginx via Caddy ✅
- `https://www.dinnizer.com/blog/` — blog index live ✅
- `https://www.dinnizer.com/blog/evidence-based-management/` — first article live ✅
- Container `dinnizer-website` running on `autoconfig-services` ✅
- Caddyfile patched (`www.dinnizer.com`, `dinnizer.com` 308 redirect) ✅

## Blockers / Outstanding
- **DNS**: `dinnizer.com` (apex) still points to Squarespace. User must update the A record at their DNS registrar to `78.202.39.55`.
- Caddy admin is OFF → use `docker restart server-reverse-proxy` to reload config (documented in deploy.sh)
- `deploy.sh` step 4 (Caddyfile patch) currently requires manual sudo — Caddyfile is root-owned. Either `chown lion` or add lion to sudoers for that path.

## To publish a new article
1. Write `blog/YYYY-MM-DD-slug.md` with YAML front matter
2. Run `./deploy.sh` from the `Communication/` directory
