# MotorParts – Toko Sparepart Motor Online

Website jual-beli sparepart motor berbasis HTML5 murni, berjalan langsung di GitHub Pages tanpa server.

## Struktur File

```
motorparts/
├── index.html      # Halaman utama (Beranda, Produk, Keranjang, Profil, Kontak)
├── list.html       # Halaman daftar produk standalone
├── style.css       # Semua styling (responsive, mobile-friendly)
├── script.js       # Logika produk, filter, keranjang (localStorage)
└── images/         # (opsional) simpan gambar produk lokal di sini
```

## Fitur

- Header + navigasi responsif dengan mobile hamburger menu
- Hero banner bertema sparepart motor
- Kategori sparepart dengan shortcut filter
- Daftar produk dengan filter merk, jenis, harga, dan pencarian
- Keranjang belanja persisten via `localStorage`
- Simulasi checkout dengan modal konfirmasi
- Form Login/Register (UI demo)
- Form Kontak
- Aside rekomendasi produk
- Footer dengan sosial media

## Deploy ke GitHub Pages

### Langkah 1 – Buat Repository

1. Buka [github.com](https://github.com) dan login
2. Klik **New repository**
3. Beri nama repo, misal: `motorparts`
4. Pilih **Public**, lalu klik **Create repository**

### Langkah 2 – Upload File

**Cara A – Via GitHub Web:**
1. Di halaman repo, klik **Add file → Upload files**
2. Drag & drop semua file (`index.html`, `list.html`, `style.css`, `script.js`)
3. Klik **Commit changes**

**Cara B – Via Git CLI:**
```bash
git init
git add .
git commit -m "Initial commit: MotorParts website"
git branch -M main
git remote add origin https://github.com/USERNAME/motorparts.git
git push -u origin main
```

### Langkah 3 – Aktifkan GitHub Pages

1. Buka tab **Settings** di repository
2. Scroll ke bagian **Pages** (sidebar kiri)
3. Di **Source**, pilih branch `main` dan folder `/ (root)`
4. Klik **Save**
5. Tunggu 1–2 menit, lalu akses:

```
https://USERNAME.github.io/motorparts/
```

## Menambah Gambar Produk Lokal

1. Buat folder `images/` di root project
2. Simpan gambar produk di sana (misal: `images/kampas-rem.jpg`)
3. Di `script.js`, ganti URL gambar pada `produkData`:
   ```js
   img: "images/kampas-rem.jpg"
   ```

## Teknologi

- HTML5 Semantic Elements
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- localStorage untuk keranjang belanja
- Font Awesome 6 (CDN)
- Unsplash (placeholder gambar)
