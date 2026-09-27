#!/usr/bin/env bash
# Build blog posts from Markdown → HTML using pandoc.
# Run from the Communication/ directory.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BLOG_SRC="$SCRIPT_DIR/blog"
BLOG_OUT="$SCRIPT_DIR/site/blog"
TEMPLATE="$SCRIPT_DIR/templates/blog-post.html"

command -v pandoc >/dev/null || { echo "pandoc not found"; exit 1; }

# Collect article metadata for index generation
declare -a articles=()

for md in "$BLOG_SRC"/*.md; do
  [[ -f "$md" ]] || continue

  filename="$(basename "$md" .md)"   # e.g. 2026-06-13-evidence-based-management
  slug="${filename:11}"               # strip YYYY-MM-DD- prefix
  date="${filename:0:10}"             # YYYY-MM-DD

  # Extract front matter fields with yq (or fallback to grep)
  if command -v yq >/dev/null; then
    title="$(yq -r '.title // ""' "$md" 2>/dev/null || true)"
    excerpt="$(yq -r '.excerpt // ""' "$md" 2>/dev/null || true)"
    lang="$(yq -r '.lang // "en"' "$md" 2>/dev/null || true)"
  else
    title="$(grep -m1 '^title:' "$md" | sed 's/^title: *//' | tr -d '"' || true)"
    excerpt="$(grep -m1 '^excerpt:' "$md" | sed 's/^excerpt: *//' | tr -d '"' || true)"
    lang="en"
  fi

  [[ -z "$title" ]] && title="$slug"
  [[ -z "$excerpt" ]] && excerpt=""
  [[ -z "$lang" ]] && lang="en"

  out_dir="$BLOG_OUT/$slug"
  mkdir -p "$out_dir"

  pandoc "$md" \
    --template="$TEMPLATE" \
    --from=markdown+yaml_metadata_block \
    --to=html5 \
    --variable="date:$date" \
    --variable="excerpt:$excerpt" \
    --variable="lang:$lang" \
    --output="$out_dir/index.html"

  echo "  built: $slug"

  articles+=("$date|$slug|$title|$excerpt")
done

# Sort articles newest-first
IFS=$'\n' sorted=($(printf '%s\n' "${articles[@]}" | sort -r))
unset IFS

# Generate blog/index.html
cat > "$BLOG_OUT/index.html" << 'HEADER'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title data-i18n-title="page.blog">Blog — Dinnizer</title>
  <meta name="description" content="Perspectives from Lionel ARNAUD on evidence-based management, deep-tech operations, and better business decisions." />
  <link rel="canonical" href="https://www.dinnizer.com/blog/" />
  <link rel="stylesheet" href="../css/style.css?v=20260927" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%230D2137'/><text y='.85em' font-size='70' x='15'>D</text></svg>" />
</head>
<body>
<a class="skip-link" href="#main-content" data-i18n="nav.skip">Skip to content</a>

<nav>
  <div class="nav-inner">
    <a class="nav-logo" href="../">Dinnizer<span>.</span></a>
    <ul class="nav-links" id="nav-links">
      <li><a href="../#services" data-i18n="nav.services">Services</a></li>
      <li><a href="../#vision"   data-i18n="nav.vision">Approach</a></li>
      <li><a href="../#about" data-i18n="nav.about">Myself</a></li>
      <li><a href="./"          data-i18n="nav.blog">Blog</a></li>
      <li><a href="../#book" class="nav-book" data-i18n="nav.book">Book a call</a></li>
    </ul>
    <div class="nav-actions">
      <div class="lang-toggle" role="group" aria-label="Language">
        <button data-lang="en" lang="en" aria-label="English" class="active" aria-pressed="true">EN</button>
        <button data-lang="fr" lang="fr" aria-label="Français" aria-pressed="false">FR</button>
      </div>
      <button class="nav-hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<main id="main-content" tabindex="-1">
<section style="background:var(--navy);color:#fff;padding:4rem 0 3rem;">
  <div class="container">
    <span class="section-label" style="color:#93C6E7;" data-i18n="blog.label">Insights</span>
    <h1 style="font-size:2.25rem;font-weight:800;letter-spacing:-0.02em;margin:.5rem 0 .75rem;color:#fff;" data-i18n="blog.h2">Blog</h1>
    <p style="color:rgba(255,255,255,.8);max-width:650px;" data-i18n="blog.intro">Perspectives on evidence-based management, deep-tech operations, and better business decisions. Articles are currently published in English.</p>
  </div>
</section>

<section>
  <div class="container">
    <ul class="blog-list">
HEADER

if [[ ${#sorted[@]} -eq 0 ]]; then
  echo '      <li><p data-i18n="blog.empty">No articles yet.</p></li>' >> "$BLOG_OUT/index.html"
else
  for entry in "${sorted[@]}"; do
    IFS='|' read -r art_date art_slug art_title art_excerpt <<< "$entry"
    cat >> "$BLOG_OUT/index.html" << ITEM
      <li class="blog-item" lang="en">
        <div class="blog-item-date">$art_date</div>
        <div class="blog-item-title"><a href="$art_slug/">$art_title</a></div>
        <div class="blog-item-excerpt">$art_excerpt</div>
      </li>
ITEM
  done
fi

cat >> "$BLOG_OUT/index.html" << 'FOOTER'
    </ul>
  </div>
</section>

</main>

<footer>
  <div class="container">
    <span data-i18n="footer.copy">© 2026 Dinnizer SAS — All rights reserved.</span>
    &nbsp;·&nbsp;
    <a href="mailto:contact@dinnizer.com">contact@dinnizer.com</a>
  </div>
</footer>

<script src="../js/i18n.js?v=20260927" defer></script>
</body>
</html>
FOOTER

echo "Blog index generated with ${#sorted[@]} article(s)."
echo "Build complete → site/blog/"
