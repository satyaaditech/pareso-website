# 🚀 PARESO Website - Deployment Guide

Website sudah berhasil di-push ke GitHub! 🎉

**Repository**: https://github.com/satyaaditech/pareso-website

---

## 📋 Langkah Deploy ke GitHub Pages

### Step 1: Enable GitHub Pages

1. Buka repository: https://github.com/satyaaditech/pareso-website
2. Klik **Settings** (tab paling kanan)
3. Scroll ke bagian **Pages** (di sidebar kiri)
4. Pada **Build and deployment**:
   - **Source**: Pilih **GitHub Actions**

### Step 2: Create Workflow File

Karena ada permission issue dengan workflow, kita perlu buat file workflow manual via GitHub web:

1. Di repository, klik **Actions** tab
2. Klik **"set up a workflow yourself"** atau **"New workflow"**
3. Paste kode berikut:

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

4. Simpan file dengan nama: `.github/workflows/deploy.yml`
5. Commit dengan message: "Add GitHub Pages deployment workflow"

### Step 3: Wait for Deployment

- Workflow akan otomatis running
- Cek progress di tab **Actions**
- Tunggu sampai status menjadi ✅ (sekitar 2-3 menit)

### Step 4: Access Your Website!

Website akan live di:

**https://satyaaditech.github.io/pareso-website/**

---

## 🎨 Website Features

✅ **Hero Section** - "Menjadikan Herbal Indonesia Mendunia"  
✅ **About PARESO** - 100+ UMKM binaan  
✅ **Program Unggulan** - 4-level system  
✅ **UMKM Highlights** - Success stories  
✅ **Produk Showcase** - Featured products  
✅ **Stats** - Impact metrics  
✅ **Partnership** - Mitra strategis  
✅ **CTA** - Bergabung dengan PARESO  
✅ **Footer** - Kontak & social media  

---

## 🛠️ Update Website

Untuk update konten di masa depan:

```bash
# 1. Edit files (app/page.tsx, images, dll)
cd /Users/satyaadidharma/obsidian/fullstack/fullstack/Pareso/pareso-website

# 2. Commit changes
git add .
git commit -m "Update: deskripsi perubahan"

# 3. Push to GitHub
git push

# 4. Workflow akan auto-deploy!
```

---

## 📱 Test Locally

```bash
# Development server
npm run dev
# Open: http://localhost:3000

# Production build
npm run build
# Check: /out folder
```

---

## 🎯 Next Steps (Optional)

### 1. Custom Domain

Jika ingin pakai domain sendiri (misal: `pareso.id`):

1. Beli domain
2. Di GitHub Settings > Pages > Custom domain
3. Masukkan domain Anda
4. Update DNS records di provider domain:
   ```
   Type: CNAME
   Name: www
   Value: satyaaditech.github.io
   ```

### 2. Add More Pages

```bash
# Buat halaman baru
mkdir app/tentang
# Buat file: app/tentang/page.tsx
```

### 3. Add Contact Form

- Gunakan service seperti Formspree atau EmailJS
- Atau integrate dengan backend API

### 4. Analytics

- Add Google Analytics
- Add Facebook Pixel
- Track conversions

---

## 🐛 Troubleshooting

### Website tidak muncul?
- Cek tab **Actions** - pastikan workflow sukses
- Tunggu 5-10 menit setelah deployment
- Clear browser cache

### Images tidak muncul?
- Pastikan images ada di folder `public/images/`
- Check `next.config.ts` - `images.unoptimized: true`

### 404 Error?
- Check `basePath` di `next.config.ts`
- Pastikan sesuai dengan nama repository

---

## 📞 Support

Jika ada masalah, cek:
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**🎉 Selamat! Website PARESO sudah online!**

Visit: **https://satyaaditech.github.io/pareso-website/**
