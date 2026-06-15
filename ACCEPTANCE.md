# ACCEPTANCE.md — Done-conditions (all verifiable)

## Deployment

- [ ] A1. `curl -I https://www.dinnizer.com` returns HTTP 200 (Caddy HTTPS cert issued)
- [ ] A2. `curl -I https://dinnizer.com` returns 3xx redirect to `https://www.dinnizer.com`
- [ ] A3. Container `dinnizer-website` exists, is running, joined to `autoconfig-services` network
- [ ] A4. Caddy config `/opt/reverse-proxy/caddy/Caddyfile` contains entries for `www.dinnizer.com` and `dinnizer.com`
- [ ] A5. Caddy reloads without error after config change

## Pages & navigation

- [ ] A6. Home page (`/`) loads — headline + value proposition visible
- [ ] A7. Services page (`/services.html` or section) loads — all service categories listed
- [ ] A8. Vision page (`/vision.html`) loads — evidence-based entrepreneurship philosophy
- [ ] A9. Blog index (`/blog/`) loads — lists available articles with titles + dates
- [ ] A10. Individual article (`/blog/article-slug/`) renders Markdown as HTML
- [ ] A11. Contact section/page loads with at minimum an email address
- [ ] A12. All internal navigation links resolve (no 404s from `<a href>` scan)

## Content

- [ ] A13. Services section covers: HR, Finance, Purchasing, Cash, non-dilutive funding, Admin, Office, Legal, IP, Regulatory, Sysadmin, AI automations, ERP (Odoo), team/subcontractor management
- [ ] A14. One draft blog article on evidence-based entrepreneurship exists as a Markdown file in `Communication/blog/`
- [ ] A15. The article is rendered and accessible from the blog index

## Quality

- [ ] A16. Site passes HTML validation (no fatal errors) — `tidy -q -e index.html`
- [ ] A17. Site is responsive — viewport meta tag present, no horizontal scroll on 375px width (visual check)
- [ ] A18. No external CDN dependencies that block render in offline/air-gap (fonts/icons bundled or gracefully degraded)
- [ ] A19. Page titles are meaningful (`<title>` tags set per page)
