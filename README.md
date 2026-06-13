# dinnizer-website

Source for [www.dinnizer.com](https://www.dinnizer.com) — the public site for Dinnizer SAS.

## What this is

A static HTML/CSS/JS bilingual (EN/FR) website for a fractional Deputy CEO consultancy.
Blog posts are written in Markdown and compiled to HTML at deploy time via `pandoc`.

## Structure

```
site/           Static site assets (HTML, CSS, JS)
blog/           Markdown source files for blog articles
templates/      Pandoc HTML template for blog posts
build.sh        Compile blog/*.md → site/blog/**/index.html
deploy.sh       Full deploy: build + rsync to server + container health check
```

## Publishing a new article

```bash
# 1. Write the article
vim blog/YYYY-MM-DD-your-slug.md
```

Front matter format:
```yaml
---
title: "Your article title"
date: 2026-06-14
author: Lionel Arnaud
tags: [management, evidence]
excerpt: "One-sentence summary shown in the blog index."
lang: en
---
```

```bash
# 2. Deploy
./deploy.sh
```

## Calendar booking (Cal.com)

To activate the inline booking embed:
1. Create a free account at [cal.com](https://cal.com)
2. Create a "Discovery call — 30 min" event type
3. Set `CAL_LINK` in `site/js/i18n.js` to your actual booking path
4. Run `./deploy.sh`

## Infrastructure

- Server: `serverannah` (192.168.1.100) — nginx:alpine container `dinnizer-website`
- Reverse proxy: Caddy 2 — `/opt/reverse-proxy/caddy/Caddyfile`
- Docker network: `autoconfig-services`
- Build tool: `pandoc` (installed on serverannah; builds run remotely)

## DNS note

`dinnizer.com` apex A record must point to `78.202.39.55` (serverannah's public IP).
The `www.dinnizer.com` A record is already set. Caddy handles the apex → www redirect.
