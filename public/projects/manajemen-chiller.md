## Ringkasan

Platform dua arah yang menggabungkan fitur Manajemen Aset (Chiller) untuk keperluan operasional internal dan Sistem Pemesanan (Ordering) untuk pelanggan dan reseller produk es krim. Aplikasi ini menyatukan dua proses bisnis yang sebelumnya terpisah ke dalam satu antarmuka yang modern dan responsif.

**Peran:** Frontend Developer

---

## Tantangan

Perusahaan F&B kesulitan melacak keberadaan dan kondisi chiller (kulkas pendingin) yang dipinjamkan ke berbagai reseller. Di saat yang sama, proses pemesanan restok es krim masih dilakukan secara manual melalui pesan singkat, yang sangat rentan terhadap human error dan menyulitkan tracking histori pesanan.

---

## Arsitektur dan Pendekatan

Proyek ini sangat menonjolkan sisi Frontend untuk memberikan pengalaman pengguna terbaik:

- **Slicing dengan TailwindCSS** — Desain dibuat sedemikian rupa untuk menjamin responsivitas penuh di perangkat mobile maupun desktop. Penggunaan utility classes memungkinkan penulisan CSS yang minim bloat namun sangat estetik.
- **Manajemen State (ReactJS)** — Saat keranjang pemesanan diubah, state harus di-update ke seluruh komponen terkait (indikator keranjang di header, total harga, dll). Manajemen komponen di ReactJS menangani ini dengan mulus.
- **Integrasi REST API** — Antarmuka frontend secara dinamis mengambil data ketersediaan stok es krim dan status chiller terbaru dari backend.

---

## Fitur Utama

- **Dashboard Aset Chiller:** Pelacakan status, lokasi, dan kondisi seluruh unit chiller yang tersebar di berbagai reseller.
- **Sistem Pemesanan Online:** Antarmuka pemesanan es krim yang intuitif dengan keranjang belanja dinamis dan kalkulasi harga otomatis.
- **Manajemen Stok Real-time:** Tampilan ketersediaan produk yang selalu up-to-date berdasarkan data dari backend.
- **Responsif Multi-device:** Antarmuka yang berfungsi optimal di laptop (untuk admin internal) maupun smartphone (untuk reseller di lapangan).

---

## Tech Stack

- **Frontend:** ReactJS, TailwindCSS
- **Integrasi:** REST API (Axios)
- **State Management:** React Hooks

---

## Hasil dan Dampak

Aplikasi ini berhasil menyatukan dua proses bisnis (aset logistik dan sales) ke dalam satu platform yang modern. Desainnya yang user-friendly membuat para agen reseller dapat merestok produk secara mandiri tanpa perlu menghubungi admin, sehingga memangkas waktu pemrosesan pesanan secara signifikan.
