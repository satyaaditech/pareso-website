# 🚀 Quick Setup Guide - PARESO GitHub Pages

## Status: Ready to Deploy! ✅

Code sudah di-push ke: **https://github.com/satyaaditech/pareso-website**

---

## 📋 Langkah Terakhir (2 Menit!)

### Step 1: Enable GitHub Pages

1. **Buka repository**: https://github.com/satyaaditech/pareso-website/settings/pages

2. **Pada "Build and deployment"**:
   - **Source**: Pilih **GitHub Actions** (bukan Deploy from a branch)
   
3. **Klik Save** (jika ada)

### Step 2: Trigger Deployment

Workflow sudah ada di repository. Untuk trigger deployment:

**Opsi A: Via GitHub Web**
1. Go to: https://github.com/satyaaditech/pareso-website/actions
2. Klik workflow **"Deploy Next.js to GitHub Pages"**
3. Klik **"Run workflow"** > **"Run workflow"**

**Opsi B: Push Trigger (Otomatis)**
Workflow akan auto-run saat ada push ke main branch.

### Step 3: Wait & Visit!

- ⏳ Tunggu 2-3 menit (cek progress di Actions tab)
- ✅ Setelah selesai, visit: **https://satyaaditech.github.io/pareso-website/**

---

## 🎯 Yang Akan Tampil

Homepage PARESO yang indah dengan:
- Hero section "Menjadikan Herbal Indonesia Mendunia"
- About PARESO
- Program 4-level
- UMKM highlights
- Produk showcase
- Stats & partnership
- CTA & footer

**BUKAN** file README atau documentation!

---

## 🐛 Troubleshooting

### Workflow gagal?
- Pastikan GitHub Pages sudah enabled di Settings > Pages
- Source harus **GitHub Actions**, bukan "Deploy from a branch"

### Website masih belum muncul?
- Tunggu 5-10 menit setelah workflow selesai
- Clear browser cache
- Coba akses dalam incognito mode

### Masih tampil README?
- Pastikan workflow sudah running dan selesai (✅)
- Check di Actions tab untuk status deployment

---

## ✨ Next: Update Website

Setelah live, untuk update konten:

```bash
# Edit files
cd /Users/satyaadidharma/obsidian/fullstack/fullstack/Pareso/pareso-website

# Commit & push
git add .
git commit -m "Update: your changes"
git push

# Auto-deploy! ✨
```

---

**Website URL**: https://satyaaditech.github.io/pareso-website/
