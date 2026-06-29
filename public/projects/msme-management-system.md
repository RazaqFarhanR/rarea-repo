## Ringkasan

Platform manajemen bisnis komprehensif yang dirancang khusus untuk Usaha Mikro, Kecil, dan Menengah (UMKM). Sistem ini mendigitalisasi operasional harian mulai dari manajemen stok, pencatatan transaksi penjualan, manajemen keuangan, hingga pelaporan laba/rugi secara otomatis. Dilengkapi dengan aplikasi mobile companion untuk memberikan notifikasi real-time kepada pemilik usaha. Proyek ini dikembangkan sebagai bagian dari pemenuhan tugas akhir mata kuliah dengan mengadopsi standar arsitektur perangkat lunak tingkat produksi (production-grade).

**Peran:** Full-Stack Laravel & Mobile Developer

---

## Tantangan

Banyak pelaku UMKM yang masih mengelola stok, transaksi, dan keuangan secara manual — menggunakan catatan kertas atau spreadsheet yang tidak terintegrasi. Hal ini menyebabkan ketidakakuratan data stok, kesulitan dalam melacak laba/rugi, dan tidak adanya peringatan dini saat stok barang menipis. Diperlukan sistem terintegrasi yang menghubungkan dashboard web admin dengan notifikasi mobile secara real-time.

---

## Arsitektur dan Pendekatan

Sistem dibangun dengan dua komponen utama yang saling terhubung:

- **Web Application (Laravel)** — Backend RESTful API dan dashboard admin menggunakan Laravel 12 dengan Laravel Blade dan template AdminLTE. Semua logika bisnis (stok, transaksi, keuangan) diproses di sisi server.
- **Mobile Companion (Flutter)** — Aplikasi mobile ringan yang berfungsi sebagai penerima notifikasi push. Terintegrasi dengan Firebase Cloud Messaging (FCM) untuk mengirimkan peringatan otomatis saat stok menipis atau terjadi mutasi barang.


---

## Fitur Utama

- **Manajemen Stok & Supplier:** Pelacakan barang masuk, barang keluar, dan data supplier secara terstruktur.
- **Point of Sales (POS) & Retur:** Pencatatan transaksi penjualan harian dan manajemen pengembalian barang.
- **Pelacakan Keuangan:** Pencatatan pengeluaran dan pembuatan laporan laba/rugi otomatis yang dapat diekspor ke PDF.
- **Notifikasi Push Real-time:** Peringatan otomatis ke aplikasi mobile saat stok barang menipis atau kritis melalui Firebase Cloud Messaging.
- **Dashboard Admin:** Antarmuka web yang intuitif dan responsif untuk mengelola seluruh operasional bisnis.

---

## Tech Stack

- **Backend:** PHP, Laravel 12
- **Web Frontend:** Laravel Blade, AdminLTE
- **Mobile:** Flutter, Dart
- **Notifikasi:** Firebase Cloud Messaging (FCM)
- **Pelaporan:** barryvdh/laravel-dompdf (Export PDF)

---

## Hasil dan Dampak

Sistem ini berhasil menghadirkan solusi bisnis nyata untuk UMKM dengan memadukan manajemen stok yang rapi, pelacakan keuangan otomatis, dan notifikasi mobile real-time. Pemilik usaha kini mendapatkan awareness instan mengenai kondisi bisnisnya — dari stok yang menipis hingga ringkasan laba/rugi — langsung dari smartphone mereka, tanpa perlu membuka laptop atau memeriksa catatan manual.
