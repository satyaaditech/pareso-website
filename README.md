# PARESO Website

Website resmi Pawon Rempah Surakarta (PARESO) - Pusat Pengembangan UMKM Herbal Terkemuka di Indonesia.

## 🌿 About

PARESO adalah organisasi pembina UMKM berbasis rempah dan herbal yang menaungi 100+ UMKM di wilayah eks-Karesidenan Surakarta. Website ini dibangun dengan estetika Wes Anderson dan nuansa rempah nusantara.

## 🎨 Design Features

- **Wes Anderson Color Palette**: Pastel coral, sage green, cream, terracotta, dusty rose, deep teal
- **Typography**: Playfair Display (headings) + Inter (body)
- **Responsive Design**: Mobile-first approach
- **Premium Aesthetic**: Classic yet luxurious feel

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run build
```

## 🌐 Deployment to GitHub Pages

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: PARESO homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pareso-website.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Create `.github/workflows/deploy.yml` (see below)

### 3. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Push and Deploy

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

Your site will be live at: `https://YOUR_USERNAME.github.io/pareso-website/`

## 📁 Project Structure

```
pareso-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Generated images
│       ├── hero-spices.png
│       ├── products-showcase.png
│       └── workshop.png
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 🎯 Sections

- ✅ Navigation (sticky header)
- ✅ Hero Section (full-screen with tagline)
- ✅ About PARESO
- ✅ Program Unggulan (4-level system)
- ✅ UMKM Binaan Highlights
- ✅ Produk Unggulan
- ✅ Stats/Impact
- ✅ Partnership
- ✅ CTA Section
- ✅ Footer

## 🔧 Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'pastel-coral': '#F4A896',
  'sage-green': '#8B9D83',
  // ... add more colors
}
```

### Update Content

Edit `app/page.tsx` to modify text, images, and sections.

### Add New Pages

Create new files in `app/` directory:
- `app/about/page.tsx` → `/about`
- `app/products/page.tsx` → `/products`

## 📱 Local Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
```

## 🐛 Troubleshooting

### Images not showing on GitHub Pages

Make sure `next.config.ts` has:
```typescript
images: {
  unoptimized: true,
}
```

### 404 on GitHub Pages

Check that `basePath` in `next.config.ts` matches your repository name.

## 📄 License

© 2026 PARESO. All rights reserved.

## 🤝 Contributing

For questions or contributions, contact: info@pareso.id

---

**Built with ❤️ for Indonesian herbal entrepreneurs**
