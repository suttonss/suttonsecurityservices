/**
 * Static site generator for Cloudflare Pages.
 * Renders every EJS view to plain HTML in dist/ and copies public assets,
 * so the site deploys as a fully static build (npm run build -> dist/).
 */
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const VIEWS = path.join(ROOT, 'views');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');

// route -> view file
const pages = {
  '/': 'index',
  '/security-systems': 'security-systems',
  '/why-sutton': 'why-sutton',
  '/crime-in-your-area': 'crime',
  '/quote': 'quote',
  '/existing-customers': 'existing-customers',
  '/moving-home': 'moving-home',
  '/help': 'help',
  '/privacy': 'privacy',
  '/terms': 'terms'
};

function outPath(route) {
  return route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.slice(1), 'index.html');
}

async function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Copy static assets (css, js, images, robots, sitemap)
  fs.cpSync(PUBLIC, DIST, { recursive: true });

  // Single cache-busting token for this build, shared across all pages
  const build = Date.now();

  // Render each page
  for (const [route, view] of Object.entries(pages)) {
    const html = await ejs.renderFile(path.join(VIEWS, view + '.ejs'), { build }, {
      views: [VIEWS]
    });
    const file = outPath(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log('rendered', route, '->', path.relative(ROOT, file));
  }

  console.log('\nStatic build complete:', Object.keys(pages).length, 'pages in dist/');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
