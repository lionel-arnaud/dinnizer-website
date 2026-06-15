# DECISIONS.md — Assumptions & design choices

## ASSUMED (safe defaults, can be overridden)

| ID | Decision | Rationale |
|----|----------|-----------|
| D1 | **Static HTML/CSS/JS** — no framework, no SSG | Matches the existing `game-timer` pattern; zero server-side runtime; simplest ops story |
| D2 | **Markdown → HTML at deploy time** via a tiny shell script using `pandoc` (or `cmark`) | No JS-fetch trick needed; clean HTML served; works without JS; pandoc is available on serverannah |
| D3 | **Design**: light minimal — black/dark-slate on white/light-grey, system font stack, palette sourced from colorhunt.co | User confirmed Q2-B |
| D4 | **English primary with bilingual toggle (EN/FR)** | User confirmed Q1 |
| D5 | **Contact**: email link only (`contact@dinnizer.com`) — no form | No backend, no spam filtering to manage; fits the no-bloat ethos |
| D6 | **No cookies / no analytics** by default | GDPR compliance at zero cost; consistent with evidence-based "no vanity metrics" posture |
| D7 | **Blog file layout**: `Communication/blog/YYYY-MM-DD-slug.md` with YAML front matter (title, date, tags) | Simple, sortable by filename, machine-readable |
| D8 | **Deploy script**: `deploy.sh` in `Communication/` — runs `pandoc` build then `rsync` to server | Single command, reproducible, no CI needed for now |
| D9 | **Container name**: `dinnizer-website` | Follows naming convention; avoids collision with existing `dinnizer` container (the Rails app) |
| D10 | **nginx:alpine** for the static server | Same image as `game-timer`; tiny, battle-tested |
| D11 | **`dinnizer.com` → `www.dinnizer.com`** 308 redirect in Caddy | Canonical URL pattern consistent with `aumenuilya.fr` |
| D12 | **Lionel Arnaud named on the site** as the individual behind Dinnizer SAS | Builds personal credibility; standard for freelance consulting |

## QUESTIONS (need your input before build)

See Phase 0 output below.
