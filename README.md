# Jaya Makmur Ban Klaten

Landing page React + Tailwind CSS untuk project UTS Digital Business.

## Fitur

- Hero section dengan copywriting utama
- Katalog produk ban dan velg
- Layanan bengkel: ganti ban, spooring, balancing, konsultasi
- Form booking yang otomatis membuka WhatsApp
- Kontak dan Google Maps embed
- Struktur komponen React yang lebih rapi

## Menjalankan Project

```bash
npm install
npm run dev
```

## Build untuk Hosting

```bash
npm run build
```

Folder hasil build ada di `dist/` dan bisa diunggah ke Netlify, Vercel, atau hosting statis lain.

## Data yang Perlu Diganti

Edit file `src/data/siteData.js` untuk mengganti:

- Nomor WhatsApp admin
- Alamat bengkel
- Jam buka
- Produk dan harga
- Layanan

Ganti juga URL Google Maps di `src/components/Footer.jsx` jika sudah memiliki titik lokasi bisnis yang lebih akurat.
