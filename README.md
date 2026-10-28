# Foodie

Foodie adalah aplikasi pemesanan makanan sederhana yang dibuat dengan React dan Vite. Pengunjung dapat menjelajahi menu lokal, mencari dan memfilter makanan, melihat detail, serta mengelola keranjang di sisi klien.

## Fitur

- Halaman Home dengan promo, kategori, dan rekomendasi menu.
- Katalog menu dengan pencarian nama, filter kategori, dan empty state.
- Halaman detail makanan dengan jumlah pesanan dan tombol tambah ke keranjang.
- Keranjang interaktif dengan pengaturan jumlah serta perhitungan total.
- Halaman khusus untuk ID makanan yang tidak ditemukan dan route 404.
- Tata letak responsif, CSS Modules, fokus keyboard, dan fallback jika gambar gagal dimuat.
- Komponen Material UI: tombol, kolom pencarian, filter kategori, dan kartu menu.
- Tema Material UI dengan palet warna Foodie dan tipografi DM Sans/Manrope.
- Data dan keranjang berjalan lokal di browser; tidak menggunakan backend, checkout, atau pembayaran.

## Teknologi

- React JS dan Vite
- Material UI (MUI) dan Emotion
- JavaScript
- React Router DOM
- CSS Modules
- Lucide React
- npm

## Cara menjalankan

Pastikan Node.js dan npm sudah terpasang, lalu jalankan dari folder proyek:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

Perintah tambahan:

```bash
npm run build
npm run preview
npm run lint
```

## Struktur proyek

```text
src/
  components/   Komponen Navbar, Footer, FoodCard, FoodImage, dan CartDrawer
  context/      State keranjang melalui React Context
  data/         Array data makanan lokal
  pages/        Home, Menu, FoodDetail, dan NotFound
  utils/        Format mata uang Rupiah
  App.jsx       Layout dan konfigurasi route
  main.jsx      Entry point React dan BrowserRouter
  index.css     Reset, font dasar, dan variabel desain global
```

## Route

| Route | Halaman |
| --- | --- |
| `/` | Home |
| `/menu` | Katalog makanan |
| `/menu/:id` | Detail makanan berdasarkan ID |
| `*` | Halaman 404 untuk URL yang tidak terdaftar |

## Catatan implementasi

- Navigasi menggunakan `BrowserRouter`, `Routes`, `Route`, `Link`, dan `NavLink` dari React Router DOM.
- `FoodDetail` mengambil parameter melalui `useParams()` dan mencari kecocokan pada array `foods` di `src/data/foods.js`. ID tidak valid menampilkan pesan **Makanan Tidak Ditemukan** dan tautan kembali ke menu.
- Route wildcard menampilkan kode 404 dan tautan kembali ke Home.
- Setiap halaman dan komponen menggunakan stylesheet CSS Module tersendiri. `src/index.css` hanya memuat reset, font dasar, dan variabel tema global.
- Tema MUI terpusat di `src/theme.js` dan dipasang melalui `ThemeProvider` di `src/main.jsx`. Tata letak halaman tetap menggunakan CSS Modules dan breakpoint untuk layar tablet serta ponsel.
- Data harga disimpan sebagai angka dan ditampilkan dengan format Rupiah.
- Gambar menggunakan URL Unsplash; saat gambar tidak tersedia, komponen menampilkan fallback Foodie. Koneksi internet diperlukan untuk memuat font dan gambar eksternal.
- Keranjang menggunakan React state dan Context, hanya tersimpan selama aplikasi berjalan, dan tidak melakukan checkout atau pembayaran.

## Pemeriksaan sebelum demonstrasi

- Pastikan koneksi internet tersedia untuk gambar dan font eksternal.
- Uji pencarian, filter kategori, penambahan/pengurangan item, dan total di keranjang.
- Uji route `/`, `/menu`, `/menu/1`, `/menu/999999`, dan URL yang tidak terdaftar.

## Panduan video demo

Rekam layar saat menjalankan `npm run dev`, lalu tunjukkan alur berikut:

1. Buka Home dan tunjukkan tombol MUI **Lihat Menu** serta layout hero.
2. Buka Menu, cari makanan, hapus pencarian, lalu pilih beberapa filter kategori.
3. Tunjukkan kartu makanan, buka salah satu detail, dan tambahkan makanan ke keranjang.
4. Ubah ukuran jendela ke tampilan ponsel untuk memperlihatkan layout responsif.

## Dokumentasi penggunaan AI

AI digunakan sebagai asisten implementasi untuk menerapkan komponen Material UI pada antarmuka yang sudah ada, menyusun tema warna dan tipografi, serta memperbarui dokumentasi. Kode akhir tetap perlu ditinjau dan diuji oleh pemilik tugas. Pemeriksaan proyek yang digunakan: `npm run lint` dan `npm run build`.
