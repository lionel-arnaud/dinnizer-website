# BRIEF.md

## Goal (restated)

Build and deploy a public-facing website at **www.dinnizer.com**, hosted on **serverannah** behind the existing **Caddy** reverse-proxy alongside `aumenuilya.fr`, `tabletop-timer.com`, etc.

The site markets **Dinnizer SAS**'s freelance **Deputy CEO** consulting offer:
operational / internal management mandates (HR, Finance, Admin, Legal, IP, Regulatory, Purchasing, Cash, non-dilutive funding, ERP deployment such as Odoo, sysadmin, AI automations, team/subcontractor supervision — both "run" and "build" modes).

The editorial line is **evidence-based entrepreneurship**: rigorous, corporate, no bullshit — no personality tests, no market-timing claims, results traceable to evidence.

A **blog** section allows publishing articles written as **Markdown files** stored in this `Communication/` folder (structure to be defined).

A first **draft blog article** on evidence-based entrepreneurship/management (based on notes in this project) is to be scaffolded.

## Infrastructure context

| Component | Detail |
|-----------|--------|
| Server | `serverannah` — 192.168.1.100, SSH alias |
| Reverse proxy | Caddy 2.10-alpine in container `server-reverse-proxy`, config at `/opt/reverse-proxy/caddy/Caddyfile` |
| Docker network | `autoconfig-services` (all containers joined to it, Caddy resolves by name) |
| Static site pattern | nginx:alpine container with bind-mount to `/opt/<name>/site:/usr/share/nginx/html:ro` |
| Existing similar site | `game-timer` → nginx → `/opt/game-timer/site/` |
| Missing Caddy entries | `www.dinnizer.com` and `dinnizer.com` (no redirect exists yet) |

## Source of truth for content

`Communication/` folder (this repo) — Markdown files, assets, build scripts.
Server path: `/opt/dinnizer-website/`
